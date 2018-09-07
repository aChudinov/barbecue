export default ({ mediaQueries }) => ({
  container: {
    backgroundColor: 'white',
    padding: '50px 0',
  },

  content: {
    display: 'flex',

    '& p': {
      flex: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [mediaQueries.tablet]: {
      flexDirection: 'column',
    },
  },

  logo: {
    width: '20%',
    marginRight: '20px',
    backgroundImage: 'url(/images/logo.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',

    [mediaQueries.tablet]: {
      display: 'none',
    },
  },
});
