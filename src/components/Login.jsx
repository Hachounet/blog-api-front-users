import { useState } from 'react';
import MailInput from './MailInput';
import PasswordInput from './PasswordInput';
import ButtonElevatedBase from './ButtonElevatedBase';
import PropTypes from 'prop-types';
import { useAuthContext } from '../AuthContext';
import { toast } from 'react-toastify';

export default function Login({ postURL }) {
  const { setLogged } = useAuthContext();

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        return response
          .json()
          .then((data) => ({ data, status: response.status }));
      })
      .then(({ data, status }) => {
        if (status === 400) {
          setErrors(data.errors);
          setSuccessMessage('');
        } else {
          setSuccessMessage(data.message);
          setErrors([]);
          localStorage.setItem('accessToken', data.accessToken);
          setLogged(true);
          toast.success('Successfully logged in!', {
            position: 'bottom-right',
          });
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setErrors([{ msg: 'Something went wrong. Please try again later.' }]);
      });
  };

  return (
    <div>
      {successMessage && <span>{successMessage}</span>}
      <form onSubmit={handleSubmit}>
        <MailInput />
        <PasswordInput />
        <ButtonElevatedBase text="Log in" />
      </form>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li
              key={index}
              className="text-red-500"
            >
              {error.msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Login.propTypes = {
  url: PropTypes.string.isRequired, // Utilisation de PropTypes pour valider les props
  postURL: PropTypes.string.isRequired,
};
