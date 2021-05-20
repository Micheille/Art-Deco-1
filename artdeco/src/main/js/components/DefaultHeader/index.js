import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function DefaultHeader ({ text }) {
    return (
        <header className="header-default">
            <nav className="header-default__container nav-extended">

                <Navigation />

                <div className="header-default__content nav-content">
                    <span className="header-default__text nav-title">{ text }</span>
                </div>

            </nav>
        </header>
    );
}