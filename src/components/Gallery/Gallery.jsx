import React from "react";
import styles from "./Gallery.module.css";
import GalleryData from "./GalleryData";

function PhotoGallery() {
    const [model, setModel] = React.useState(false)
    const [tempImgSrc, setTempImgSrc] = React.useState('')

    function getImg(image) {
        setTempImgSrc(image);
        setModel(true);
    }
    function PhotoCard(props) {
        return (
            <div className={styles.photo_card} onClick={() => getImg(props.image)}>
                <h1 className={styles.img_heading}>{props.imgName}</h1>
                <img className={styles.photo} src={props.image} alt="image" />
            </div>
        );
    }
    const modelClass = model? styles.open : '';
    return (
        <div className={styles.gallery}>
            <h1 className={styles.heading1}>Images Gallery</h1>
            <hr className={styles.hr1}/>
            <div className={`${styles.model} ${modelClass}`}>
                <i class="fas fa-times" onClick={() => setModel(false)}></i>
                <img className={styles.model_img} src={tempImgSrc}/>
            </div>
            <div className={styles.photo_container}>
                {GalleryData.map(PhotoCard)}
            </div>
        </div>
    );
}

export default PhotoGallery;