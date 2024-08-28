export default function NotificationIconBasicLight() {
  return (
    <>
      {/*<!-- Component: Basic title & text light themed notification with close button and leading icon --> */}
      <div
        className="relative flex w-80 max-w-full flex-col overflow-hidden rounded bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-lg shadow-slate-500/20 ring-1 ring-inset ring-slate-200"
        role="status"
      >
        {/*  <!-- Heading with icon & close button --> */}
        <div className="mb-2 flex items-center gap-4">
          {/*    <!-- Icon --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            role="graphics-symbol"
            aria-labelledby="title-29 desc-29"
          >
            <title id="title-29">Icon title</title>
            <desc id="desc-29">A more detailed description of the icon</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          {/*    <!-- Headline --> */}
          <h3 className="flex-1 font-semibold">Retrying in 5 sec</h3>
          {/*    <!-- Close button --> */}
          <button
            aria-label="Close"
            className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs font-medium tracking-wide text-slate-500 transition duration-300 hover:bg-slate-200 hover:text-slate-600 focus:bg-slate-300 focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-slate-600 disabled:shadow-none disabled:hover:bg-transparent"
          >
            <span className="relative only:-mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                role="graphics-symbol"
                aria-labelledby="title-30 desc-30"
              >
                <title id="title-30">Icon title</title>
                <desc id="desc-30">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        {/*  <!-- Body --> */}
        <div className="pl-9 text-slate-500">
          <p>
            An error occurred. Check your disk space and make sure you have
            enough space.
          </p>
        </div>
      </div>
      {/*<!-- End Basic title & text light themed notification with close button and leading icon --> */}
    </>
  );
}
