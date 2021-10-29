import React from 'react'
import './details.css';

export default function Details({ title, details, description }) {
    return (
        <div className="page--details">
            <h1 className="titles page--title">{ title }</h1>

            <article className="page--description">
                <div>
                    <p>
                        { details }
                    </p>
                    <br />
                    <p>
                        { description }
                    </p>
                </div>
            </article>
        </div>
    )
}
