import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

export default function NavbarBasic() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { logged } = useAuthContext();

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className=" border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <svg
                width="75px"
                height="75px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M683.49 271.58C799.57 294 887.23 396 887.23 518.44c0 108.17-68.4 200.38-164.36 235.86A251.85 251.85 0 0 1 486.7 918.44h-22.89C324.76 918.44 212 805.87 212 667a252.25 252.25 0 0 1 5-50.26A210.63 210.63 0 0 1 154.82 467c0-103.93 75.08-190.34 174-208.09a189 189 0 0 1 354.64 12.66z"
                  fill="#FFFFFF"
                />
                <path
                  d="M472 918.43c-86.81-39.79-147.09-127.27-147.09-228.78a252.11 252.11 0 0 1 5-50.3 210.66 210.66 0 0 1-62.41-149.89c0-104 75.27-190.52 174.47-208.29a189.37 189.37 0 0 1 163.3-117.35 189.43 189.43 0 0 1 89 107.15C810.62 293.38 898.5 395.49 898.5 518.06c0 108.27-68.57 200.57-164.77 236.08A252.47 252.47 0 0 1 497 918.44h-25z"
                  fill="#FFF9F9"
                />
                <path
                  d="M424 913.49c63.36-47.67 126.25-119.07 126.25-223.84a252.15 252.15 0 0 1 5-50.3 210.66 210.66 0 0 1-62.41-149.88c0-104 75.27-190.52 174.47-208.29a188.05 188.05 0 0 1 17.69-33.3 187.17 187.17 0 0 1 9.25 23.12C810.62 293.38 898.5 395.49 898.5 518.06c0 108.27-68.57 200.57-164.77 236.08A252.47 252.47 0 0 1 497 918.44h-23a254.3 254.3 0 0 1-50-4.95z"
                  fill="#FFD0BB"
                />
                <path
                  d="M357.64 524.24a157.75 157.68 0 1 0 315.5 0 157.75 157.68 0 1 0-315.5 0Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M597.93 389.83a157.7 157.7 0 0 1-48.09 288.32A146.43 146.43 0 0 1 583 389.08a148.27 148.27 0 0 1 14.93 0.75z"
                  fill="#FFCF00"
                />
                <path
                  d="M487 938.92h-23.53A271.91 271.91 0 0 1 191.56 667a274.56 274.56 0 0 1 3.44-43.56 232 232 0 0 1 119.47-382.53 209.4 209.4 0 0 1 384.38 13c121.72 28.86 208.86 138.27 208.86 264.56a272 272 0 0 1-169 251.77A272 272 0 0 1 487 938.92z m16.83-777.14a168.4 168.4 0 0 0-156 104.82l-4.18 10.4-11.11 2a191 191 0 0 0-101 323.28l7.81 7.78-2.19 10.8a232.83 232.83 0 0 0-4.6 46.13A230.95 230.95 0 0 0 463.47 898H487a231 231 0 0 0 216.66-150.73l3.27-8.83 8.84-3.26a231 231 0 0 0 151-216.73c0-110.64-78.73-206-187.19-226.81l-11.87-2.27-3.75-11.49a168.42 168.42 0 0 0-160.1-116.1z"
                  fill=""
                />
                <path
                  d="M515.39 702.4c-98.28 0-178.23-79.92-178.23-178.16s80-178.16 178.23-178.16S693.62 426 693.62 524.24 613.67 702.4 515.39 702.4z m0-315.36c-75.69 0-137.27 61.55-137.27 137.2s61.58 137.2 137.27 137.2 137.27-61.55 137.27-137.2S591.08 387 515.39 387z"
                  fill=""
                />
              </svg>
              Eggcelent Blog
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/posts"
                >
                  <span>Articles</span>
                </Link>
              </li>
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/signup"
                >
                  <span>Sign up</span>
                </Link>
              </li>
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to={logged ? '/logout' : '/login'}
                >
                  <span>{logged ? 'Log out' : 'Log in'}</span>
                </Link>
              </li>
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/about"
                >
                  <span>About</span>
                </Link>
              </li>
              <li
                role="none"
                className="flex items-stretch"
              >
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/profile"
                >
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
}
