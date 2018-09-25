export default ({ colors, mediaQueries }) => ({
  nav: {
    zIndex: 1000,
    transition: '.3s all ease-in-out',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [mediaQueries.tablet]: {
      justifyContent: 'center',
      padding: '5px 0',
    },
  },

  items: {
    [mediaQueries.tablet]: {
      display: 'none',
    },
  },

  logo: {
    width: '110px',
    height: '70px',
    backgroundImage: 'url(/images/logo.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    transition: '.3s all ease-in-out',

    [mediaQueries.tablet]: {
      height: '60px',
    },

    [mediaQueries.phone]: {
      height: '50px',
    },

    [mediaQueries.small]: {
      height: '40px',
    },
  },

  link: {
    color: colors.black,
    padding: '30px 8px',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    transition: '.3s all ease-in-out',

    '&:first-of-type': {
      paddingLeft: '0 !important',
    },

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
    backgroundColor: 'rgba(255, 255, 255, .8)',
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

    '& $logo': {
      backgroundImage: 'url(/images/logo_inversed.png)',
      width: '72px',
      height: '46px',
    },
  },

  dot: {
    color: colors.primaryDark,
    position: 'relative',
    top: '-1px',
  },
});
