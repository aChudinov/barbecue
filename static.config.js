import fetchData from './src/prismic/fetch';

export default {
  getSiteData: () => ({
    title: 'Barbecue bluegrass band',
  }),

  getRoutes: async() => {
    // const posts = await fetchData();
    const posts = [];

    return [
      {
        path: '/',
        component: 'src/containers/Home/index',
        getData: () => ({ posts }),
      },
      {
        is404: true,
        component: 'src/containers/NotFound/index',
      },
    ];
  },
};
