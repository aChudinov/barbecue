export default ({ colors }) => ({
  container: {
    flex: 1,
    padding: '0 30px',
    height: '312px',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: '24px',
    marginTop: 0,
    marginBottom: '10px',
  },

  player: {
    display: 'none',
  },

  progress: {
    width: '100%',
  },

  buttons: {
    textAlign: 'center',
    marginBottom: '10px',
  },

  button: {
    display: 'inline-block',
    margin: '0 15px',
    fill: colors.white,
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    transition: 'fill .1s ease-in-out',

    '&:hover': {
      fill: colors.primary,
    },
  },

  listWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 'auto',
  },

  album: {
    width: '180px',
    height: '180px',
    marginRight: '30px',
    backgroundImage: 'url(/images/album.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  item: {
    display: 'flex',
    alignItems: 'flex-start',
    color: colors.primary,
    cursor: 'pointer',
    transition: 'color .2s ease-in-out',
    marginBottom: '2px',
  },

  itemIcon: {
    marginRight: '8px',
    marginTop: '6px',
    width: '12px',
    height: '12px',
    fill: colors.white,
    transition: 'fill .2s ease-in-out',
  },

  itemIcon__active: {
    fill: colors.primary,
  },

  itemTitle: {
    fontWeight: 500,
  },

  itemAuthor: {
    color: colors.white,
  },
});
