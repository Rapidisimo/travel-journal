import React from "react";

export default function Header() {
    return(
        <header>
            <h1><a href="#"><span className="fa-solid fa-earth-americas fa-sm"></span> Travel Journal</a></h1>
            <nav>
                <ul>
                    <li><a href="https://instagram.com/foodtechlife_" target="_blank"><i className="fa-brands fa-instagram fa-lg" aria-label="instagram link"></i></a></li>
                    <li><a href="https://youtube.com/foodtechlife" target="_blank"><i className="fa-brands fa-youtube fa-lg" aria-label="youtube link"></i></a></li>
                </ul>
            </nav>
        </header>
    )
};