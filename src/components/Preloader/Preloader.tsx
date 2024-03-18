import style from './styles.module.scss';

function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__container}>
        <span className={style.preloader__round}></span>
      </div>
    </div>
  )
};

export default Preloader;