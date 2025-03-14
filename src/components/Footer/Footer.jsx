import Trending from '../Trending/Trending';
import styles from './Footer.module.css';
import footerLogo from '../../assets/img/footer-logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Trending />
      <div className={styles.footerLastPart}>
        <div>
          <img className={styles.footerLogo} src={footerLogo} alt="footerLogo" />
        </div>
        <div>
          <p>&copy; 2023, Broker Terminal, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

