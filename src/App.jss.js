export default ({ colors }) => ({
  '@global': {
    body: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 300,
      fontSize: '16px',
      letterSpacing: '0.1em',
      color: colors.black,
      margin: 0,
      padding: 0,
    },

    'html, body, #root': {
      height: '100%',
    },

    a: {
      textDecoration: 'none',
      color: '#108db8',
      fontWeight: 'bold',
    },

    img: {
      maxWidth: '100%',
    },

    h1: {
      margin: 0,
    },
  },
});
