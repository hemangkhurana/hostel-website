import React from "react";
import styles from "./Home.module.css";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import SliderData from "./image-slider/SliderData";
import About from "./About/About.jsx";
import Calendar from "./Calendar/Calendar.jsx";
import NoticeBoard from "./NoticeBoard/NoticeBoard.jsx";

function Home() {
    return (
        <div>
            <NoticeBoard/>
            <ImageSlider slides={SliderData}/>
            <About/>
            <div className={styles.noticeAndEvent}>
                <Calendar/>
            </div>
        </div>
    );
}

export default Home;