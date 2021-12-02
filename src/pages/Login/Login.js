import firebase from "../../firebase/index.js";
import { toast } from 'react-toastify';

export default function Login() {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements;
    try {
      await firebase.auth()
        .signInWithEmailAndPassword(email.value, password.value);
      toast.success('Авторизация успешно пройдена');
    } catch (error) {
      console.log(error);
      toast.error('🦄 ' + error.message );
    }
  }

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" className="primary-input" type="email" placeholder="E-mail" />
        <br />
        <input name="password" className="primary-input" type="password" placeholder="E-mail" />
        <br />
        <button className="primary-btn">
          Войти
        </button>
      </form>
    </>
  )
}
