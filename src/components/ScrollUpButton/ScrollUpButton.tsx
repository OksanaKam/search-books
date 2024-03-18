import { FC, useState } from "react";
import style from "./styles.module.scss";

const ScrollUpButton: FC = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className={style.scroll} type="button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Up</button>
  )
}

export default ScrollUpButton;