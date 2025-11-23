# Fiverr Clone - Freelance Marketplace Platform

A full-featured freelance marketplace application inspired by Fiverr, connecting freelancers with clients for various digital services. Built with modern web technologies to provide a seamless experience for both service providers and buyers.

## 🚀 Features

### For Freelancers (Sellers)
- **Profile Management**
  - Create and customize seller profile

- **Gig Management**
  - Create multiple service listings (gigs)
  - Set pricing and delivery time
  - Manage gig categories and tags

- **Communication**
  - Real-time messaging with buyers
  - Order-specific conversations

### For Clients (Buyers)
- **Service Discovery**
  - Browse gigs by category
  - Advanced search and filters
  - Sort by relevance, rating, price
  - View seller profiles and reviews

- **Review System**
  - Rate and review sellers

## 🛠️ Tech Stack

### Backend
- **Framework:**  Node.js + Express
- **Database:** MongoDB
- **Authentication:**  JWT s
- **Payment:** Stripe

### Frontend
- **Framework:** React.js 
- **State Management:** Redux 
- **HTTP Client:** Axios

### DevOps
- **Build Tool:**  npm

## 📋 Prerequisites

- Java 17+ (for Spring Boot) or Node.js 16+
-  MongoDB
- Stripe account for payments

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - Logout
- 
### Users/Profiles
- `GET /api/users/{id}` - Get user profile
- `PUT /api/users/{id}` - Update profile

### Gigs
- `GET /api/gigs` - Get all gigs (with filters)
- `GET /api/gigs/{id}` - Get gig details
- `POST /api/gigs` - Create new gig (Seller)
- `PUT /api/gigs/{id}` - Update gig (Seller)
- `DELETE /api/gigs/{id}` - Delete gig (Seller)

### Orders
- `POST /api/orders` - Create order (Buyer)
- `GET /api/orders` - Get user orders
- `GET /api/orders/{id}` - Get order details

### Messages
- `GET /api/conversations` - Get all conversations
- `GET /api/conversations/{id}` - Get conversation messages
- `POST /api/conversations` - Start conversation

### Reviews
- `GET /api/gigs/{gigId}/reviews` - Get gig reviews
- `POST /api/reviews` - Create review (Buyer)
- `PUT /api/reviews/{id}` - Update review
- `DELETE /api/reviews/{id}` - Delete review

## 🗂️ Project Structure

```
Fiver-Application-clone/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/fiverr/
│   │   │   │   ├── config/          # Security, WebSocket, AWS config
│   │   │   │   ├── controller/      # REST Controllers
│   │   │   │   ├── dto/             # Request/Response DTOs
│   │   │   │   ├── entity/          # JPA Entities
│   │   │   │   │   ├── User.java
│   │   │   │   │   ├── Gig.java
│   │   │   │   │   ├── Order.java
│   │   │   │   │   ├── Message.java
│   │   │   │   │   └── Review.java
│   │   │   │   ├── repository/      # Data repositories
│   │   │   │   ├── service/         # Business logic
│   │   │   │   ├── security/        # JWT, Auth
│   │   │   │   ├── exception/       # Custom exceptions
│   │   │   │   └── FiverrApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── GigCard/
│   │   │   ├── CategoryCard/
│   │   │   └── ChatBox/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Gigs/
│   │   │   ├── GigDetails/
│   │   │   ├── CreateGig/
│   │   │   ├── Orders/
│   │   │   ├── Messages/
│   │   │   ├── Profile/
│   │   │   └── Dashboard/
│   │   ├── services/            # API calls
│   │   ├── redux/               # State management
│   │   ├── utils/               # Helper functions
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.local
│
├── docker-compose.yml
└── README.md
```
