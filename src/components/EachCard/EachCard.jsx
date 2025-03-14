import styles from './EachCard.module.css';

export default function EachCard({title, subTitle, percentage, footerText}) {
  return (
    <div>
      <div className={styles.mainCard}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{subTitle}</p>
        <div className={styles.cardFooter}>
          <div className={styles.cardProgress}>
          <p className={styles.triangle}>&#x25B2;</p>
          <p>{percentage}</p>
          </div>
          <p className={styles.footerText}>{footerText}</p>
        </div>
      </div>
    </div>
  )
}

