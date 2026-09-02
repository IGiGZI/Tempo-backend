# Tempo Backend

A Node.js + Express backend for the Tempo app. Handles user authentication and stores time-marks (saved stopwatch readings with notes and laps) per user, backed by MongoDB.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB Atlas (via Mongoose)
- **Auth:** JWT (self-built) + Google auth

## Features

- User signup and login with hashed passwords
- JWT-based authentication / Google auth
- Auth middleware to protect routes
- Time-mark CRUD (create, list, delete) scoped to the logged-in user

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A MongoDB Atlas cluster (or local MongoDB instance)

### Installation

```bash
git clone https://github.com/IGiGZI/Tempo-backend
cd tempo-backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

### Running the Server

```bash
npm run dev   # development, with auto-restart
npm start     # production
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Auth

| Method | Endpoint           | Description         | Auth Required |
|--------|---------------------|----------------------|----------------|
| POST   | `/api/auth/signup`  | Register a new user | No             |
| POST   | `/api/auth/login`   | Log in a user        | No             |

### Time Marks

| Method | Endpoint              | Description                  | Auth Required |
|--------|------------------------|-------------------------------|----------------|
| GET    | `/api/timemarks`       | List all time-marks for user | Yes            |
| POST   | `/api/timemarks`       | Create a new time-mark       | Yes            |
| DELETE | `/api/timemarks/:id`   | Delete a time-mark by ID     | Yes            |

Protected routes require an `Authorization: Bearer <token>` header.

## Database

- **Cluster:** MongoDB Atlas
- **Database name:** `tempo`
- **Collections:** `users`, `timemarks`

## Notes

This backend is designed to pair with the [Tempo](#) (React + Vite). Auth is fully self-implemented (password hashing + JWT signing/verification) rather than using a third-party auth provider.
