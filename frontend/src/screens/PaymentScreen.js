import { getUserInfo, getPayment, setPayment } from '../localStorage';
import CheckoutSteps from '../components/CheckoutSteps';

// Implement Payment Screen
const PaymentScreen = {
  // Method: after_render
  after_render: () => {
    document
      .getElementById('payment-form')
      .addEventListener('submit', async (e) => {
        // Read payment method
        e.preventDefault();
        const paymentMethod = document.querySelector(
          'input[name="payment-method"]:checked'
        ).value;
        setPayment({ paymentMethod });
        document.location.hash = '/placeorder';
      });
  },
  // Method: render
  render: () => {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }

    return `
     ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
      <div class="form-container">
        <form id="payment-form">
          <ul class="form-items">
            <li>
              <h1>Payment</h1>
            </li>
            <li>
              <div>
                <input type="radio" name="payment-method" id="paypal" value="Paypal" checked />
                <label for="paypal">Paypal</label
              </div>
            </li>
            <li>
              <div>
                <input type="radio" name="payment-method" id="stripe" value="Stripe" />
                <label for="stripe">Stripe</label
              </div>
            </li>
            <li>
              <button type="submit" class="primary">Continue</button>
            </li>     
          </ul>
        </form>
      </div>
    `;
  },
};

export default PaymentScreen;