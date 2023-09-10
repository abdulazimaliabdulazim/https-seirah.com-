import React from "react";
import style from "./Features.module.css";
import img1 from "../../images/home-img/id1.png";
import img2 from "../../images/home-img/id2.png";
import img3 from "../../images/home-img/id3.png";
import img4 from "../../images/home-img/id4.png";
import img5 from "../../images/home-img/id5.png";
import img6 from "../../images/home-img/id6.png";
import Container from "../Container/Container";

const ColBox = ({ img, alt, head, p }) => {
  return (
    <div className={style.boxFeature}>
      <div className={style.boxImg}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.childBox}>
        <h4>{head}</h4>
        <p>{p}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className={style.parent}>
      <Container>
        <span>لماذا سيرة ؟</span>
        <h3> أكثر من مجرّد آداة لإنشاء السيرة</h3>
        <div className={style.parentCol}>
          <ColBox
            img={img1}
            alt={"id1"}
            head={"رابط دائم لسيرتك 📌"}
            p={
              "في عصر الإنترنت، لا أحد يذهب للتقديم على وظيفة بملف وعشرات المستندات، يكفي أن تُرسل رابط سيرتك الذاتية إلى مسؤول التوظيف وسيمكنه من الإطلاع سيرتك كاملة من أي جهاز وفي أي وقت."
            }
          />
          <ColBox
            img={img2}
            alt={"id2"}
            head={"خصوصية عالية 🔒"}
            p={
              "يمكنك حماية سيرتك بكلمة مرور وبالتالي لن يستطيع أحد الإطلاع عليها إلا إن رغبت أنت بذلك."
            }
          />
          <ColBox
            img={img3}
            alt={"id3"}
            head={"سهولة التحديث 🛵"}
            p={
              "أنت مضطر غالباً لتحديث بيانات سيرتك بإستمرار عند أي دورة جديدة حصلت عليها أو خبرة عملية أو حتى عند تغيير بيانات اتصالك، سيرة تجعل عملية تحديث سيرتك أسهل وأسرع."
            }
          />
          <ColBox
            img={img4}
            alt={"id4"}
            head={"لغات متعددة 🇸🇦🏴󠁧󠁢󠁥󠁮󠁧󠁿🇫🇷"}
            p={
              "يمكنك كتابة سيرتك بأي عدد من اللغات، تظهر سيرتك لصاحب العمل بجميع اللغات المختارة."
            }
          />
          <ColBox
            img={img5}
            alt={"id5"}
            head={"قوالب وتصاميم متعددة 📐"}
            p={
              "يمكنك دائماً تغيير قالب سيرتك والحصول على سيرة ذاتية مختلفة تماماً ومميزة بدون أن تعيد كتابة أي حرف من بياناتك، أكتبها مرة وغير تصميمها عشرات المرات مستقبلاً."
            }
          />
          <ColBox
            img={img6}
            alt={"id6"}
            head={"سريع وعملي ⏱"}
            p={"سيرتك جاهزة للنشر خلال دقائق، لا تفوّت أي فرصة عمل بعد اليوم."}
          />
        </div>
      </Container>
    </div>
  );
};

export default Features;
