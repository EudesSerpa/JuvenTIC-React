import React, { useState, useRef, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

import ContactoContext from '../../../Context/contacto/contactoContext';


const regex = {
    namePerson: /^([a-z]+)\s[a-z]+(\s[a-z]+|\s[a-z]+\s[a-z]+|\s[a-z]+\s[a-z]+\s[a-z]+)?$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    date: /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/,
    subject: /^([a-z]+)(\s[a-z])*(\s[a-z]+|\s[a-z]+\s[a-z]+|\s[a-z]+\s[a-z]+\s[a-z]+)?$/i,
};

const validateFields = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Campo requerido.';
    } else if (!(regex.namePerson).test(values.name.trim())) {
        errors.name = 'Nombre inválido! Ingrese al menos su primer nombre y apellido.';
    }

    if (!values.email) {
        errors.email = 'Campo requerido.';
    } else if (!(regex.email).test(values.email)) {
        errors.email = 'Email inválido! No ingrese espacios o guiones.';
    }

    if (!values.subject) {
        errors.subject = 'Campo requerido.';
    } else if (!(regex.subject).test(values.subject.trim())) {
        errors.subject = 'Déjenos saber el asunto por el cual nos contácta.';
    }

    if (!values.service) {
        errors.service = 'Seleccione un servicio.';
    }

    return errors;
}

const initialValues = {
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
}

const templateModalOk = `
    <p>El formulario ha sido enviado éxitosamente. ✅</p>
    <p>Gracias por contáctarnos. Siempre es un gusto atenderte!</p>
    <br /> <br />
    <p>Sal&Salsa Restaurant © <small>JuvenTIC</small></p>
`;

const templateModalError = `
    <p>Lo sentimos, hubo un problema al enviar el formulario. ❌</p>
    <p>Estamos trabajando para resolverlo 🛠</p>
    <br />
    <p>Si el problema persiste, te invitamos a comunicarte por otro medio.</p>
    <p>Agradecemos tu comprensión.</p>
    <br /> <br />
    <p>Sal&Salsa Restaurant © <small>JuvenTIC</small></p>
`;


const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const { crearContacto } = useContext(ContactoContext);

    const dateFormated = (date = new Date(Date.now()).toISOString()) => {
        const formated = date.substring(0, (date.indexOf("T") | 0) + 9 | 0);
        return formated.replace("T", " ");
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, { setSubmitting, resetForm }) =>
                {
                    setSubmitting(true);

                    const {
                    name: nombre_user,
                    email: correo,
                    service: tipo_servicio,
                    message: mensaje } = values;

                    // Format of the BD required
                    const data = {
                        nombre_user,
                        correo,
                        tipo_servicio,
                        fecha_envio: dateFormated(),
                        mensaje
                    };

                    emailjs.sendForm('service_t3774lw', 'template_d1nz07t', formRef.current, 'user_UXa6gReUctUZYFGVyen7Q')
                        .then(response => {
                            console.log(response);

                            crearContacto(data);

                            resetForm();
                            setSubmitted(true);
                            setSubmitting(false);
                            Swal.fire({
                                icon: 'success',
                                title: 'Envío exítoso',
                                html: templateModalOk,
                                showConfirmButton: false,
                                timer: 2000,
                            });
                        }).catch (error => {
                            console.log(error.message);
                            Swal.fire({
                                icon: 'error',
                                title: 'Contacto fallido',
                                html: templateModalError,
                                showConfirmButton: false,
                                timer: 3000,
                            });
                        });

                    setTimeout(() => {
                        setSubmitted(false)
                        setSubmitting(false);
                    }, 3000);
                }
            }
        >
            {({ isSubmitting, errors, touched }) => (
                <Form id="form" action="https://formspree.io/f/xvodjadg" method="POST" ref={formRef} className="main--form" >
                    <div className="input-wrapper select">
                        <ErrorMessage name="service" component="p" className="form-error" />
                        <Field id="service" name="service" as="select" aria-label="Selecciona el servicio a reservar" className={touched.service ? errors.service ? 'error' : 'ok' : ''} required >
                            <option value="" hidden>Selecciona el servicio</option>
                            <option value="cumples">Celebración de cumpleaños</option>
                            <option value="aniversarios">Aniversarios</option>
                            <option value="infantiles">Fiestas infantiles</option>
                            <option value="declaraciones">Declaraciones o Propuestas</option>
                            <option value="despedidas">Despedidas</option>
                            <option value="cenas">Cena con amigos</option>
                        </Field>
                        <span className="validity"></span>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="subject">Asunto: </label>
                        <ErrorMessage name="subject" component="p" className="form-error" />
                        <Field id="subject" type="text" name="subject" className={touched.subject ? errors.subject ? 'error' : 'ok' : ''} placeholder="Asunto" required />
                        <span className="validity"></span>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Nombre: </label>
                        <ErrorMessage name="name" component="p" className="form-error" />
                        <Field id="name" type="text" name="name" className={touched.name ? errors.name ? 'error' : 'ok' : ''} placeholder="Nombre Apellido" required />
                        <span className="validity"></span>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="email">Correo electrónico: </label>
                        <ErrorMessage name="email" component="p" className="form-error" />
                        <Field id="email" type="email" name="email" className={touched.email ? errors.email ? 'error' : 'ok' : ''} placeholder="correo@correo.com" required />
                        <span className="validity"></span>
                    </div>

                    <Field id="message" component="textarea" name="message" cols="30" rows="5" placeholder="Escriba su mensaje aquí" aria-label="Escriba su mensaje aquí..." />

                    <input type="submit" disabled={isSubmitting} value="Contactar" />

                    {isSubmitted &&
                        <div className="form-submitted--text">
                            <p>¡Formulario enviado con éxito!<span role="img" aria-label="Formulario enviado con éxito">✅</span></p>
                        </div>
                    }
                </Form>
            )}
        </Formik>
    );
};


export default ContactForm;