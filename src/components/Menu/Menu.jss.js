export default ({ colors }) => ({
  link: {
    color: colors.black,
    padding: '1rem',
    display: 'inline-block',
    textTransform: 'uppercase',
  },

  content: {
    padding: '1rem',
  },

  inverseColors: {
    '& $link': {
      color: colors.white,
      fontSize: '12px',
    },
  },
});
