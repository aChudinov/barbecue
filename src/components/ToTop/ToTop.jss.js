export default ({ colors }) => ({
  base: {
    position: 'fixed',
    right: '25px',
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: colors.black,
    opacity: 0,
    transition: 'opacity ease-in-out .3s',
    pointerEvents: 'none',
    color: colors.white,
    textTransform: 'uppercase',
    padding: '4px 10px',
  },

  visible: {
    opacity: 0.8,
    pointerEvents: 'all',
  },
});
