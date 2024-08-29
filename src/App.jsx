import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Assurez-vous d'importer les styles de Toastify

export default function App() {
  return (
    <>
      <AuthProvider>
        <div className="h-screen flex flex-col">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </AuthProvider>
    </>
  );
}
