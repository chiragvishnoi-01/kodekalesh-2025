# Wellness Wave

Wellness Wave is a comprehensive water quality and disease outbreak monitoring system designed for Northeast India. The platform leverages AI technology to analyze water quality through image recognition and tracks disease outbreaks to provide real-time insights and predictions.

## Features

- **Water Quality Analysis**: Upload images of water sources for instant quality assessment
- **Disease Outbreak Tracking**: Monitor and report disease cases in real-time
- **AI-Powered Insights**: Get predictive analytics and risk assessments
- **Multi-User Dashboard**: Role-based access for users, ASHA workers, and officials
- **Voice Reporting**: Report issues using voice commands
- **Multilingual Support**: Available in multiple languages
- **Data Visualization**: Interactive charts and globes for data representation

## Technology Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Context for state management

### Backend
- Node.js with Express
- MongoDB for data storage
- Google Gemini AI for image analysis and predictions
- JWT for authentication

## Installation

1. Clone the repository:
```bash
git clone https://github.com/chiragvishnoi-01/kodekalesh-2025.git
```

2. Navigate to the project directory:
```bash
cd Wellnesswave/organized-project
```

3. Install frontend dependencies:
```bash
npm install
```

4. Navigate to the backend directory and install dependencies:
```bash
cd wellness-wave-backend
npm install
```

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:9080/api
```

### Backend (.env)
```env
PORT=9080
MONGO_URI=mongodb://localhost:27017/wellnesswave
JWT_SECRET=your_secret_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## Running the Application

1. Start MongoDB server:
```bash
mongod
```

2. Start the backend server:
```bash
cd wellness-wave-backend
npm run dev
```

3. Start the frontend development server:
```bash
cd ..
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3005
- Backend API: http://localhost:9080

## Project Structure

```
organized-project/
├── components/
│   ├── auth/
│   ├── dashboards/
│   ├── features/
│   ├── layout/
│   ├── ui/
│   └── visualizations/
├── context/
├── hooks/
├── i18n/
├── services/
├── wellness-wave-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── tests/
├── .env
├── App.tsx
└── index.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.