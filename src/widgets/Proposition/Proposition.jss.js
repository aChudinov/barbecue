export default ({ mediaQueries }) => ({
  container: {
    height: '100vh',
    boxShadow: 'inset 0 0 100px 20px rgba(0, 0, 0, .3)',
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [mediaQueries.phone]: {
      height: '70vh',
    },

    [mediaQueries.small]: {
      height: '50vh',
    },
  },
});
