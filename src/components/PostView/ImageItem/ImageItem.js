import styles from "./ImageItem.module.scss";

const ImageItem = ({ image, onView }) => {
  return (
    <li onClick={() => onView(image.id)}>
      <img src={"http://localhost:8080/image/idea/" + image.name} alt="img" />
    </li>
  );
};

export default ImageItem;
