export default ({ colors }) => ({
  nav: {
    zIndex: 1000,
    transition: '.3s background-color ease-in-out',
  },

  link: {
    color: colors.black,
    padding: '30px 8px',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    transition: '.3s color ease-in-out',

    '&:hover': {
      color: 'black',
    },
  },

  inverseColors: {
    '& $link': {
      padding: '20px 8px',
      color: colors.white,
      fontSize: '12px',

      '&:hover': {
        color: 'white',
      },
    },
  },

  sticky: {
    backgroundColor: 'rgba(255, 255, 255, .2)',
    boxShadow: '0 0 15px 15px rgba(255, 255, 255, .2)',
  },

  isSticky: {
    backgroundColor: 'rgba(0, 0, 0, .9)',
    boxShadow: 'none',

    '& $link': {
      color: colors.white,
      padding: '15px 8px',

      '&:hover': {
        color: 'white',
      },
    },
  },

  dot: {
    color: colors.primaryDark,
    position: 'relative',
    top: '-1px',
  },
});
