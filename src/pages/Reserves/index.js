import React, { useRef, useState } from 'react'
import './reserves.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import NavBar from '../../Components/NavBar';


const regex = {
    namePerson: /^([a-z]+)\s[a-z]+(\s[a-z]+|\s[a-z]+\s[a-z]+|\s[a-z]+\s[a-z]+\s[a-z]+)?$/,
    phoneNumber: /^[3]\d{9}$/,
    quantityPeople: /^[1-9]\d*$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    date: /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/,
};

const validateFields = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Campo requerido.';
    } else if (!(regex.namePerson).test(values.name.toLowerCase())) {
        errors.name = 'Nombre inválido! Ingrese al menos su primer nombre y apellido.';
    }

    if (!values.email) {
        errors.email = 'Campo requerido.';
    } else if (!(regex.email).test(values.email)) {
        errors.email = 'Email inválido! No ingrese espacios o guiones.';
    }

    if (!values.phone) {
        errors.phone = 'Campo requerido';
    } else if (!(regex.phoneNumber).test(values.phone)) {
        errors.phone = 'Teléfono inválido! Ingrese 10 digitos empezado en 3.';
    }

    if (!values.service) {
        errors.service = 'Seleccione un servicio.';
    }

    if (!values.quantity) {
        errors.quantity = 'Campo requerido';
    } else if (!(regex.quantityPeople).test(values.quantity)) {
        errors.quantity = 'El número de personas no puede ser menor a 1.';
    }

    if (!values.dateOfReserve) {
        errors.dateOfReserve = 'Indique la fecha para su reserva.';
    } else if (!(regex.date.test(values.dateOfReserve))) {
        errors.dateOfReserve = 'Ingrese una fecha válida.';
    } else {
        const currentDate = new Date().toISOString();
        const dateReserve = new Date(values.dateOfReserve).toISOString();

        if(dateReserve < currentDate)
            errors.dateOfReserve = 'Fecha inválida! Su reserva debe ser con al menos un día de anticipación.';

        // const formated = dateReserve.substring(0, (dateReserve.indexOf("T") | 0) + 6 | 0);
        // values.dateOfReserve = formated.replace("T", " "); // No allow
    }


    return errors;
}

const initialValues = {
    name: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    dateOfReserve: '',
    indications: '',
}

export default function Reserves() {
    const [isSubmitted, setSubmitted] = useState(false)
    const formRef = useRef(null);

    return (
        <>
            <NavBar />

            <section className="reservations-section wrapper-xxl wrapper">
                {/* Detalles de la pagina */}
                <div className="container--details">
                    <h1 className="reservations-section--title">Reservaciones</h1>

                    <article className="reservations-section--description">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo rem voluptas tenetur repudiandae consequatur omnis mollitia perferendis quia quod.</p>
                        </div>
                    </article>
                </div>

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
                            <div className="input-wrapper">
                                <label htmlFor="name">Nombre: </label>
                                <ErrorMessage name="name" component="p" className="form-error" />
                                <Field id="name" type="text" name="name" className={touched.name ? errors.name ? 'error' : 'ok' : ''} />
                                <span className="validity"></span>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="email">Correo electrónico: </label>
                                <ErrorMessage name="email" component="p" className="form-error" />
                                <Field id="email" type="email" name="email" className={touched.email ? errors.email ? 'error' : 'ok' : ''} />
                                <span className="validity"></span>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="phone">Teléfono: </label>
                                <ErrorMessage name="phone" component="p" className="form-error" />
                                <Field id="phone" type="tel" name="phone" className={touched.phone ? errors.phone ? 'error' : 'ok' : ''} />
                                <span className="validity"></span>
                            </div>

                            <div className="input-wrapper">
                                <ErrorMessage name="service" component="p" className="form-error" />
                                <Field id="service" name="service" as="select" aria-label="Selecciona el servicio a reservar" className={touched.service ? errors.service ? 'error' : 'ok' : ''} >
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
                                <label htmlFor="quantity">Cantidad de personas: </label>
                                <ErrorMessage name="quantity" component="p" className="form-error" />
                                <Field id="quantity" type="number" name="quantity" min="1" className={touched.quantity ? errors.quantity ? 'error' : 'ok' : ''} />
                                <span className="validity"></span>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="dateOfReserve">Fecha y hora de la reserva: </label>
                                <ErrorMessage name="dateOfReserve" component="p" className="form-error" />
                                <Field id="dateOfReserve" type="datetime-local" name="dateOfReserve" className={touched.dateOfReserve ? errors.dateOfReserve ? 'error' : 'ok' : ''} />
                                <span className="validity"></span>
                            </div>

                            <Field id="indications" component="textarea" name="indications" cols="30" rows="5" placeholder="Deja aquí tus indicaciones especiales..." aria-label="Deja aquí tus indicaciones especiales" />

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