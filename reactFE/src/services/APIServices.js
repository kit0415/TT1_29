import http from './http-common';

const login = data => {
  return http.post('/api/login', data);
};

const register = data => {
  return http.post('/api/register', data);
};


const getProduct = categoryid => {
  return http.get('api/getProduct/'+ categoryid);
};

const addToCart = data => {
  return http.post('/api/addToCart', data);
};

const getOrder = userid => {
  return http.get('api/getOrder/'+ userid);
};

const deleteOrder = data => {
  return http.post('/api/deleteOrder', data);
};

const updateOrder = data => {
  return http.post('/api/updateOrder', data);
};

const updateProduct = data => {
  return http.post('/api/updateProduct', data);
};


const updateOrderItem = data => {
  return http.post('/api/updateOrderItem', data);
};

const updateOrderItem = data => {
  return http.post('/api/updateOrderItem', data);
};

const logout = data => {
  return http.post('/api/logout', data);
};

export default {
  login,
  register,
  getProduct,
  addToCart,
  getOrder,
  deleteOrder,
  updateOrder,
  updateProduct,
  updateOrderItem,
  logout
}