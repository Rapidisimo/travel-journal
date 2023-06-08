import React from "react"

function Background(props) {
    return (
        <section className="trip-photo" style={{ backgroundImage: `url(${props.img})` }}>
            <h2 className="location-name">
                {props.title}
            </h2>

        </section>
    )
};

export default Background