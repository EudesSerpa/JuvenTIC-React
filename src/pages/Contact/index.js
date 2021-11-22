import React from 'react'
import './contact.css'

import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'
import Details from '../../Components/PageDetails';
import ContactForm from '../../Components/Forms/ContactForm';


const pageDetails = {
    title: "Contáctanos",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?`
};


export default function Contact() {
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

                <ContactForm />
            </section>

            <Footer/>
        </>
    )
}
