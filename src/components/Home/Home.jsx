import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import SliderData from "./image-slider/SliderData";
import About from "./About/About.jsx";
import History from "./History/History.jsx";
import Achievements from "./Achievements/Achievements.jsx";
import Calendar from "./Calendar/Calendar.jsx";

function Home() {
    return (
        <div>
            <ImageSlider slides={SliderData}/>
            <Calendar/>
            <About/>
            <History/>
            <Achievements/>
        </div>
    );
}

export default Home;