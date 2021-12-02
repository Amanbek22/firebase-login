import { useCallback } from "react";
import { useHistory } from "react-router";
import app from "../../firebase/index.js";
import { toast } from 'react-toastify';

export default function Register() {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const { email, password } = e.target.elements;
      try {
        await app
          ?.auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        toast.success('Регистрация успешно пройдена');
        history.push("/");
      } catch (error) {
        console.log(error);
        toast.error('🦄 ' + error.message);
      }
    },
    [history],
  )

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" className="primary-input" type="email" placeholder="E-mail" />
        <br />
        <input name="password" className="primary-input" type="password" placeholder="E-mail" />
        <br />
        <button className="primary-btn">
          Зарегистрироваться
        </button>
      </form>
    </>
  )
}
