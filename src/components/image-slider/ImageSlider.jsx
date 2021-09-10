import React from "react";
import styles from "./ImageSlider.module.css";
import SliderData from "./SliderData";


function ImageSlider() {

    const [x, setX] = React.useState(0)

    function goLeft() {
        return (
            x === 0?setX(-100*(SliderData.length-1)):setX(x+100)
        );
    }

    function goRight() {
        return (
            x === -100*(SliderData.length-1)?setX(0):setX(x-100)
        );
    }

    return (
        <div className={styles.slider}>
            {SliderData.map(function(item, index) {
                return(
                    <div key={index} className={styles.slide} style={{transform:`translateX(${x}%)`}}>
                        {<img className={styles.img} src={item.image} alt="image"/>}
                    </div>
                );
            })}
            <button id={styles.goLeft} onClick={goLeft}><i class="fas fa-angle-left"></i></button>
            <button id={styles.goRight} onClick={goRight}><i class="fas fa-angle-right"></i></button>
        </div>
    );
}

export default ImageSlider;