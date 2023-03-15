// Header component

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.navMaine}>
      <nav className='#c5cae9 indigo lighten-4'>
        <div>
          <div className={styles.refs}>
            <a href='#s' className='brand-logo'>
              Fortnite React Shop
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a className={styles.rep} href='collapsible.html'>
                  Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
