// import React from 'react';
// import Input from '../../Forms/Input';
// import Button from '../../Forms/Button';
// import useForm from '../../../context/useForm';
// import useFetch from '../../../context/useFetch';
// import { PASSWORD_LOST } from '../../../services/api';

// const LoginPasswordLost = () => {
//   const login = useForm();
//   const {data, loading, error, request} = useFetch();

//  async function handleSubmit(event) {
//     event.preventDefault();
//     const {url, options} = PASSWORD_LOST({login: login.value, url: })
//     request(url, options);


//   }
//   return (
//     <section>
//       <h1 className="title">Lost password?</h1>
//       <form onSubmit={handleSubmit}>
//         <Input label="Email / User" type="text" name="login" {...login} />
//         <Button>Send email</Button>
//       </form>
//     </section>
//   );
// };

// export default LoginPasswordLost;
