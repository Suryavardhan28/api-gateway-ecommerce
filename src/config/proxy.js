const path = require("path");
const dotenv = require("dotenv");
const logger = require("./logger");

// Load environment variables with explicit path
const result = dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Load service URLs from environment variables
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL;
const PAYMENT_SERVICE_URL = process.env.PAYMENT_SERVICE_URL;
const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL;

// NOTE: Direct HTTP proxy implementations are now used instead of http-proxy-middleware
// See the service implementations in ../services/ directory:
// - ../services/userService.js
// - ../services/productService.js
// - ../services/orderService.js
// - ../services/paymentService.js
// - ../services/notificationService.js

module.exports = {
    // Export service URLs for use in other parts of the application
    serviceUrls: {
        USER_SERVICE_URL,
        PRODUCT_SERVICE_URL,
        ORDER_SERVICE_URL,
        PAYMENT_SERVICE_URL,
        NOTIFICATION_SERVICE_URL,
    },
};
