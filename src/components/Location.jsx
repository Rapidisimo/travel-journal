import React from "react"

export default function Location(props) {
    return (
        <>
            <section className="trip" style={{ backgroundImage: `url(${props.imageUrl})` }}>
                <section className="location-title">
                <h2 className="location-name">
                    {props.title}
                </h2>
                </section>
                <div className="country">
                    <h4><span className="fa-solid fa-location-dot"></span> {props.location}</h4>
                </div>
                <div className="google-link">
                    <a href={props.gmaps} className="map-link" target="_blank">View on Google Maps</a>
                </div>
                <section className="story">
                    <p className="white-bkg">
                        {props.description}
                    </p>
                </section>
            </section>
            <div className="dates">
                <p>{props.startDate} - {props.endDate}</p>
            </div>
        </>
    )
};