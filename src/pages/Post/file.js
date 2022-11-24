import { useState } from "react";
import styles from "./post.module.scss";
import "./post.module.scss";

const File = () => {
  const [file, setFile] = useState([]);

  function addFileInput() {
    setFile([...file, "f" + (file.length + 1)]);
    console.log(file);
  }

  function makeInput() {
    const array = [];
    for (let i = 0; i < file.length; i++) {
      const id = file[i];
      array.push(
        <div className={styles.imgBox}>
          <input type="file" name="file[]" id={id} />
          <span>X</span>
        </div>
      );
    }
    return array;
  }

  return (
    <div className={styles.cnrkgkrl}>
      <p>
        사진{" "}
        <label
          className={styles.addbtn}
          for={"f" + file.length}
          onClick={addFileInput}
        >
          +추가하기
        </label>
      </p>
      {makeInput()}
    </div>
  );
};

export default File;
