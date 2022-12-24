import styles from "./ImageView.module.scss";
import defaultImg from "../../../assets/default_image.png";
import whiteImg from "../../../assets/white_image.png";

const ImageView = ({ selectedImg }) => {
  if (selectedImg === undefined) {
    return <img src={defaultImg} alt="img" />;
  } else {
    return (
      <img
        src={
          selectedImg.name === undefined
            ? whiteImg
            : "http://localhost:8080/image/idea/" + selectedImg.name
        }
        alt="img"
      />
    );
  }
};

export default ImageView;
