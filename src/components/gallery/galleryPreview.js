import styles from "./galleryPreview.module.css";

const GalleryPreview = (props) => {
  const image = props.data;

  return (
    <div className={styles.previewBackdrop}>
      <div className={styles.previewContainer}>
        <img
          src={`${image.url}.jpg`}
          alt={image.alt_description}
          className={styles.image}
        />
        <div className={styles.imgDetails}>
          <div>Likes {image.likes.toLocaleString("en-UK")}</div>
          <div className={styles.profileDetails}>
            <img
              src={`${image.user.profile_image}.jpg`}
              alt={`${image.user.first_name} ${image.user.last_name} profile image`}
              className={styles.profileImage}
            />
            <div>
              <p>{image.user.username}</p>
              <p className={styles.location}>{image.user.location}</p>
            </div>
            <div className={styles.description}>
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={() => props.setPreview('')}>
        Close
      </button>
      <button className={styles.leftBtn} onClick={props.left}>
        ❮
      </button>
      <button className={styles.rightBtn} onClick={props.right}>
        ❯
      </button>
    </div>
  );
};

export default GalleryPreview;
