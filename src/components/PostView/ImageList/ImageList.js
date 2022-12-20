import ImageItem from "../ImageItem/ImageItem";
import styles from "./ImageList.module.scss";

const ImageList = ({ images, onView }) => {
  return (
    <ul>
      {images.map((image) => {
        return <ImageItem image={image} key={image.id} onView={onView} />;
      })}
    </ul>
  );
};

export default ImageList;
