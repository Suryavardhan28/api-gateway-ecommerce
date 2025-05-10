# API Gateway

A microservice component of the E-Commerce platform that serves as the single entry point for all client requests, handling routing, authentication, and request/response transformation.

## Overview

The API Gateway provides:

-   Request routing to appropriate microservices
-   Authentication and authorization
-   Rate limiting
-   Request/response logging
-   Health monitoring of all services
-   Error handling and transformation

## Prerequisites

-   Node.js 14 or higher
-   Docker and Docker Compose
-   Kubernetes cluster (for production)
-   Access to all microservices:
    -   User Service (port 8081)
    -   Product Service (port 8082)
    -   Order Service (port 8083)
    -   Payment Service (port 8084)
    -   Notification Service (port 8085)

## Quick Start

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-org/api-gateway.git
    cd api-gateway
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Environment Setup**
   Create a `.env` file:

    ```env
    PORT=8000
    USER_SERVICE_URL=http://localhost:8081
    PRODUCT_SERVICE_URL=http://localhost:8082
    ORDER_SERVICE_URL=http://localhost:8083
    PAYMENT_SERVICE_URL=http://localhost:8084
    NOTIFICATION_SERVICE_URL=http://localhost:8085
    JWT_SECRET=your_jwt_secret
    RATE_LIMIT_WINDOW_MS=900000
    RATE_LIMIT_MAX_REQUESTS=100
    ```

4. **Start the Service**

    ```bash
    # Development
    npm run dev

    # Production
    npm start
    ```

## API Documentation

### Public Routes

-   `POST /api/users/login` - User login
-   `POST /api/users/register` - User registration
-   `GET /api/products` - Get all products
-   `GET /api/products/top` - Get top products
-   `GET /api/products/:id` - Get product by ID
-   `GET /api/health` - API Gateway health check
-   `GET /api/services/health` - All services health check

### Protected Routes

-   `GET /api/users/profile` - Get user profile
-   `PUT /api/users/profile` - Update user profile
-   `POST /api/products/:id/reviews` - Add product review
-   `GET /api/orders/myorders` - Get user's orders
-   `GET /api/orders/:id` - Get order by ID
-   `PUT /api/orders/:id/pay` - Pay for order
-   `PUT /api/orders/:id/cancel` - Cancel order
-   `POST /api/payments/process` - Process payment
-   `GET /api/payments/:id` - Get payment by ID
-   `POST /api/payments/:id/refund` - Refund payment
-   `GET /api/payments/history` - Get payment history
-   `GET /api/notifications` - Get notifications
-   `GET /api/notifications/:id` - Get notification by ID
-   `PUT /api/notifications/read-all` - Mark all notifications as read
-   `PUT /api/notifications/:id/read` - Mark notification as read
-   `DELETE /api/notifications/:id` - Delete notification
-   `GET /api/notifications/unread/count` - Get unread notifications count

### Admin Routes

-   `GET /api/users` - Get all users
-   `GET /api/users/:id` - Get user by ID
-   `PUT /api/users/:id` - Update user
-   `DELETE /api/users/:id` - Delete user
-   `POST /api/products` - Create product
-   `PUT /api/products/:id` - Update product
-   `DELETE /api/products/:id` - Delete product
-   `GET /api/orders` - Get all orders
-   `PUT /api/orders/:id/status` - Update order status
-   `GET /api/orders/admin/stats` - Get order statistics
-   `GET /api/orders/user/:userId` - Get user's orders
-   `GET /api/payments/admin/stats` - Get payment statistics
-   `GET /api/notifications/admin/stats` - Get notification statistics
-   `GET /api/products/admin/stats` - Get product statistics
-   `GET /api/users/admin/stats` - Get user statistics

## Monitoring

-   Health check endpoint: `/api/health`
-   Services health check: `/api/services/health`
-   Request logging
-   Error tracking
-   Rate limiting status
-   Service response times

## Troubleshooting

### Common Issues

1. Service Connection Issues

    - Check service URLs configuration
    - Verify all services are running
    - Check network connectivity

2. Authentication Issues

    - Verify JWT secret configuration
    - Check token expiration
    - Verify service tokens

3. Rate Limiting Issues
    - Check rate limit configuration
    - Monitor request patterns
    - Adjust limits if needed
