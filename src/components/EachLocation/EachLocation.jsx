import styles from './EachLocation.module.css';
import chatImg from '../../assets/img/message.png'

export default function EachLocation({imgSrc, name, number, progress}) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainDivInfo}>
        <div className={styles.avatar}>
          <img src={imgSrc} alt="avatar" />
        </div>
        <div className={styles.chatIcon}>
          <img src={chatImg} alt="message img" />
        </div>
        <div className={styles.nameDiv}>
          <h4 className={styles.nameTitle}>{name}</h4>
          <span className={styles.numberTitle}>{number}</span>
        </div>
      </div>
      <div>
        <div className={styles.progressDiv}>
          <p className={styles.progressIcon}>&#9654;</p>
          <p className={styles.progressText}>{progress}</p>
        </div>
      </div>
    </div>
  )
}
