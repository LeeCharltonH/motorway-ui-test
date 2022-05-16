import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Gallery from "./components/gallery/gallery";
import GalleryPreview from "./components/gallery/galleryPreview";
import Form from './components/form/form';

const App = () => {
  const [images, setImages] = useState();
  const [preview, setPreview] = useState();
  const [form, setForm] = useState(false);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const leftHandler = () => {
    setPreview(images[images.indexOf(preview) - 1]);
  };
  const rightHandler = () => {
    setPreview(images[images.indexOf(preview) + 1]);
  };

  return (
    <div className={styles.app}>
      <header><h1>Image Gallery</h1>
      <button className={styles.headerForm} onClick={() => setForm(state => !state)}>Contact Form</button>
      </header>
      <main>
        <Gallery data={images} onClick={setPreview} />
        {preview && (
          <GalleryPreview
            data={preview}
            left={leftHandler}
            right={rightHandler}
            setPreview={setPreview}
          />
        )}
      </main>
      {form && <Form setForm={setForm} />}
    </div>
  );
};

export default App;
