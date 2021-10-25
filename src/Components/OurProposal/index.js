import React from 'react'

export default function OurProposal() {
    return (
        <section style={OurProposalSection}>
            <div className="wrapper wrapper-xxl">
                <h2 style={title}>Nuestra propuesta</h2>

                <p style={OurProposalText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur repudiandae amet voluptatibus vero necessitatibus odit in natus maiores id aperiam dicta totam quos quas nemo perspiciatis at voluptates consequatur, libero ad voluptas optio. Voluptatum delectus, esse doloribus dignissimos sit sunt voluptas ab accusamus amet cumque. Error recusandae quas reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur ipsam sed similique alias magni. Sapiente, provident fugit aliquid dolores distinctio reiciendis ullam sint. At necessitatibus veniam assumenda corporis. Ipsa?
                </p>
            </div>
        </section>
    )
}


const OurProposalSection = {
    width: "100%",
    minHeight: "700px",
    color: "#fff",
    textAlign: "center",
    backgroundImage: "url(\"https://i.postimg.cc/4dyHwZBL/foto2-2x.png\")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "linear-gradient(-180deg, var(--orange-dark) 30%, var(--orange) 50%)",
}

const title = {
    margin: "20px auto 40px",
    fontSize: "2.4rem",
    fontWeight: "bold",
}

const OurProposalText = {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "1.6rem",
    lineHeight: "1.7",
    textAlign: "justify",
}