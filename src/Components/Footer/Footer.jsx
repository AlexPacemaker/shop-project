//Footer

import styles from "./Footer.module.scss";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <footer className='page-footer #4db6ac teal lighten-2'>
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
