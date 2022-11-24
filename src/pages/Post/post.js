import { createRef, useState } from "react";
import document from "../../assets/document.png";
import File from "./file";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import styles from "./post.module.scss";
import "./post.module.scss";

const Post = () => {
  const [price, setPrice] = useState("");
  function inputNumberFormat(obj) {
    if (!/^[0-9]+$/.test(obj.value)) {
      setPrice(obj.value.slice(0, -1));
    }

    setPrice(comma(uncomma(obj.value)));
  }
  function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  }
  function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>
            <img
              className={styles.documentImage}
              alt="document"
              src={document}
            />
            아이디어를 판매해보세요!
          </h2>
        </div>
        <div className={styles.contents}>
          <div className={styles.input}>
            <p>카테고리</p>
            <div className={styles.categoryInput}>
              <select className={styles.category1}>
                <option></option>
              </select>
              <select className={styles.category2}></select>
              <select className={styles.category3}></select>
            </div>
          </div>
          <div className={styles.subjectInput}>
            <p>제목</p>
            <input type="text" />
          </div>
          <div className={styles.photo}>
            <File />
          </div>
          <div className={styles.priceInput}>
            <p>가격</p>
            <input
              value={price}
              onChange={(e) => inputNumberFormat(e.target)}
              type="type"
              maxLength={20}
            />
          </div>
          <div className={styles.editor}>
            <p>내용</p>
            <Editor
              initialValue=" "
              initialEditType="wysiwyg"
              language="ko-KR"
              placeholder="여기에 입력해주세요"
              plugins={[colorSyntax]}
            />
          </div>
          <div className={styles.uploadbtn}>
            <input type="button" value="업로드" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
