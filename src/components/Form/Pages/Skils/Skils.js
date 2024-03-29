import React, { useState } from "react";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import {
  dargItem,
  dargEnd,
  dargOver,
  drop,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import style from "../Qualifications/Home/Qualifications.module.css";
import Checkd from "../Personal_data/Home/Checkd/Checkd";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import UsePages, { Icones } from "../UsePage/UsePages";

const Skils = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
  const [skils, setSkils] = useState(
    getFormValues(targetSeirah !== null ? `skils${targetSeirah}` : "skils1")
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <div
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable={true}
          className={style.qualificBox}
          key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          <Icones index={ind + 1} state1={skils} state2={skilsNumber} />
          <ParentInput
            forId={`skilsId${coun[0]++}`}
            label={"المهارة"}
            paraghrap={
              "مسمى المهارة، من كلمة إلى 4 كلمات كحد أقصى. مثال: Photoshop, Excel, أو HTML/CSS .. إلى آخره"
            }>
            <input
              onChange={(e) => hendlerData(e, setSkils)}
              id={`skilsId${coun[1]++}`}
              value={skils[`skilsId${coun[2]++}`]}
              type="text"
              placeholder="المهارة"
            />
          </ParentInput>
          <Checkd forId={`skils${coun[18]++}`} label={"مستواك بها"}>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setSkils)}
                id={`skils${coun[4]++}`}
                type="radio"
                name={`skils${coun[5]++}`}
                value={"20% مبتدئ"}
              />
              مبتدئ
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setSkils)}
                id={`skils${coun[7]++}`}
                type="radio"
                name={`skils${coun[8]++}`}
                value={"40% محدود"}
              />
              محدود
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setSkils)}
                id={`skils${coun[10]++}`}
                type="radio"
                name={`skils${coun[11]++}`}
                value={"60% جيّد"}
              />
              جيّد
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setSkils)}
                id={`skils${coun[13]++}`}
                type="radio"
                name={`skils${coun[14]++}`}
                value={"80% متمكن"}
              />
              متمكن
              <div className={style.tog}></div>
            </label>
            <label className={style.parent_tog}>
              <input
                onChange={(e) => hendlerData(e, setSkils)}
                id={`skils${coun[16]++}`}
                type="radio"
                name={`skils${coun[17]++}`}
                value={"100% متخصص"}
              />
              متخصص
              <div className={style.tog}></div>
            </label>
          </Checkd>
        </div>
      </div>
    );
  };
  let [skilsNumber, setSkilsNumb] = useState(
    getFormValues(
      targetSeirah !== null ? `skilsNumber${targetSeirah}` : "skilsNumber1"
    )
  );
  return (
    <UsePages
      state={skils}
      state2={skilsNumber}
      setState2={setSkilsNumb}
      b1={"أضف خبرة مهارة"}
      b2={"حفظ المهارات"}>
      {skilsNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Skils;
