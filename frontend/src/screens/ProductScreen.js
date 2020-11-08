import { parseRequestUrl } from '../utils';
import { getProduct } from '../api';
import Rating from '../components/Rating';

// Create ProductScreen Object
const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById('add-button').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);

    if (product.error) {
      return `<div>${product.error}</div>`;
    }

    // Implement product screen HTML structure
    return `
      <div class="content">
        <div class="back-to-result">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
          <a href="/#/">Back to result</a>
        </div>

        <div class="details">
          <div class="details-image">
            <img src="${product.image}" alt="${product.name}"/>
          </div>

          <div class="details-info">
            <ul>
              <li>
                <h1>${product.name}</h1>
              </li>
              <li>
                ${Rating.render({
                  value: product.rating,
                  text: `${product.numReviews} reviews`,
                })}
              </li>
              <li> 
                Price: <strong>£${product.price}</strong>
              </li>
              <li>
                Description: <div>${product.description}</div>
              </li>
            </ul>
          </div>

          <div class="details-action">
            <ul class="fw">
              <li>Price: £${product.price}</li>
              <li>Status: 
                  ${
                    product.countInStock > 0
                      ? `<span class="success">In Stock</span>`
                      : `<span class="error">Unavailable</span>`
                  }
              </li>
              <button id="add-button" class="primary fw">Add to Cart</button>
            </ul>
          </div>
        </div>
      </div>
    `;
  },
};

export default ProductScreen;
