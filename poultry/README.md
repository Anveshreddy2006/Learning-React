# Poultry Marketplace

A web application that connects poultry farmers with buyers, allowing farmers to list their poultry locations and inventory, while buyers can find and purchase poultry from nearby locations.

## Features

- Two types of user roles: Farmer and Buyer
- Farmers can:
  - Register and login
  - Add poultry locations
  - List number of hens and their weights
  - Manage inventory
- Buyers can:
  - Register and login
  - Search for nearby poultry locations
  - View available inventory
  - Make payments through the platform

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT
- Payment Integration: (To be implemented)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
poultry-marketplace/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── server/            # Backend code
│   ├── controllers/   # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── middleware/    # Custom middleware
└── public/            # Static files
``` 