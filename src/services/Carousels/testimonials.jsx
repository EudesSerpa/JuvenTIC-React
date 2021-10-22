import React from "react";
import './testimonials.css';


const clientTestimonials = [
    {
        img: "https://i.postimg.cc/N07kZg8Q/personal2-2x.png",
        name: "Lorem, ipsum dolor.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit veritatis tempora dicta beatae aperiam eveniet dolor nesciunt inventore totam.",
    },
    {
        img: "https://i.postimg.cc/QCPQcVDJ/testimonio1-2x.png",
        name: "Lorem, ipsum dolor.",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima atque necessitatibus earum, velit eligendi repudiandae quae, voluptas perferendis, facilis vero odit tempora vel laudantium natus quo dolor voluptatibus aspernatur quos nisi sunt qui? Perferendis hic fugit obcaecati neque. Dicta, repellat!",
    },
    {
        img: "https://i.postimg.cc/76HnkpX0/personal3-2x.png",
        name: "Lorem, ipsum dolor.",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iusto accusantium assumenda sequi est vel id harum, repellat earum distinctio perferendis tempora neque quisquam corrupti, obcaecati, ad explicabo inventore porro.",
    }
];

const SlidesTestimonials = clientTestimonials.map((slide, i) => {
    return (
        <div className="slide" key={`${i}-${slide.img}`}>
            <article className="testimonial">
                <figure className="testimonial-data">
                    <img src={ slide.img } alt="Client profile" loading='lazy' />
                    <figcaption>
                        <p className="detail">
                            <i className="icon-left fas fa-quote-left"></i>
                            { slide.text }
                            <i className="icon-right fas fa-quote-right"></i>
                        </p>
                        <p className="client">
                            { slide.name }
                        </p>
                    </figcaption>
                </figure>
            </article>
        </div>
    );
});

export { SlidesTestimonials };