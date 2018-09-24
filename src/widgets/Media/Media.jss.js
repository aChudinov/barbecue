export default ({ mediaQueries }) => ({
  container: {
    backgroundColor: 'white',
    padding: '50px 0',

    [mediaQueries.small]: {
      paddingBottom: '70px',
    },
  },

  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '50px',
  },

  flex: {
    display: 'flex',
    margin: '0 -30px',

    [mediaQueries.tablet]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  video: {
    flex: 1,
    padding: '0 30px',

    [mediaQueries.tablet]: {
      height: 'auto',
      minHeight: '300px',
      maxWidth: '100%',
    },

    [mediaQueries.phone]: {
      minHeight: '200px',
    },
  },
});
