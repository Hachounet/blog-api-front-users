import { useState } from 'react';
import PseudoInput from './PseudoInput';
import MailInput from './MailInput';
import PasswordInput from './PasswordInput';
import ConfPasswordInput from './ConfPasswordInput';
import ButtonElevatedBase from './ButtonElevatedBase';
import PropTypes from 'prop-types';

export default function SignUp({ postURL }) {
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
      .then((response) =>
        response.json().then((data) => ({ data, status: response.status }))
      )
      .then(({ data, status }) => {
        if (status === 400) {
          setErrors(data.errors); // Afficher les erreurs
          setSuccessMessage('');
        } else {
          setSuccessMessage(data.message); // Afficher un message de succès
          setErrors([]); // Réinitialiser les erreurs
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setErrors([{ msg: `Something went wrong. Please try again later.` }]);
      });
  };

  return (
    <div>
      {successMessage && <span>{successMessage}</span>}
      <form onSubmit={handleSubmit}>
        <PseudoInput />
        <MailInput />
        <PasswordInput />
        <ConfPasswordInput />
        <ButtonElevatedBase text="Sign Up" />
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

SignUp.propTypes = {
  postURL: PropTypes.string.isRequired,
};
