import React, { useState } from "react";
import style from "../Qualifications/Home/Qualifications.module.css";
import {
  dargItem,
  dargEnd,
  dargOver,
} from "../Qualifications/Home/f_drag_drop/drag_drop";
import ParentInput from "../Personal_data/Home/ParentInput/ParentInput";
import hendlerData, { getFormValues } from "../hendlerData/hendlerData";
import UsePages, { Icones } from "../UsePage/UsePages";

const Hobbies = () => {
  const targetSeirah = window.localStorage.getItem("targetSeirah");
  let coun = [1, 1, 1, 1, 3];
  const [hobbies, setHobbies] = useState(
    getFormValues(targetSeirah !== null ? `hobbies${targetSeirah}` : "hobbies1")
  );
  const createqualifi = (ind) => {
    return (
      <div key={ind} className={style.parentPages}>
        <Icones index={ind + 1} state1={hobbies} state2={hobbiesNumber} />
        <div
          onDragStart={(e) => dargItem(e.target)}
          onDragEnd={(e) => dargEnd(e.target)}
          onDragOver={(e) => dargOver(e.target)}
          draggable={true}
          className={style.qualificBox}
          key={ind}>
          <span className={style.numberQuali}>{ind + 1}</span>
          <ParentInput
            forId={`hobbie${coun[0]++}`}
            label={"الهواية"}
            paraghrap={"يُفضّل من كلمة إلى 4 كلمات كحد أقصى."}>
            <input
              onChange={(e) => hendlerData(e, setHobbies)}
              id={`hobbie${coun[1]++}`}
              value={hobbies[`hobbie${coun[2]++}`]}
              type="text"
              placeholder="الهواية"
            />
          </ParentInput>
        </div>
      </div>
    );
  };
  let [hobbiesNumber, setHobbiesNumber] = useState(
    getFormValues(
      targetSeirah !== null ? `hobbiesNumber${targetSeirah}` : "hobbiesNumber1"
    )
  );
  return (
    <UsePages
      state={hobbies}
      state2={hobbiesNumber}
      setState2={setHobbiesNumber}
      b1={"أضف هواية جديدة"}
      b2={"حفظ الهويات"}>
      {hobbiesNumber.map((ele, ind) => createqualifi(ind))}
    </UsePages>
  );
};

export default Hobbies;
