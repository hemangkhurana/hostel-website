import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import SliderData from "./image-slider/SliderData";
import About from "./About/About.jsx";
import History from "./History/History.jsx";
import Achievements from "./Achievements/Achievements.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <ImageSlider slides={SliderData}/>
            <About/>
            <History/>
            <Achievements/>
        </div>
    );
}

export default App;