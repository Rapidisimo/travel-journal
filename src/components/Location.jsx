import React from "react"

export default function Background(props) {
    return (
        <>
            <section className="trip-photo" style={{ backgroundImage: `url(${props.img})` }}>
                <section className="location-title">
                <h2 className="location-name">
                    {props.title}
                </h2>
                </section>
                <section className="country">
                    <h4><span className="fa-solid fa-location-dot"></span> {props.location}</h4>
                </section>
                <section className="google-link">
                    <a href={props.gmaps} className="map-link" target="_blank">View on Google Maps</a>
                </section>
                <section className="story">
                    <p className="white-bkg">
                        {props.article}
                    </p>
                </section>
            </section>
            <section className="dates">
                <ul>
                    <li>{props.start}</li>
                    <li>-</li>
                    <li>{props.end}</li>
                </ul>
            </section>
        </>
    )
};