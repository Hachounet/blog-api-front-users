import PropTypes from 'prop-types';

export default function SeeMoreBtn({ text, handleSeeMore }) {
  return (
    <>
      {/*<!-- Component: Large secondary basic button --> */}
      <button
        onClick={handleSeeMore}
        className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
      >
        <span>{text}</span>
      </button>
      {/*<!-- End Large secondary basic button --> */}
    </>
  );
}

SeeMoreBtn.propTypes = {
  text: PropTypes.string.isRequired,
  handleSeeMore: PropTypes.func.isRequired,
};
