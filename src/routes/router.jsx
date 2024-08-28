import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/ErrorPage';
import About from '../components/About';
import Login from '../components/Login';
import Logout from '../components/Logout';
import SignUp from '../components/SignUp';
import AllPosts from '../components/AllPosts';
import Profile from '../components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          <AllPosts url="https://hachounet-blog-api-backend.adaptable.app/" />
        ),
      },
      {
        path: '/posts',
        element: (
          <AllPosts url="https://hachounet-blog-api-backend.adaptable.app/posts" />
        ),
      },
      {
        path: '/signup',
        element: (
          <SignUp postURL="https://hachounet-blog-api-backend.adaptable.app/signup"></SignUp>
        ),
      },
      {
        path: '/login',
        element: (
          <Login
            url="https://hachounet-blog-api-backend.adaptable.app/login"
            postURL="https://hachounet-blog-api-backend.adaptable.app/login"
          ></Login>
        ),
      },
      {
        path: '/logout',
        element: (
          <Logout
            url="https://hachounet-blog-api-backend.adaptable.app/logout"
            postURL="https://hachounet-blog-api-backend.adaptable.app/logout"
          ></Logout>
        ),
      },
      {
        path: '/about',
        element: (
          <About url="https://hachounet-blog-api-backend.adaptable.app/about"></About>
        ),
      },
      {
        path: '/profile',
        element: (
          <Profile url="https://hachounet-blog-api-backend.adaptable.app/profile"></Profile>
        ),
      },
    ],
  },
]);

export default router;
