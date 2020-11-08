import axios from 'axios';
import { apiUrl } from './config';

// Get Product Information
export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};
