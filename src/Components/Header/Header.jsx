// Header component

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.navMaine}>
      <nav className='#e57373 red lighten-2'>
        <div className='nav-wrapper'>
          <div className={styles.refs}>
            <a href='#s' className='brand-logo'>
              Fortnite React Shop
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='collapsible.html'>Repository</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
