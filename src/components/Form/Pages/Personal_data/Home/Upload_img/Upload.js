import React, { useState } from "react";
import style from "./Upload.module.css";
import img from "../../../../../../images/user.png";

const Upload = ({ text, p }) => {
  // Get Image In Users
  const [scrIma, setScrIma] = useState(img);
  const uploadImage = () => {
    let upload = document.createElement("input");
    upload.type = "file";
    upload.click();

    upload.onchange = () => {
      let newFiles = new FileReader();
      newFiles.readAsDataURL(upload.files[0]);
      newFiles.onload = () => setScrIma(newFiles.result);
    };
  };

  return (
    <div className={style.parent}>
      <div className={style.col}>
        <label>{text}</label>
        <div className={style.img}>
          <img src={scrIma} alt="img" />
          <button onClick={uploadImage} type="button">
            تغيير الصورة
          </button>
        </div>
      </div>
      <p>{p}</p>
    </div>
  );
};

export default Upload;