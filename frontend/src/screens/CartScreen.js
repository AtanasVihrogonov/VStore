import { getProduct } from '../api';
import { parseRequestUrl } from '../utils';
import { getCartItems, setCartItems } from '../localStorage';

// Implement addToCart function
const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  // Check to see if the item is already exist in cartItems
  const existItem = cartItems.find((x) => x.product === item.product);

  if (existItem) {
    // Update cart items
    cartItems = cartItems.map((x) =>
      x.product === existItem.product ? item : x
    );
  } else {
    cartItems = [...cartItems, item];
  }

  setCartItems(cartItems);
};

const CartScreen = {
  after_render: () => {},
  render: async () => {
    const request = parseRequestUrl();

    // Add product to the cart
    if (request.id) {
      const product = await getProduct(request.id);

      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }

    const cartItems = getCartItems();

    return `
      <div class="content cart">
        <div class="cart-list">
          <ul class="cart-list-container">
            <li>
              <h3>Shoping Cart</h3>
              <div>Price</div>
            </li>
            ${
              cartItems.length === 0
                ? '<div>Cart is empty. <a href"/#/">Go Shoping</a></div>'
                : cartItems
                    .map(
                      (item) => `
                        <li>
                          <div class="cart-image">
                            <img src="${item.image}" alt="${item.name}" />
                          </div>
                          <div class="cart-name">
                            <div>
                              <a href="/#/product/${item.product}"> ${item.name} </a>
                            </div>
                            <div>
                              Qty:
                              <select class="qty-select" id="${item.product}">
                                <option value="1">1</option>
                              </select>
                              <button type="button" class="delete-button" id="${item.product}">
                                Delete
                              </button>
                            </div>
                          </div>
                          <div class="cart-price">£${item.price}</div>
                        </li>
                      `
                    )
                    .join('\n')
            }
          </ul>
        </div>
        <div class="cart-action">
          <h3>
            Subtotal (${cartItems.reduce((a, c) => a + c.qty, 0)} items)
            : 
            £${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button id="checkout-button" class="fw primary">
            Go to Checkout
          </button>
        </div>
      </div>
    `;
  },
};

export default CartScreen;
