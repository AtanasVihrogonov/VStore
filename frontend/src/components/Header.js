import { getUserInfo } from '../localStorage';

// Implement Independant Header Component
const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
      <div class="brand">
        <a href="/#/">
          <i class="fa fa-cubes" aria-hidden="true"></i>VStore
        </a>
      </div>
      <div>
        ${
          name
            ? `<a href="/#/profile">${name}</a>`
            : `<a href="/#/signin">Sign-In</a>`
        }    
          <a href="/#/cart">Cart</a>
          ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''}
      </div>
    `;
  },
  after_render: () => {},
};

export default Header;
