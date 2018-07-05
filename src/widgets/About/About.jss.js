export default {
  container: {
    backgroundColor: 'white',
    padding: '50px 0',
  },

  content: {
    display: 'flex',

    '& p': {
      fontFamily: 'Lora, sans-serif',
      fontStyle: 'italic',
      flex: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  logo: {
    width: '20%',
    backgroundImage: 'url(/images/logo.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
  },
};
