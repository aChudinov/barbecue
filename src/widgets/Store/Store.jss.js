export default ({ colors, mediaQueries }) => ({
  container: {
    backgroundColor: colors.white,
    padding: '50px 0',
  },

  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '50px',
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    [mediaQueries.tablet]: {
      flexDirection: 'column',
    },
  },

  item: {
    textAlign: 'center',
    marginBottom: '25px',
  },

  image: {
    width: '250px',
    height: '250px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginBottom: '20px',
  },

  title: {
    fontWeight: 500,
    fontSize: '20px',
  },

  description: {
    marginBottom: '20px',
    color: colors.primary,
  },

  price: {
    fontSize: '22px',
    fontWeight: 700,
  },

  button: {
    display: 'inline-block',
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: '18px',
    padding: '4px 15px',
    marginTop: '20px',
    fontWeight: 300,
    textTransform: 'uppercase',
    transition: '.3s background-color ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.black,
    },
  },
});
