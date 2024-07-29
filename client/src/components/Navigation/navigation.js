import React from "react";
import "./navigation.css";

export const Navigation = () => {
    return (
        <nav className="navbar dflex w100">
            <ul className="dflex w100">
                <li>
                    <a href='#top'>Página inicial</a>
                </li>
                <li>
                    <a href='#top'>Todos os projetos</a>
                </li>
                <li>
                    <a href='#top'>Login</a>
                </li>
            </ul>
        </nav>
    )
}