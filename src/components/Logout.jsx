import ButtonLogOut from './ButtonLogOut';
import { useAuthContext } from '../AuthContext';
import { toast } from 'react-toastify';

const Logout = () => {
  const { setLogged } = useAuthContext();

  const handleClick = () => {
    localStorage.removeItem('accessToken');
    setLogged(false);
    toast.success('Successfully logged out!', {
      position: 'bottom-right', // Position définie dans ToastContainer de App.js
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="text-xl flex justify-center items-center flex-grow mb-[193.25px]">
      THIS IS LOGOUT PAGE WIP
      <span>Click here to log out.</span>
      <ButtonLogOut
        text="Log out"
        onClickFn={handleClick}
      ></ButtonLogOut>
    </div>
  );
};

export default Logout;
