export default ({ colors }) => ({
  container: {
    backgroundColor: 'white',
    paddingTop: '50px',
    paddingBottom: '50px',
  },

  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
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
  },

  description: {

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
  },
});
