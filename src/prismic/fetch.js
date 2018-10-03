import apiEndpoint from './config';
import transform from './transformer';
import Prismic from 'prismic-javascript';

export default async function fetchData() {
  try {
    const api = await Prismic.getApi(apiEndpoint) || { query: () => {} };
    const response = await api.query('') || { results: [] };

    return response.results.map(data => ({
      id: data.id.toLowerCase(),
      ...transform(data),
    }));
  } catch (error) {
    return [];
  }
}
