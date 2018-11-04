export default ({ colors, mediaQueries }) => ({
  container: {
    backgroundColor: 'white',
    display: 'flex',

    [mediaQueries.large]: {
      flexDirection: 'column',
    },

    '& p': {
      fontSize: '14px',
      marginTop: 0,
    },
  },

  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  first: {
    flex: 0.5,
    backgroundColor: colors.primaryLight,
    padding: '0 20px 20px',
  },

  second: {
    flex: 0.2,
    padding: '0 20px 20px',

    [mediaQueries.large]: {
      textAlign: 'center',
    },
  },

  third: {
    flex: 0.3,
    backgroundColor: colors.primary,
    padding: '0 20px 20px',

    '& $heading': {
      color: colors.white,
    },
  },

  cd: {
    display: 'flex',

    [mediaQueries.phone]: {
      flexDirection: 'column',
    },
  },

  image: {
    minWidth: '240px',
    height: '240px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginRight: '20px',

    [mediaQueries.phone]: {
      alignSelf: 'center',
      maxWidth: '240px',
      maxHeight: '240px',
      marginBottom: '20px',
      marginRight: 0,
    },
  },

  button: {
    display: 'inline-block',
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: '18px',
    padding: '4px 15px',
    fontWeight: 300,
    textTransform: 'uppercase',
    transition: '.3s background-color ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.black,
    },
  },

  video: {
    [mediaQueries.large]: {
      height: '400px',
    },
    [mediaQueries.phone]: {
      height: '200px',
    },
  },
});
