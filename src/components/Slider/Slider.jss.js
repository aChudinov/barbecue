export default ({ colors, mediaQueries }) => ({
  '@global': {
    '.members-slider .slick-slider': {
      position: 'relative',
    },

    '.members-slider .slick-list': {
      width: '100%',
      height: '500px',

      '@media screen and (max-width: 550px)': {
        height: '400px',
      },
    },

    '.members-slider .slick-track': {
      position: 'relative',
      left: 0,
      top: 0,
      display: 'block',

      '@media screen and (max-width: 550px)': {
        height: '100%',
      },
    },

    '.members-slider .slick-slide': {
      float: 'left',
      height: '100%',
      minHeight: '1px',
    },

    '.members-slider .slick-arrow': {
      position: 'absolute',
      cursor: 'pointer',
      zIndex: 100,
      top: '50%',
      transform: 'translateY(-50%)',
    },

    '.members-slider .slick-prev': {
      left: '-60px',
    },

    '.members-slider .slick-next': {
      right: '-60px',
    },

    '.members-slider .slick-dots': {
      position: 'absolute',
      top: '100px',
      right: '114px',
      listStyle: 'none',
      textAlign: 'center',
      padding: 0,
      margin: 0,

      '@media screen and (max-width: 550px)': {
        right: '10px',
      },
    },

    '.members-slider .slick-dots li': {
      color: colors.primaryLight,
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      width: '22px',
      userSelect: 'none',
    },

    '.members-slider .slick-dots li.slick-active': {
      color: colors.primary,
    },

    '.members-slider .slick-dots li span': {
      fontSize: '20px',
      position: 'relative',
      left: '-2px',
    },

    '.members-slider .slick-dots li div div': {
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      position: 'absolute',
      fontSize: '0.7em',
      fontWeight: 500,
    },

    '.members-slider .slick-dots .surname': {
      bottom: '10px',
    },

    '.members-slider .slick-dots .name0': {
      bottom: '-48px',
    },
    '.members-slider .slick-dots .name1': {
      bottom: '-54px',
    },
    '.members-slider .slick-dots .name2': {
      bottom: '-36px',
    },
    '.members-slider .slick-dots .name3': {
      bottom: '-37px',
    },
    '.members-slider .slick-dots .name4': {
      bottom: '-56px',
    },
  },

  arrow: {
    width: '40px',
    height: '40px',
    fill: colors.primary,
    transition: '.3s fill ease-in-out',

    '&:hover': {
      fill: colors.black,
    },

    [mediaQueries.tablet]: {
      display: 'none',
    },
  },

  slide: {
    textAlign: 'center',
    textTransform: 'uppercase',
    display: 'flex',
  },

  picture: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '30px',
    textAlign: 'right',
    paddingRight: '25px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100%',
    height: '500px',

    '@media screen and (max-width: 550px)': {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '100%',
      width: '100%',
      opacity: 0.4,
      backgroundColor: 'transparent',
      backgroundPosition: '0 100%',
    },
  },

  text: {
    paddingTop: '200px',

    '@media screen and (max-width: 550px)': {
      width: '100%',
    },
  },

  name: {
    marginBottom: 0,
    marginTop: 'auto',
    color: colors.primary,
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.9)',

    '@media screen and (max-width: 550px)': {
      display: 'none',
    },
  },

  surname: {
    marginTop: 0,
    textShadow: '1px 1px 4px rgba(255, 255, 255, 0.9)',

    '@media screen and (max-width: 550px)': {
      display: 'none',
    },
  },

  description: {
    textAlign: 'left',
    textTransform: 'initial',
    padding: '0 25px',
    width: '300px',

    '@media screen and (max-width: 550px)': {
      width: 'calc(100% - 50px)',
    },
  },
});
