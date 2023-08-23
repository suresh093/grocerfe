import axios from 'axios';

// Define your Django backend API URL
const API_BASE_URL = 'http://192.168.1.100:8000/apis/v1/';

// Fetch the list of products
axios.get(`${API_BASE_URL}products/`)
  .then(response => {
    const products = response.data;
    console.log(products);
  })
  .catch(error => {
    console.error(error);
  });
