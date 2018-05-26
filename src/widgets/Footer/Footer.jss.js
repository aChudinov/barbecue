export default ({ colors }) => ({
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
  },

  dots: {
    stroke: colors.primaryLight,
  },

  bottomLine: {
    marginTop: '100px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.white,
  },

  copyright: {
    fontSize: '12px',
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
});
