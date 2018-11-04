export default ({ colors }) => ({
  '@global': {
    html: {
      minHeight: '100%',
    },

    body: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 200,
      fontSize: '16px',
      letterSpacing: '0.1em',
      color: colors.black,
      margin: 0,
      padding: 0,
    },

    'body, #root': {
      height: '100%',
    },

    a: {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: colors.white,
      transition: 'color .3s ease-in-out',

      '&:hover': {
        color: 'white',
      },
    },

    img: {
      maxWidth: '100%',
    },

    h1: {
      margin: 0,
    },
  },
});
