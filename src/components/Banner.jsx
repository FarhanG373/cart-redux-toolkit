import React from "react";
import s from "./component.module.scss";

const Banner = ({ children, img, heading, button, pageLink, detail }) => {
  return (
    <div className={s.banner}>
      {img && <img src={img} alt={heading} className={s.img} />}
      
      <div className={s.details}>
      {heading && <h1 className={s.heading}>{heading}</h1>}
      {detail && <p>{detail}</p>}
      {button && (
        <a href={pageLink} className={s.button}>
          {button}
        </a>
      )}
      </div>
      {children && <div className={s.children}>{children}</div>}
    </div>
  );
};

export default Banner;
