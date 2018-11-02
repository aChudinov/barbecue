export default ({ colors }) => ({
  container: {
    backgroundColor: colors.white,
  },

  slider: {
    margin: 'auto',
    width: '700px',
    position: 'relative',

    '@media screen and (max-width: 700px)': {
      width: 'auto',
    },
  },
});
