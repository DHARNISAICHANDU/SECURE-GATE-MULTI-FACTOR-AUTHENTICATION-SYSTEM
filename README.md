# 🔐 SECURE-GATE: Multi-Factor Authentication System

A full-stack authentication system built with the MERN stack that provides secure user authentication using JWT-based login and Time-Based One-Time Password (TOTP) Multi-Factor Authentication.

This project focuses on strengthening account security by combining password authentication with QR-code-based OTP verification using authenticator apps.

---

## 🚀 Features

* 🔑 User Registration & Login
* 🔐 JWT Authentication
* 📲 Multi-Factor Authentication (MFA)
* 📷 QR Code Generation for MFA Setup
* ⏳ Time-Based OTP Verification (TOTP)
* 🛡️ Protected Routes
* 📊 Dashboard Interface
* ⚡ Secure Password Hashing with bcrypt
* 🌐 Full MERN Stack Application
* 🎨 Modern React Frontend UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Chart.js
* Recharts
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* speakeasy (TOTP Authentication)
* qrcode
* dotenv

---

## 📂 Project Structure

```bash
SECURE-GATE-MULTI-FACTOR-AUTHENTICATION-SYSTEM/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── mfaController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── verifyToken.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── mfa.js
│   │   └── user.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## 🔄 Authentication Flow

```text
User Registration
        │
        ▼
Password Login
        │
        ▼
JWT Token Generation
        │
        ▼
MFA Setup using QR Code
        │
        ▼
OTP Verification
        │
        ▼
Access Protected Dashboard
```

---

## ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/DHARNISAICHANDU/SECURE-GATE-MULTI-FACTOR-AUTHENTICATION-SYSTEM.git
```

```bash
cd SECURE-GATE-MULTI-FACTOR-AUTHENTICATION-SYSTEM
```

---

# Backend Setup

## 2️⃣ Navigate to Backend Folder

```bash
cd backend
```

## 3️⃣ Install Backend Dependencies

```bash
npm install
```

## 4️⃣ Create Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 5️⃣ Run Backend Server

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

## 6️⃣ Navigate to Frontend Folder

```bash
cd ../frontend
```

## 7️⃣ Install Frontend Dependencies

```bash
npm install
```

## 8️⃣ Start React Application

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 📱 MFA Setup Process

1. Register a new account.
2. Login using email and password.
3. Scan the generated QR code using:

   * Google Authenticator
   * Microsoft Authenticator
   * Authy
4. Enter the generated OTP.
5. Access the secured dashboard.

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT token authentication
* Protected API routes
* OTP-based second-layer verification
* Environment variable protection
* Secure MongoDB integration

---

## 📊 Frontend Pages

### Available Pages

* 🏠 Home Page
* 🔐 Login Page
* 📝 Registration Page
* 📲 Setup MFA Page
* 🔢 OTP Verification Page
* 📈 Dashboard Page

---

## 📦 Backend API Routes

| Route                | Description          |
| -------------------- | -------------------- |
| `/api/auth/register` | Register User        |
| `/api/auth/login`    | User Login           |
| `/api/mfa/setup`     | Generate MFA QR      |
| `/api/mfa/verify`    | Verify OTP           |
| `/api/user`          | Protected User Route |

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-stack MERN development
* Authentication system design
* JWT implementation
* Multi-Factor Authentication (MFA)
* Secure API development
* MongoDB integration
* React routing & protected pages

---

## 📸 Screenshots

Add screenshots here:

```text
✔ Login Page
✔ Register Page
✔ QR Code Setup
✔ OTP Verification
✔ Dashboard
```

---

## 🚀 Future Enhancements

* 📧 Email Verification
* 📱 SMS OTP Integration
* ☁️ Cloud Deployment
* 🔔 Login Activity Alerts
* 👤 Role-Based Authentication
* 🌍 OAuth Login (Google/GitHub)

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

---

## 👨‍💻 Author

### Sai Chandu

* GitHub: [https://github.com/DHARNISAICHANDU](https://github.com/DHARNISAICHANDU)

---

## ⭐ Support

If you found this project helpful, give it a ⭐ on GitHub.

---

## 📜 License

This project is developed for educational and learning purposes.
