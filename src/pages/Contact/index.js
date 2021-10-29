import React, { useRef, useState } from 'react'
import './contact.css'
import NavBar from '../../Components/NavBar';
import Details from '../../Components/PageDetails';
import { Formik, Form, Field, ErrorMessage } from 'formik';


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

const pageDetails = {
        title: "Contáctanos",
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`

};


export default function Contact() {
    const [isSubmitted, setSubmitted] = useState(false)
    const formRef = useRef(null);

    return (
        <>
            <NavBar />

            <section className="contact-section wrapper-xxl wrapper">
                {/* Detalles de la pagina */}
                <Details
                    title={pageDetails.title}
                    details={pageDetails.details}
                    description={pageDetails.description}
                />

                <Formik
                    initialValues={initialValues}

                    validate={validateFields}

                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            setSubmitting(true);
                            const formData = new FormData(formRef.current);

                            const response = await fetch(formRef.current.action, {
                                method: formRef.current.method,
                                body: formData,
                                headers: {
                                    'Accept': 'application/json'
                                },
                            });

                            if(response.ok) {
                                resetForm();
                                setSubmitted(true);
                                setSubmitting(false);
                                // showModal("Ok");
                            } else {
                                // showModal("Error");
                            }
                        } catch (error) {
                                console.log('No se pudo enviar el email', error.message);
                                // showModal("Error");
                        }

                        setTimeout(() => {
                            setSubmitted(false)
                            setSubmitting(false);
                        }, 3000);}
                    }
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form id="form" action="https://formspree.io/f/mwkajdoa" method="POST" ref={formRef} className="main--form" >
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

                            <input type="submit" disabled={isSubmitting} value="Reservar" />

                            {isSubmitted &&
                                <div className="form-submitted--text">
                                    <p>¡Formulario enviado con éxito!<span role="img" aria-label="Formulario enviado con éxito">✅</span></p>
                                </div>
                            }
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    )
}
