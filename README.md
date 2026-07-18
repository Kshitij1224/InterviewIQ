# InterviewIQ

An AI-powered interview preparation platform that helps users practice and improve their interview skills through interactive mock interviews, real-time feedback, and detailed performance reports.

## Features

- **User Authentication**: Secure sign-up and login using Firebase
- **Mock Interviews**: Interactive interview sessions with AI-powered questions
- **Real-time Timer**: Track your time during interview sessions
- **Performance Reports**: Detailed analysis and feedback after each interview
- **Interview History**: Track all past interviews and improvements
- **Payment Integration**: Razorpay integration for premium features
- **Pricing Plans**: Multiple subscription tiers for different user needs
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Project Structure

```
InterviewIQ/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store and slices
│   │   ├── utils/         # Utility functions (Firebase config)
│   │   └── assets/        # Static assets and videos
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Node.js backend application
    ├── controllers/       # Request handlers
    ├── models/            # Database schemas
    ├── routes/            # API routes
    ├── middleware/        # Custom middleware
    ├── services/          # External service integrations
    ├── config/            # Configuration files
    └── package.json
```

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Redux** - State management
- **Firebase** - Authentication and real-time database
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Multer** - File upload handling
- **Razorpay** - Payment processing
- **OpenRouter API** - AI-powered interview questions

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for local development)
- Git

## Installation

### Clone the Repository

```bash
git clone https://github.com/Kshitij1224/InterviewIQ.git
cd InterviewIQ
```

### Setup Client

```bash
cd client
npm install
npm run dev
```

The client will be available at `http://localhost:5173`

### Setup Server

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:3000` (or your configured port)

## Environment Variables

### Client (.env)
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
```

### Server (.env)
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

## API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Interview Routes
- `GET /api/interview/history` - Get user's interview history
- `POST /api/interview/start` - Start a new interview
- `POST /api/interview/submit` - Submit interview responses
- `GET /api/interview/:id` - Get interview details

### Payment Routes
- `POST /api/payment/create-order` - Create Razorpay payment order
- `POST /api/payment/verify` - Verify payment

### User Routes
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## Usage

1. **Sign Up**: Create a new account using email and password
2. **Select Interview Type**: Choose from available interview categories
3. **Start Interview**: Begin the mock interview with AI-generated questions
4. **Answer Questions**: Respond to interview questions within time limits
5. **Submit**: Complete the interview session
6. **View Report**: Get detailed feedback and performance analysis
7. **Track Progress**: Monitor improvements in your interview history

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, reach out to:
- GitHub: [@Kshitij1224](https://github.com/Kshitij1224)
- Email: your-email@example.com

## Acknowledgments

- OpenRouter API for AI-powered question generation
- Razorpay for payment processing
- Firebase for authentication and database services
- The open-source community for various libraries and tools

---

**Happy Interviewing! 🚀**
