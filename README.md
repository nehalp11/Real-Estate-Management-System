<h1 align="center">🏠 Real Estate Management System</h1>

<p align="center">
  <b>A Full-Stack MERN Web Application for Property Management</b><br>
  <i>Search, filter, book properties — with secure JWT authentication</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=flat"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/Status-Completed-green?style=flat"/>
</p>

---

## 📌 About the Project

A full-stack web application built with the **MERN stack** to manage property listings, bookings, and user interactions. The system supports two roles — **Users** who can browse and book properties, and **Admins** who can manage all listings.

Built as an individual project in **November 2025**.

---

## ✨ Features

### For Users
- 🔍 Search and filter properties by location, price, and type
- 📋 View detailed property listings with images and info
- 📅 Book properties directly from the platform
- 👤 Secure login and registration with JWT authentication

### For Admins
- ➕ Add new property listings
- ✏️ Update existing listings
- 🗑️ Delete listings
- 📊 View all bookings and user activity

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Authentication | JWT (JSON Web Tokens) |
| API Style | RESTful APIs |
| Styling | CSS / Responsive UI |

---

## 🏗️ System Architecture

```
CLIENT (React.js)
      │
      │  HTTP Requests
      ▼
SERVER (Node.js + Express.js)
      │
      ├── /api/auth        → Register, Login (JWT)
      ├── /api/properties  → CRUD operations
      ├── /api/bookings    → Book property
      └── /api/admin       → Admin management
      │
      │  Mongoose ODM
      ▼
DATABASE (MongoDB)
      │
      ├── Users Collection
      ├── Properties Collection
      └── Bookings Collection
```

---

## 📁 Project Structure

```
Real-Estate-Management-System/
│
├── client/                      # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── PropertyCard.jsx
│       │   ├── SearchBar.jsx
│       │   └── BookingForm.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── PropertyDetail.jsx
│       │   └── AdminDashboard.jsx
│       └── App.jsx
│
├── server/                      # Node.js + Express backend
│   ├── models/
│   │   ├── User.js
│   │   ├── Property.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── properties.js
│   │   ├── bookings.js
│   │   └── admin.js
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification
│   └── server.js
│
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/nehalp11/Real-Estate-Management-System.git
cd Real-Estate-Management-System

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Create environment file
cp .env.example .env
# Add your MongoDB URI and JWT secret to .env

# Run backend (from server/)
npm start

# Run frontend (from client/)
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the server directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 📡 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login + get JWT token |

### Property Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties` | Get all properties |
| GET | `/api/properties/:id` | Get single property |
| POST | `/api/properties` | Add property (admin) |
| PUT | `/api/properties/:id` | Update property (admin) |
| DELETE | `/api/properties/:id` | Delete property (admin) |

### Booking Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/user` | Get user's bookings |

---

## 🎯 Key Learnings

- Implementing **JWT-based authentication** with protected routes
- Building **RESTful APIs** with Express.js
- **MongoDB schema design** with Mongoose ODM
- **React state management** and component architecture
- **Role-based access control** (User vs Admin)
- Connecting frontend and backend with **Axios**

---

## 👩‍💻 Developer

**Nehal P** — Individual Project  
B.E. CSE (AI & ML) | MITE Mangalore | November 2025

---

<p align="center">
  <i>Built with ❤️ using the MERN Stack</i>
</p>
