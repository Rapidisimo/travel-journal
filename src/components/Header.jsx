import React from "react";

export default function Header() {
    return(
        <header>
            <nav>
                <h1><a href="#"><span className="fa-solid fa-earth-americas"></span> Travel Journal</a></h1>
                <ul>
                    <li><a href="https://instagram.com/foodtechlife_" target="_blank"><span className="fa-brands fa-instagram fa-lg"></span></a></li>
                    <li><a href="https://youtube.com/foodtechlife" target="_blank"><span className="fa-brands fa-youtube fa-lg"></span></a></li>
                </ul>
            </nav>
        </header>
    )
};