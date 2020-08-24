import React, { useContext } from 'react';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../context/useForm';
import { USER_POST } from '../../../services/api';
import { DogContext } from '../../../context/DogContext';
import useFetch from '../../../context/useFetch';
import Error from '../../../Helpers/Error';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(DogContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Register now!</h1>
      <form onSubmit={handleSubmit} style={{marginTop: '4rem'}}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? <Button disabled>Ɛ==3</Button> : <Button>Register!</Button>}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
