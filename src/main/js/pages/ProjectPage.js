import React from 'react';

import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";

import image1 from '../../resources/static/img/1/1.jpg';
import image2 from '../../resources/static/img/1/2.jpg';
import image3 from '../../resources/static/img/1/10.jpg';
import image4 from '../../resources/static/img/2/3.jpg';
import image5 from '../../resources/static/img/2/4.jpg';
import image6 from '../../resources/static/img/2/6.jpg';

import '../../resources/static/style.css';


export const ProjectPage = () => {
    return (
        <>
            <DefaultHeader text="Наши проекты"/>
            <div className="container1">
                <div className="box1">
                    <img alt src={image1}/>
                </div>
                <div className="box1">
                    <img alt src={image2}/>

                </div>
                <div className="box1">
                    <img alt src={image3}/>

                </div>
                <div className="box1">
                    <img alt src={image4}/>

                </div>
                <div className="box1">
                    <img alt src={image5}/>

                </div>
                <div className="box1">
                    <img alt src={image6}/>

                </div>
            </div>

            <Footer/>
        </>

    )
}