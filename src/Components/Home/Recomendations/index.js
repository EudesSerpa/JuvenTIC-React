import React from 'react'
import './recomendations.css';
import { Link } from 'react-router-dom';

const trendingProducts = [
    {
        img: "https://i.postimg.cc/FRNDKfFf/menu4-2x.png",
        name: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aut.",
    },
    {
        img: "https://i.postimg.cc/W3wYmGY6/menu1-2x.png",
        name: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aut.",
    },
    {
        img: "https://i.postimg.cc/Wz48MQkT/menu3-2x.png",
        name: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aut.",
    },
    {
        img: "https://i.postimg.cc/KcQsR5Mm/menu2-2x.png",
        name: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aut.",
    },
];

export default function Recomendations() {
    const plates = trendingProducts.map(plate => (
        <Link key={ plate.img } to="/menu" className="plate">
            <figure className="plate-image">
                <img src={plate.img} alt={ plate.name } loading="lazy" />

                <figcaption className="plate-details">
                    <p className="plate-name">{ plate.name }</p>
                    <p className="plate-description">
                        { plate.description }
                    </p>
                </figcaption>
            </figure>
        </Link>
    ));


    return (
        <section className="recommendations-section">
            <div className="wrapper-xxl wrapper">
                <h2 className="titles section--title">Las recomendaciones del chef</h2>

                <div className="trending-products">
                    <div className="products">
                        { plates }
                    </div>

                    <div className="menu-link">
                        <Link to="/menu" aria-label="Menu image">
                            <img src="https://i.postimg.cc/wM9PnfRG/menu-2x.png" alt="menu" />
                        </Link>
                        <Link to="/menu" className="menu-link--button" >
                            Degusta nuestros mejores platos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
