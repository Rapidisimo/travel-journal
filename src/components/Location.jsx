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
                    <h4>M {props.location} <a href={props.gmaps} className="map" target="_blank">View on Google Maps</a></h4>
                </section>
                <section className="story white-bkg">
                    <p>
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