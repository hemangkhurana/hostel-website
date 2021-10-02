import React from "react";
import styles from "./Home.module.css";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import SliderData from "./image-slider/SliderData";
import About from "./About/About.jsx";
import History from "./History/History.jsx";
import Achievements from "./Achievements/Achievements.jsx";
import Calendar from "./Calendar/Calendar.jsx";
import NoticeBoard from "./NoticeBoard/NoticeBoard.jsx";

function Home() {
    return (
        <div>
            <ImageSlider slides={SliderData}/>
            <div className={styles.noticeAndEvent}>
                <Calendar/>
                <NoticeBoard/>
            </div>
            <About/>
            <History/>
            <Achievements/>
        </div>
    );
}

export default Home;