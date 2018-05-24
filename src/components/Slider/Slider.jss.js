export default ({ colors }) => ({
  '@global': {
    '.slick-slider': {
      position: 'relative',
    },

    '.slick-list': {
      width: '100%',
      overflow: 'hidden',
    },

    '.slick-track': {
      position: 'relative',
      left: 0,
      top: 0,
      display: 'block',
    },

    '.slick-slide': {
      float: 'left',
      height: '100%',
      minHeight: '1px',
    },

    '.slick-dots': {
      position: 'absolute',
      top: 0,
      right: 0,
      listStyle: 'none',
      textAlign: 'center',
      padding: 0,
      margin: 0,
    },

    '.slick-dots li': {
      color: '#C1AEA5',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      width: '1.5em',
      userSelect: 'none',
    },

    '.slick-dots li.slick-active': {
      color: '#826B60',
    },

    '.slick-dots li span': {
      fontSize: '1.4em',
      position: 'relative',
      left: '-3px',
    },

    '.slick-dots li div div': {
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      position: 'absolute',
      fontSize: '0.7em',
      fontWeight: 500,
    },

    '.slick-dots .surname': {
      bottom: '10px',
    },

    '.slick-dots .name0': {
      bottom: '-56px',
    },
    '.slick-dots .name1': {
      bottom: '-49px',
    },
    '.slick-dots .name2': {
      bottom: '-48px',
    },
  },
});
