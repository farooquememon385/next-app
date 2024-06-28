import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Farooq</div>
      <div className={styles.text}>
        Farooq creative thoughts © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;