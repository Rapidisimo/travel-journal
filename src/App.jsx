import React from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import data from "./data"

export default function App() {
  const trips = data.map( details => {
    return(
      <Location
        {...details}
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
