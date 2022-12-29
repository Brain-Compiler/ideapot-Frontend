import { useState, useEffect } from "react";
import document from "../../assets/document.png";
import Imgs from "../../components/Post/Imgs/Imgs";
import axios from "axios";
import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import styles from "./post.module.scss";
import "./post.module.scss";

const Post = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCatogory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const [imgs, setImgs] = useState([]);
  const editorRef = useRef();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8080/api/idea/category")
        .then((res) => setCategories(res.data));
    })();
  }, []);

  async function uploadPost() {
    await axios.post("http://localhost:8080/api/idea", {
      title: title,
      discription: discription,
      category2: selectedCategory,
      price: price,
    });
  }

  function checkInputHandler() {
    if (selectedCategory === "") {
      alert("카테고리를 선택해주세요");
      return false;
    } else if (title === "") {
      alert("제목을 입력해주세요");
      return false;
    } else if (price === "") {
      alert("가격을 입력해주세요");
      return false;
    } else if (discription === "") {
      alert("내용을 입력해주세요");
      return false;
    } else {
      uploadPost();
    }
  }

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

  function changeEditorHandler() {
    setDiscription(editorRef.current.getInstance().getMarkdown());
    console.log(discription);
  }

  function addImg(img) {
    setImgs([img[0], ...imgs]);
  }

  function deleteImg(img, index) {
    setImgs(imgs.splice(index, index + 1));
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
                <option value="" selected>
                  카테고리를 선택해주세요
                </option>
                {categories.map((category, index) => {
                  return (
                    <option
                      value={category[Object.keys(category)]}
                      key={index}
                      onChange={(e) => setSelectedCatogory(e.target.value)}
                    >
                      {category[Object.keys(category)]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.subjectInput}>
            <p>제목</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.photo}>
            <span>사진</span>
            <input
              type="file"
              id="addImgs"
              accept="img/*"
              onChange={(e) => {
                addImg(e.target.files);
              }}
            />
            <label htmlFor="addImgs" className={styles.addImgs}>
              추가하기
            </label>
            {imgs.map((img, index) => {
              if (img !== undefined) {
                return (
                  <div className={styles.imgBox} key={index}>
                    <span>{img.name}</span>
                    <input
                      type="button"
                      onClick={() => {
                        deleteImg(img, index);
                      }}
                      value="삭제하기"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.priceInput}>
            <p>가격</p>
            <input
              value={price}
              onChange={(e) => inputNumberFormat(e.target)}
              type="text"
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
              hideModeSwitch={true}
              ref={editorRef}
              onChange={changeEditorHandler}
              toolbarItems={[]}
            />
          </div>
          <div className={styles.uploadbtn}>
            <input
              type="button"
              value="업로드"
              onClick={() => checkInputHandler()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
