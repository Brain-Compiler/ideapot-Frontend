import styles from "./PostView.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ImageList from "../../components/PostView/ImageList/ImageList";
import ImageView from "../../components/PostView/ImageView/ImageView";

const PostViewer = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [selectdImg, setSelectedImg] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:8080/api/idea/" + id).then((res) => {
        setData(res.data);
        setName(res.data.user.name);
        setImages(res.data.files);
        setSelectedImg(res.data.files[0]);
      });
    })();
  }, [id]);

  const onView = (id) => {
    setSelectedImg(images.find((image) => image.id === id));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.img}>
          <div className={styles.imgView}>
            <ImageView selectedImg={selectdImg} />
          </div>
          <div className={styles.imgList}>
            <ImageList images={images} onView={onView} />
          </div>
        </div>
        <div className={styles.sideMenu}>
          <div className={styles.info}>
            <div className={styles.box1}>
              <div className={styles.title}>
                <h1>{data.title}</h1>
              </div>
              <div className={styles.line1}></div>
              <div className={styles.content}>
                <p>{data.description}</p>
              </div>
            </div>
            <div className={styles.box2}>
              <div className={styles.priceBox}>
                <div className={styles.line2}></div>
                <span className={styles.price}>{data.price}</span>
              </div>
              <div className={styles.writerInfo}>
                <span>{data.createdAt}</span>
                <span>{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostViewer;
