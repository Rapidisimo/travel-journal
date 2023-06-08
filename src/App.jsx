import React from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import data from "./data"

export default function App() {
  const trips = data.map( details => {
    return(
      <Location
        key={details.id}
        img={details.imageUrl}
        title={details.title}
        location={details.location}
        gmaps={details.googleMapsUrl}
        article={details.description}
        start={details.startDate}
        end={details.endDate}
      />
    )
  })
  return (
    <>
      <Header />
      {trips}
    </>
  )
};
