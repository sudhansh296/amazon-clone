# Amazon Clone - E-Commerce Web Application

A fully functional e-commerce website clone inspired by Amazon, built with vanilla JavaScript, HTML, and CSS. This project demonstrates modern web development practices including ES6 modules, Object-Oriented Programming, asynchronous operations, and local storage management.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through a wide range of products with images, ratings, and prices
- **Search System**: Real-time product search by name and keywords
- **Shopping Cart**: Add, remove, and update product quantities
- **Checkout Process**: Complete order flow with delivery options
- **Order History**: View past orders with detailed information
- **Order Tracking**: Track package delivery status
- **Persistent Storage**: Cart and order data saved using localStorage

### User Interface
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Dynamic Content**: JavaScript-powered product rendering and updates
- **Interactive Elements**: Real-time cart updates and visual feedback
- **Professional Styling**: Clean, Amazon-inspired UI with custom CSS

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: 
  - ES6 Modules
  - Classes and Inheritance
  - Async/Await and Promises
  - Fetch API and XMLHttpRequest
  - DOM Manipulation
- **Day.js**: Date formatting library
- **Jasmine**: Testing framework for unit tests
- **LocalStorage API**: Client-side data persistence

## 📁 Project Structure

```
javascript-amazon-project-main/
├── amazon.html              # Main product listing page
├── checkout.html            # Shopping cart and checkout
├── orders.html              # Order history page
├── tracking.html            # Package tracking page
├── data/
│   ├── cart.js             # Cart management logic
│   ├── products.js         # Product data and classes
│   ├── orders.js           # Order management
│   └── deliveryOption.js   # Delivery options data
├── scripts/
│   ├── amazon.js           # Main page functionality
│   ├── orders.js           # Orders page logic
│   ├── checkout/
│   │   ├── orderSummary.js # Cart display logic
│   │   └── paymentSummary.js # Payment calculation
│   └── utils/
│       └── money.js        # Currency formatting utilities
├── styles/
│   ├── shared/             # Shared CSS components
│   └── pages/              # Page-specific styles
├── images/                 # Product images and icons
└── tests-jasmine/          # Unit tests
```

## 🎯 Key Features Implemented

### 1. Product Management
- Object-Oriented design with Product base class
- Inheritance for specialized product types (Clothing)
- Dynamic product loading from backend
- Product filtering and search

### 2. Shopping Cart
- Add/remove items
- Update quantities with validation
- Multiple cart implementation patterns (OOP, functional)
- Real-time cart quantity display
- Persistent cart storage

### 3. Checkout System
- Order summary with delivery dates
- Multiple delivery options (Free, Standard, Express)
- Dynamic price calculation
- Tax computation (10%)
- Order placement with backend integration

### 4. Order Management
- Order history display
- "Buy it again" functionality
- Order tracking with delivery status
- Date formatting with Day.js

## 💻 Code Highlights

### Object-Oriented Programming
```javascript
class Product {
  constructor(productDetails) {
    this.id = productDetails.id;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
  }
  
  getPrice() {
    return formatCurrency(this.priceCents);
  }
}

class Clothing extends Product {
  extraInfoHTML() {
    return `<a href="${this.sizeChartLink}">Size chart</a>`;
  }
}
```

### Async/Await Pattern
```javascript
async function loadPage() {
  try {
    await loadProductsFetch();
    await loadCart();
    renderOrderSummary();
    renderPaymentSummary();
  } catch(error) {
    console.log('Unexpected error. Please try again later');
  }
}
```

### ES6 Modules
```javascript
import { cart, addToCart } from '../data/cart.js';
import { products, loadProducts } from '../data/products.js';
export function renderOrderSummary() { ... }
```

## 🧪 Testing

The project includes comprehensive unit tests using Jasmine framework:
- Cart functionality tests
- Money formatting tests
- Order summary tests
- Product class tests

Run tests by opening `tests-jasmine/tests.html` in a browser.

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Live Server, Python HTTP server, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sudhansh296/amazon-clone.git
```

2. Navigate to the project directory:
```bash
cd amazon-clone
```

3. Start a local server:
```bash
# Using Python 3
python -m http.server 5500

# Or use VS Code Live Server extension
```

4. Open your browser and navigate to:
```
http://localhost:5500/amazon.html
```

## 📱 Pages Overview

### Amazon.html
- Product grid display
- Search functionality
- Add to cart feature
- Responsive product cards

### Checkout.html
- Cart item management
- Delivery option selection
- Order summary
- Payment calculation
- Place order functionality

### Orders.html
- Order history display
- Buy again feature
- Track package links
- Order details

### Tracking.html
- Package tracking interface
- Delivery progress visualization
- Estimated delivery dates

## 🎨 Design Features

- **Responsive Grid Layout**: Adapts from desktop to mobile
- **Amazon-inspired UI**: Familiar and intuitive interface
- **Custom CSS**: No frameworks, pure CSS implementation
- **Interactive Feedback**: Visual confirmations for user actions
- **Professional Typography**: Roboto font from Google Fonts

## 🔧 Advanced Concepts Demonstrated

1. **Module Pattern**: Code organization with ES6 modules
2. **OOP Principles**: Classes, inheritance, encapsulation
3. **Async Programming**: Promises, async/await, error handling
4. **Data Persistence**: localStorage for cart and orders
5. **Event Handling**: Dynamic event listeners
6. **DOM Manipulation**: Efficient rendering and updates
7. **API Integration**: Fetch API for backend communication
8. **Testing**: Unit tests with Jasmine framework

## 📈 Future Enhancements

- User authentication system
- Product reviews and ratings
- Wishlist functionality
- Advanced filtering (price range, categories)
- Payment gateway integration
- Backend API development
- Database integration
- Admin dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is for educational purposes. Amazon and its logo are trademarks of Amazon.com, Inc.

## 👨‍💻 Author

**Sudhansh** - [GitHub Profile](https://github.com/sudhansh296)

## 🔗 Links

- **Repository**: [https://github.com/sudhansh296/amazon-clone](https://github.com/sudhansh296/amazon-clone)
- **Live Demo**: [View Live Site](https://amazonclonebyshu.netlify.app)

## 🙏 Acknowledgments

- Inspired by Amazon.com
- Product images and icons for educational use
- Day.js library for date formatting
- Jasmine testing framework

---

**Note**: This is a learning project and not affiliated with Amazon.com. All product images and branding are used for educational purposes only.
