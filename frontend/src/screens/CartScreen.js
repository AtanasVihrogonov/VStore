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
    return `<div>Cart Screen</div>
      <div>${getCartItems().length}</div>
    `;
  },
};

export default CartScreen;
