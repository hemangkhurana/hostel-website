import React from 'react';
import styles from './Gallery.module.css';
import GalleryData from './GalleryData';

function PhotoGallery() {
    const [model, setModel] = React.useState(false);
    const [tempImgSrc, setTempImgSrc] = React.useState('');
    const [tempImgName, setTempImgName] = React.useState('');

    const  getImg = (props) => {
        setTempImgSrc(props.image);
        setTempImgName(props.imgName);
        setModel(true);
    }
    const  PhotoCard = (props) => {
        return (
            <div className={styles.photo_card} onClick={() => getImg(props)}>
                <h1 className={styles.img_heading}>{props.imgName}</h1>
                <img
                    className={styles.photo}
                    src={props.image}
                    alt="PersonImage"
                />
            </div>
        );
    }
    const modelClass = model ? styles.open : '';
    return (
        <div className={styles.gallery}>
            <div className={`${styles.model} ${modelClass}`}>
                <i className="fas fa-times" onClick={() => setModel(false)}></i>
                <h1 className={styles.model_imgName}>{tempImgName}</h1>
                <img
                    className={styles.model_img}
                    src={tempImgSrc}
                    alt="PersonImage"
                />
            </div>
            <div className={styles.photo_container}>
                <img
                    className={`${styles.photo} ${styles.gallery_heading}`}
                    src={require('./Images/Heading.png')}
                    alt="Hostel Images"
                />
                {GalleryData.map(PhotoCard)}
            </div>
        </div>
    );
}

export default PhotoGallery;
