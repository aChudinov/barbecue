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
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)',
  },

  subheading: {
    fontSize: '52px',
    textAlign: 'right',
    textTransform: 'uppercase',
    textShadow: '1px 1px 1px rgba(255, 255, 255, 0.2)',
  },
});
