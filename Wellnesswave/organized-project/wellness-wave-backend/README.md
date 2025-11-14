# Wellness Wave Backend

This is the backend service for the Wellness Wave application, built with Node.js, Express, and MongoDB. It provides RESTful APIs for water quality monitoring and disease outbreak tracking.

## Features

- User authentication and authorization
- Water quality report management
- Disease case report management
- AI-powered analysis using Google Gemini
- RESTful API endpoints
- JWT-based security

## Technology Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- TypeScript
- Google Gemini AI
- JWT for authentication

## API Endpoints

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

## Installation

1. Navigate to the backend directory:
```bash
cd wellness-wave-backend
```

2. Install dependencies:
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the backend directory with the following variables:

```env
PORT=9080
MONGO_URI=mongodb://localhost:27017/wellnesswave
JWT_SECRET=your_secret_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## Running the Application

1. Make sure MongoDB is running:
```bash
mongod
```

2. Start the development server:
```bash
npm run dev
```

3. For production build:
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── controllers/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── middleware/     # Custom middleware
├── config/         # Configuration files
├── utils/          # Utility functions
└── tests/          # Test files
```

## Testing

Run tests with:
```bash
npm test
```

## License

This project is licensed under the MIT License.