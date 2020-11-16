import axios from 'axios';
import { apiUrl } from './config';
import { getUserInfo } from './localStorage';

// Get Products
export const getProducts = async () => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

// Get Product 
export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

// Create Product
export const createProduct = async () => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/products`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

// Delete Product
export const deleteProduct = async (productId) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/products/${productId}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

// Create Update Product
export const updateProduct = async (product) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/products/${product._id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: product,
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

// Create Upload Product Image
export const uploadProductImage = async (formData) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/uploads`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    } else {
      return response.data;
    }
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

// Signin Function
export const signin = async ({ email, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/signin`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
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

// Register Function
export const register = async ({ name, email, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/register`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
        email,
        password,
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

// Update Function
export const update = async ({ name, email, password }) => {
  try {
    const { _id, token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/users/${_id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        email,
        password,
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

// Create Order Function
export const createOrder = async (order) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: order,
    });
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response ? err.response.data.message : err.message };
  }
};

// Get Orders
export const getOrders = async () => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

// Delete Order
export const deleteOrder = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/${orderId}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

// Create Get Order Function
export const getOrder = async (id) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
};

// Create Get my orders
export const getMyOrders = async () => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/mine`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response ? err.response.data.message : err.message };
  }
};

// Get Paypal Client ID
export const getPaypalClientId = async () => {
  const response = await axios({
    url: `${apiUrl}/api/paypal/clientId`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.statusText !== 'OK') {
    throw new Error(response.data.message);
  }
  return response.data.clientId;
};

// Create payOrder Function
export const payOrder = async (orderId, paymentResult) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/${orderId}/pay`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: paymentResult,
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response ? err.response.data.message : err.message };
  }
};
