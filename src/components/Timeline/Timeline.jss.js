export default ({ colors }) => ({
  container: {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',

    '&:before, &:after': {
      content: '""',
      display: 'block',
      width: '20px',
      height: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 1,
    },

    '&:before': {
      left: 0,
      background: `linear-gradient(to left, rgba(228, 221, 219, 0), ${colors.white})`,
    },

    '&:after': {
      right: 0,
      background: `linear-gradient(to right, rgba(228, 221, 219, 0), ${colors.white})`,
    },
  },

  list: {
    transform: 'translateZ(0)',
    height: '180px',
    width: '100%',
    cursor: 'move',
    paddingTop: '5px',
    paddingBottom: '5px',
    overflowY: 'hidden',
    overflowX: 'auto',
  },

  track: {
    position: 'relative',
    display: 'flex',
    padding: '0 15px',
  },

  item: {
    fontSize: '11px',
    padding: '0 10px',
    height: '100%',
    minWidth: '48px',
    position: 'relative',
    borderTop: `3px solid ${colors.primaryLight}`,

    '&:before': {
      content: '""',
      display: 'block',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: colors.primary,
      position: 'absolute',
      top: '-5px',
      right: '50%',
      transform: 'translateX(50%)',
    },
  },

  past: {
    color: colors.primaryLight,

    '&:before': {
      backgroundColor: '#bdafa8',
    },
  },

  content: {
    transform: 'rotate(-90deg)',
    textAlign: 'right',
    position: 'absolute',
    height: '1em',
    width: '180px',
    top: '100px',
    left: '-76px',
    zIndex: 1,

    '& span': {
      fontWeight: 900,
    },
  },
});
