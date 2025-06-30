# NeighbourFit

A community-driven platform that connects neighbors through fitness activities and wellness programs. NeighbourFit helps you discover local fitness opportunities, join neighborhood workout groups, and build a healthier community together.

## Features

- **Neighborhood Discovery**: Explore fitness-focused neighborhoods in your area
- **Activity Matching**: Find local workout groups and fitness activities
- **Community Building**: Connect with like-minded fitness enthusiasts
- **Event Organization**: Create and join neighborhood fitness events
- **Progress Tracking**: Monitor your fitness journey with community support

## Tech Stack

### Backend
- **Node.js** with Express.js framework
- **RESTful API** architecture
- **JSON** data storage (can be extended to use databases)
- **CORS** enabled for cross-origin requests

### Frontend
- **Vanilla JavaScript** for interactivity
- **CSS3** with modern styling and animations
- **Responsive Design** for mobile and desktop
- **Progressive Enhancement** approach

## Project Structure

```
neighbourfit/
│
├── backend/
│   ├── controllers/          # Request handlers and business logic
│   ├── models/              # Data models and schemas
│   ├── routes/              # API route definitions
│   ├── services/            # Business service layer
│   ├── utils/               # Utility functions and helpers
│   ├── config/              # Configuration files
│   ├── app.js               # Express app configuration
│   └── server.js            # Server entry point
│
├── frontend/
│   ├── index.html           # Main HTML file
│   ├── styles.css           # Styling and responsive design
│   └── main.js              # Frontend JavaScript logic
│
├── data/
│   └── neighborhoods.json   # Sample neighborhood data
│
├── README.md                # Project documentation
└── .env                     # Environment variables
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neighbourfit
```

2. Install dependencies:
```bash
npm install express cors dotenv
```

3. Set up environment variables:
Copy `.env.example` to `.env` and configure your settings.

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit:
```
http://localhost:3000
```

## API Endpoints

### Neighborhoods
- `GET /api/neighborhoods` - Get all neighborhoods
- `GET /api/neighborhoods/:id` - Get specific neighborhood
- `POST /api/neighborhoods` - Create new neighborhood
- `PUT /api/neighborhoods/:id` - Update neighborhood
- `DELETE /api/neighborhoods/:id` - Delete neighborhood

### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/neighborhood/:id` - Get activities by neighborhood
- `POST /api/activities` - Create new activity
- `PUT /api/activities/:id` - Update activity
- `DELETE /api/activities/:id` - Delete activity

### Users (Future Implementation)
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User authentication
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Features in Development

- [ ] User authentication and profiles
- [ ] Real-time activity scheduling
- [ ] Integration with fitness tracking APIs
- [ ] Mobile app development
- [ ] Advanced search and filtering
- [ ] Social features and messaging
- [ ] Event calendar integration
- [ ] Progress tracking and achievements

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or collaboration opportunities, please reach out to the development team.

---

**NeighbourFit** - Building stronger communities through fitness! 🏃‍♀️🏋️‍♂️🧘‍♀️
