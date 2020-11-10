import { getCartItems } from "./localStorage";

// Implement parseRequest function
export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  }
};

// Implement rerender function
export const rerender = async (component) => {
  document.getElementById(
    'main-container'
  ).innerHTML = await component.render();
  await component.after_render();
};

// Create Show Loading Function
export const showLoading = () => {
  document.getElementById('loading-overlay').classList.add('active');
};

// Create Hide Loading Function
export const hideLoading = () => {
  document.getElementById('loading-overlay').classList.remove('active');
};

// Define Show Message
export const showMessage = (message, callback) => {
  document.getElementById('message-overlay').innerHTML = `
    <div>
      <div id="message-overlay-content">${message}</div>
      <button id="message-overlay-close-button">OK</button>
    </div>
  `;

  document.getElementById('message-overlay').classList.add('active');

  // Add event listenner for close button
  document
    .getElementById('message-overlay-close-button')
    .addEventListener('click', () => {
      document.getElementById('message-overlay').classList.remove('active');

      if (callback) {
        callback();
      }
    });
};

// Redirect User
export const redirectUser = () => {
  if (getCartItems().length !== 0) {
    document.location.hash = '/shipping';
  } else {
    document.location.hash = '/';
  }
};