import axios from 'axios';

const API_KEY = '30790875-9fd5bd306a19ab25e45c54f4c';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = { key: API_KEY, image_type: 'photo', orientation: 'horizontal', per_page: '12', };

export const fetchImages = async (query, page) => {
  const params = {
    q: query,
    page:page,
  };
  const response = await axios.get('', {params});
  return response.data;
};

