import styles from "./gallery.module.css";

const Gallery = (props) => {
  const images = props.data;

  return (
    <div className={styles.galleryContainer}>
      {images && images.map((img) => (
        <div key={img.id} className={styles.galleryItem} onClick={() => props.onClick(img)}>
          <img
            src={`${img.url}.jpg`}
            alt={img.alt_description}
            className={styles.galleryImage}
          />
          <div className={styles.thumbnailOverlay}>
              Likes {img.likes.toLocaleString("en-UK")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
