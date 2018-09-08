import fetchData from './src/prismic/fetch';

export default {
  getRoutes: async() => {
    const concerts = await fetchData();

    return [
      {
        path: '/',
        component: 'src/containers/Home/index',
        getData: () => ({ concerts }),
      },
      {
        is404: true,
        component: 'src/containers/NotFound/index',
      },
    ];
  },
};
