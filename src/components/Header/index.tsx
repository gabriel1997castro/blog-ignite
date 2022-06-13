import styles from './header.module.scss';

export default function Header(): React.ReactElement {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src="/Logo.svg" alt="logo" />
      </div>
    </header>
  );
}
