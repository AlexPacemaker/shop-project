//Footer

import styles from "./Footer.module.scss";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <footer className='page-footer #c5cae9 indigo lighten-4'>
        <div className='black-text footer-copyright'>
          <div className='container'>
            PaceMaker © {new Date().getFullYear()}
            <a className='black-text text-lighten-4 right' href='#!'>
              More Links
            </a>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
