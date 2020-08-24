import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DogContext } from '../../../context/DogContext';
import styles from './LoginForm.module.css';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../context/useForm';
import Error from '../../../Helpers/Error';
// import { TOKEN_POST, USER_GET } from '../../../services/api';
import stylesBtn from '../../Forms/Button.module.css';

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(DogContext);

  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Awuf Awuf!!!</Button>
        ) : (
          <Button>Login</Button>
        )}
        <Error error={error} />
      </form>
      {/* <Link className={styles.perdeu} to="/login/lostPassword">
        Lost your password?
      </Link> */}
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Dont have a account yet? Come and register your paw!</p>
        <Link className={stylesBtn.button} to="/login/createUser">
          Create User
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
