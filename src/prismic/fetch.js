import apiEndpoint from './config';
import transform from './transformer';
import Prismic from 'prismic-javascript';

export default async function fetchData() {
  try {
    const api = await Prismic.getApi(apiEndpoint);
    const response = await api.query('');

    return response.results.map(data => ({
      id: data.id.toLowerCase(),
      ...transform(data),
    }));
  } catch (error) {
    return [];
  }
}
