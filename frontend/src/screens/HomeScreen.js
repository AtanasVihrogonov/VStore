import axios from 'axios';
import { getProducts } from '../api';
import Rating from '../components/Rating';

// Implement HomeScreen Object
const HomeScreen = {
  // Method: render
  render: async () => {
    const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
    return `
      <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
                <div class="product">
                  <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>
                  <div class="product-name">
                    <a href="/#/product/1">${product.name}</a>
                  </div>
                  <div class="product-rating">
                    ${Rating.render({
                      value: product.rating,
                      text: `${product.numReviews} reviews`,
                    })}
                  </div>
                  <div class="product-brand">
                    ${product.brand}
                  </div>
                  <div class="product price">
                    £${product.price}
                  </div>
                </div>
              </li>
            `
          )
          .join('\n')}
      </ul>
    `;
  },
};

export default HomeScreen;
