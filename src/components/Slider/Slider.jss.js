export default ({ colors }) => ({
  '@global': {
    '.slick-slider': {
      position: 'relative',
    },

    '.slick-list': {
      width: '100%',
      height: '500px',
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

    '.slick-arrow': {
      position: 'absolute',
      cursor: 'pointer',
      zIndex: 100,
      top: '50%',
    },

    '.slick-prev': {
      left: '-60px',
    },

    '.slick-next': {
      right: '-60px',
    },

    '.slick-dots': {
      position: 'absolute',
      top: '100px',
      right: '105px',
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
      bottom: '-48px',
    },
    '.slick-dots .name1': {
      bottom: '-54px',
    },
    '.slick-dots .name2': {
      bottom: '-36px',
    },
    '.slick-dots .name3': {
      bottom: '-37px',
    },
    '.slick-dots .name4': {
      bottom: '-53px',
    },
  },

  arrow: {
    width: '40px',
    height: '40px',
    fill: '#826B60',
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
    backgroundColor: 'rgba(0, 0, 0, .2)',
    height: '500px',
  },

  text: {
    paddingTop: '200px',
  },

  name: {
    marginBottom: 0,
    marginTop: 'auto',
    color: '#826B60',
  },

  surname: {
    marginTop: 0,
  },

  description: {
    textAlign: 'left',
    textTransform: 'initial',
    padding: '0 25px',
    width: '300px',
  },
});
