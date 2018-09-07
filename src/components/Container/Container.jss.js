export default ({ sizes, mediaQueries }) => ({
  container: {
    width: sizes.container,
    margin: 'auto',

    [mediaQueries.large]: {
      width: 'auto',
      padding: `0 ${sizes.gutter}`,
    },
  },
});
