export default ({ colors, mediaQueries }) => ({
  container: {
    backgroundColor: colors.white,
    padding: '50px 0',
  },

  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '50px',
  },

  list: {
    padding: 0,
    margin: '0 auto',
    maxWidth: '700px',
  },

  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    [mediaQueries.phone]: {
      justifyContent: 'space-around',
    },
  },

  dots: {
    stroke: colors.primary,
    marginBottom: '5px',
  },

  date: {
    borderRight: `4px solid ${colors.primaryLight}`,
    paddingRight: '15px',
    marginRight: '15px',
    display: 'flex',
    alignItems: 'center',
  },

  day: {
    fontSize: '32px',
    fontWeight: 700,
    marginRight: '4px',
  },

  month: {
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
  },

  year: {
    fontSize: '12px',
    fontWeight: 500,
  },

  time: {
    fontWeight: 700,
    fontSize: '32px',
    borderRight: `4px solid ${colors.primaryLight}`,
    paddingRight: '15px',
    marginRight: '15px',

    [mediaQueries.phone]: {
      textAlign: 'center',
    },
  },

  description: {
    [mediaQueries.phone]: {
      display: 'none',
    },
  },

  description_mobile: {
    marginTop: '10px',
    display: 'none',

    [mediaQueries.phone]: {
      display: 'block',
    },
  },

  link: {
    display: 'block',
    marginLeft: 'auto',
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: '12px',
    padding: '4px 10px',
    fontWeight: 300,
    textTransform: 'uppercase',
    transition: '.3s background-color ease-in-out',

    '&:hover': {
      backgroundColor: colors.black,
    },

    [mediaQueries.phone]: {
      marginLeft: 0,
    },
  },
});
