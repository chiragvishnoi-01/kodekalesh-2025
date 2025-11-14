# Wellness Wave 🌊

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-Powered-61DAFB)](https://reactjs.org/)

Wellness Wave is a comprehensive water quality and disease outbreak monitoring system designed for Northeast India. The platform leverages cutting-edge AI technology to analyze water quality through image recognition and tracks disease outbreaks to provide real-time insights and predictions.

## 🚀 Key Features

- **💧 Water Quality Analysis**: Upload images of water sources for instant AI-powered quality assessment
- **🦠 Disease Outbreak Tracking**: Monitor and report disease cases in real-time with geolocation support
- **🤖 AI-Powered Insights**: Get predictive analytics and risk assessments using Google Gemini AI
- **👥 Multi-User Dashboard**: Role-based access for users, ASHA workers, and government officials
- **🎤 Voice Reporting**: Report issues using voice commands for accessibility
- **🌐 Multilingual Support**: Available in multiple languages including Hindi, Bengali, and English
- **📊 Data Visualization**: Interactive charts and 3D globes for comprehensive data representation

## 🛠 Technology Stack

### Frontend
- **React** with TypeScript for a robust component-based architecture
- **Vite** for lightning-fast build tooling and development server
- **Tailwind CSS** for responsive and modern styling
- **Framer Motion** for smooth animations and transitions
- **React Context** for efficient state management

### Backend
- **Node.js** with Express for scalable server-side logic
- **MongoDB** with Mongoose for flexible data storage
- **Google Gemini AI** for advanced image analysis and predictions
- **JWT** for secure authentication and authorization

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Google Gemini API Key

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/chiragvishnoi-01/kodekalesh-2025.git
cd Wellnesswave/organized-project
```

2. Install frontend dependencies:
```bash
npm install
```

3. Navigate to the backend directory and install dependencies:
```bash
cd wellness-wave-backend
npm install
cd ..
```

## ⚙️ Environment Variables

### Frontend Configuration
Create a `.env` file in the `organized-project` directory:
```env
VITE_API_URL=http://localhost:9080/api
GEMINI_API_KEY=your_gemini_api_key_here
```

### Backend Configuration
Create a `.env` file in the `wellness-wave-backend` directory:
```env
PORT=9080
MONGO_URI=mongodb://localhost:27017/wellnesswave
JWT_SECRET=your_secure_jwt_secret_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## ▶️ Running the Application

1. Start MongoDB server:
```bash
mongod
```

2. Start the backend server:
```bash
cd wellness-wave-backend
npm run dev
```

3. In a new terminal, start the frontend development server:
```bash
cd ..
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:9080

## 📁 Project Structure

```
organized-project/
├── components/
│   ├── auth/          # Authentication components
│   ├── dashboards/    # User role-specific dashboards
│   ├── features/      # Core application features
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── ui/            # Reusable UI components
│   └── visualizations/# Data visualization components
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── i18n/              # Internationalization setup
├── services/          # API service integrations
├── wellness-wave-backend/
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── models/      # Database models
│   │   ├── routes/      # API route definitions
│   │   └── middleware/  # Custom middleware
│   └── tests/           # Integration and unit tests
├── .env                 # Frontend environment variables
├── App.tsx              # Main application component
└── index.tsx            # Application entry point
```

## 🤝 Contributing

We welcome contributions to Wellness Wave! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Chirag Vishnoi** - [chiragvishnoi-01](https://github.com/chiragvishnoi-01)

## 🙏 Acknowledgments

- Google Gemini AI for powering our predictive analytics
- MongoDB for robust data storage solutions
- All contributors who have helped shape this project