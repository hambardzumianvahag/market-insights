import styles from './Insights.module.css';


export default function Insights() {
  
  function selectPart(title, options){
    return (
      <div className={styles.insightsSelect}>
        <h4 className={styles.selectTitle}>{title}</h4>
        <div className={styles.selectBtnDiv}>
          {options.map((option,key)=>{
            return (
                <button className={styles.selectBtn} key={key}>{option}</button>
            )
          })}
        </div>
      </div>
    )
  }
  
  return (
    <section className={styles.insights}>
      <div>
        <h2 className={styles.insightsHeader}>Market Insights</h2>
      </div>
      <div className={styles.insightsFilter}>
        {selectPart('Select Date Range', ['1W', '1M', '3M', '6M', '1Y', '2Y'])}
        {selectPart('Select Market', ['All', 'Primary', 'Secondary'])}
      </div>
    </section>
  )
};
