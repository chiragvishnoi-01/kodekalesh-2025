# wellness-wave-backend

## Overview
Wellness Wave Backend is a Node.js application built with Express and MongoDB, designed to support a wellness application. This project provides a robust API for user authentication and management.

## Features
- User authentication (signup and login)
- User profile management
- Middleware for route protection and data validation
- Integration tests for authentication functionality

## Technologies Used
- Node.js
- Express
- MongoDB (with Mongoose)
- TypeScript
- Jest (for testing)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wellness-wave-backend.git
   ```
2. Navigate to the project directory:
   ```
   cd wellness-wave-backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

### Running the Application
To start the server, run:
```
npm run dev
```
The server will start on the specified port (default is 5000).

### Running Tests
To run the integration tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.