import styles from './Header.module.css';
import logo from '../../assets/img/header-logo.png'
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState('&#9776;')

  useEffect(()=>{
    if(!isMenuOpen) setMenuIcon('&#9776;')
    else setMenuIcon('&#10005;')

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="market logo" />
      </div>
      <div className={styles.headerMenu}>
        <div>
          <nav className={styles.headerMainNav}>
              <ul>
                <li>Home</li>
                <li>Property Listing</li>
                <li>Dubai property market insights</li>
                <li>News</li>
                <li>About us</li>
              </ul>
          </nav>
        </div>
        <div>
          <nav className={styles.headerRegisterNav}>
            <ul>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Burger Menu */}
      <span className={styles.burgerIcon} onClick={toggleMenu}>
        {!isMenuOpen ? 
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='burgerMenu' width='25' /> 
        : 
        <img src='https://static.thenounproject.com/png/659815-200.png' alt='close menu' width='25' />}
      </span>
        {isMenuOpen && (
        <div className={styles.burgerMenu}>
          <nav className={styles.burgerMenuNav}>
            <p>Home</p>
            <p>Property Listing</p>
            <p>Dubai property market insights</p>
            <p>News</p>
            <p>About us</p>
          </nav>
          <nav className={styles.burgerMenuNavRegister}>
            <p>Register</p>
            <p>Login</p>
          </nav>
        </div>
      )}
    </header>
  )
};
