import { Link } from 'react-router-dom';

export default function FooterThreeCols() {
  return (
    <>
      {/*    <!-- Component: Three Columns Footer --> */}
      <footer className="w-full text-slate-500 fixed bottom-0 z-10">
        {/*      <!-- Main footer --> */}
        <div className="pt-8 pb-2 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 justify-items-center">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-product-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-3"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Fake page (disabled)
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://blog-api-front-cms.vercel.app/"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Editor panel
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-about-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-3"
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/about"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Fake about us page
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-get-in-touch-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-3"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Fake contact page (disabled)
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Three Columns Footer --> */}
    </>
  );
}
