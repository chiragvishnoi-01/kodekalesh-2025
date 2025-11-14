# Wellness Wave Backend 🌊

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-Ready-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-Framework-lightgrey)](https://expressjs.com/)

This is the backend service for the Wellness Wave application, built with Node.js, Express, and MongoDB. It provides RESTful APIs for water quality monitoring and disease outbreak tracking, powered by Google Gemini AI.

## 🌟 Features

- **🔐 User Authentication**: Secure JWT-based authentication and authorization
- **📊 Report Management**: Comprehensive CRUD operations for water quality and disease reports
- **🤖 AI Integration**: Google Gemini AI for image analysis and predictive insights
- **🌍 Geolocation Support**: Location-based tracking of water quality and disease outbreaks
- **🔄 RESTful API**: Well-documented and consistent API endpoints
- **🛡 Security**: JWT tokens and middleware for robust security

## 🛠 Technology Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** with Mongoose - NoSQL database for flexible data modeling
- **TypeScript** - Typed superset of JavaScript for better code quality
- **Google Gemini AI** - Advanced AI for image analysis and predictions
- **JWT** - Secure token-based authentication

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Water Quality Reports
- `GET /api/reports/water` - Get all water quality reports
- `POST /api/reports/water` - Create a new water quality report
- `GET /api/reports/water/:id` - Get a specific water quality report
- `PUT /api/reports/water/:id` - Update a water quality report
- `DELETE /api/reports/water/:id` - Delete a water quality report

### Disease Case Reports
- `GET /api/reports/disease` - Get all disease case reports
- `POST /api/reports/disease` - Create a new disease case report
- `GET /api/reports/disease/:id` - Get a specific disease case report
- `PUT /api/reports/disease/:id` - Update a disease case report
- `DELETE /api/reports/disease/:id` - Delete a disease case report

### AI Analysis
- `POST /api/ai/analyze-image` - Analyze water quality from image
- `GET /api/ai/risk-analysis` - Get risk analysis based on reports
- `GET /api/ai/daily-update` - Get daily AI update from news

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Google Gemini API Key

### Setup Steps

1. Navigate to the backend directory:
```bash
cd wellness-wave-backend
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the root of the backend directory with the following variables:

```env
PORT=9080
MONGO_URI=mongodb://localhost:27017/wellnesswave
JWT_SECRET=your_secure_jwt_secret_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## ▶️ Running the Application

### Development Mode
1. Make sure MongoDB is running:
```bash
mongod
```

2. Start the development server:
```bash
npm run dev
```

### Production Mode
1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
src/
├── controllers/     # Request handlers and business logic
│   ├── auth.controller.ts
│   ├── ai.controller.ts
│   └── report.controller.ts
├── models/         # Database models and schemas
│   ├── userModel.ts
│   ├── waterQualityReport.model.ts
│   └── diseaseCaseReport.model.ts
├── routes/         # API route definitions
│   ├── authRoutes.ts
│   ├── ai.routes.ts
│   └── report.routes.ts
├── middleware/     # Custom middleware functions
│   ├── auth.middleware.ts
│   └── validation.ts
├── config/         # Configuration files
│   └── database.ts
├── utils/          # Utility functions
│   └── logger.ts
└── tests/          # Integration and unit tests
    └── integration/
        └── auth.test.ts
```

## 🧪 Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🚀 Deployment

### Environment Variables for Production
```env
PORT=10000
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_production_jwt_secret
GEMINI_API_KEY=your_production_gemini_api_key
NODE_ENV=production
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Chirag Vishnoi** - [chiragvishnoi-01](https://github.com/chiragvishnoi-01)

## 🙏 Acknowledgments

- Google Gemini AI for powering our predictive analytics
- MongoDB for robust data storage solutions
- Express.js community for the excellent framework