export default ({ colors, mediaQueries }) => ({
  footer: {
    backgroundColor: colors.primary,
    boxShadow: 'inset 0 0 50px 0 rgba(0, 0, 0, .2)',
    paddingTop: '50px',
    textAlign: 'center',
  },

  heading: {
    textTransform: 'uppercase',
  },

  phone: {
    color: colors.white,
    fontSize: '36px',
    fontWeight: 700,

    [mediaQueries.phone]: {
      fontSize: '24px',
    },
  },

  dots: {
    stroke: colors.white,

    [mediaQueries.phone]: {
      display: 'none',
    },
  },

  bottomLine: {
    marginTop: '100px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.white,

    [mediaQueries.tablet]: {
      flexDirection: 'column',
    },

    [mediaQueries.phone]: {
      marginTop: '50px',
    },
  },

  copyright: {
    fontSize: '12px',

    [mediaQueries.phone]: {
      marginBottom: '35px',
    },
  },

  socials: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialLink: {
    display: 'block',
    margin: '0 5px',
  },

  socialIcon: {
    fill: colors.black,
    width: '40px',
    height: '40px',
    transition: '.3s fill ease-in-out',

    '&:hover': {
      fill: 'black',
    },
  },

  menu: {
    [mediaQueries.phone]: {
      display: 'none',
    },
  },
});
