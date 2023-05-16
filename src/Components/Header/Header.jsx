// Header component
import styles from "./Header.module.scss";

const Header = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <header className={styles.navMaine}>
      <nav className='#c5cae9 indigo lighten-4'>
        <div>
          <div className={styles.refs}>
            <span onClick={handleClick} className='brand-logo'>
              Fortnite React Shop
            </span>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a
                  className={styles.rep}
                  href='https://github.com/AlexPacemaker/shop-project'
                  target='blank'
                >
                  Code Source
                </a>
              </li>
              <li>
                <a
                  className={styles.rep}
                  href='https://alexpacemaker.github.io/portfolio/'
                  target='blank'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={styles.rep}
                  href='https://github.com/AlexPacemaker'
                  target='blank'
                >
                  GitHub
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
