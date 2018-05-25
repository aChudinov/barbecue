export default ({ colors }) => ({
  container: {
    backgroundColor: colors.primary,
    minHeight: '100%',
    boxShadow: 'inset 0 0 50px 0 rgba(0, 0, 0, .2)',
  },

  heading: {
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  subheading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
