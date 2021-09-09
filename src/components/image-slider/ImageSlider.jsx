import React from "react";
import SliderData from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import styles from  "./ImageSlider.module.css";

function ImageSlider({slides}) {
    const [current, setCurrent] =React.useState(0)
    const length = slides.length

    function nextSlide() {
        setCurrent(current===length-1 ? 0 : current+1)
    }
    function prevSlide() {
        setCurrent(current===0? length-1 : current-1)
    }
    console.log(current);
    

    if ( !Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    return (
        <div className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={styles.right_arrow} onClick={nextSlide}/>
            {SliderData.map(function(obj, index) {
                return (
                    <div className={index===current ? 'obj active' : 'obj'} key={index}>
                        {index===current && (<img className={styles.image} src={obj.image} alt="Image" />)}
                    </div>
                );
            })}
        </div>
    );
}

export default ImageSlider;