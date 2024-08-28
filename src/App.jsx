import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header logged={false}></Header>

        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}
