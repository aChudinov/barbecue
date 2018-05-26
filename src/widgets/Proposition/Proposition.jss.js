export default ({ colors }) => ({
  container: {
    backgroundColor: colors.primary,
    height: '100vh',
    boxShadow: 'inset 0 0 50px 0 rgba(0, 0, 0, .2)',
  },

  heading: {
    marginTop: '100px',
    fontSize: '52px',
    color: colors.white,
    textAlign: 'right',
    textTransform: 'uppercase',
  },

  subheading: {
    fontSize: '52px',
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});
