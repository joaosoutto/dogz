import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DogContext } from '../../context/DogContext';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

const Header = () => {
  const { data } = useContext(DogContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>

        ) : (
          <Link className={styles.login} to="/login">
            Create / Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
