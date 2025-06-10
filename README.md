# 🚗 Autokraft - Premium Car Parts E-commerce Website

Welcome to **Autokraft**, a sleek and responsive e-commerce platform for premium car parts. Built with React on the frontend and Node.js with MongoDB on the backend, Autokraft is designed to provide a fast, modern shopping experience.

🌐 **Live Site**: [autokraft.vercel.app](https://autokraft.vercel.app/)

---

## 📦 Features

- 🔍 Browse premium car parts with a clean UI
- 🛒 Add/remove items from the cart
- 🧾 Place orders via an integrated checkout modal
- ⚙️ Backend API powered by Express.js & MongoDB (hosted on Railway)
- 📱 Fully responsive layout

---

## 🛠 Tech Stack

### Frontend:
- React
- CSS Modules
- React Hooks

### Backend:
- Node.js
- Express.js
- MongoDB
- Railway (deployment)

---

## 📂 Folder Structure (Frontend)

autokraft/
├── public/
│ └── assets/
├── src/
│ ├── components/
│ │ ├── About.jsx
│ │ ├── CartSidebar.jsx
│ │ ├── CheckoutModal.jsx
│ │ ├── Contact.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Hero.jsx
│ │ ├── Products.jsx
│ │ └── WhatsAppButton.jsx
│ ├── styles/
│ │ ├── about.css
│ │ ├── cart.css
│ │ ├── contact.css
│ │ ├── footer.css
│ │ ├── header.css
│ │ ├── hero.css
│ │ ├── modal.css
│ │ └── products.css
│ ├── App.js
│ ├── App.css
│ ├── index.js
├── .gitignore
├── package.json
└── README.md

---

## 📂 Folder Structure (Backend)

autokraft-backend/
├── config/
│ └── db.js
├── models/
│ └── Order.js
├── routes/
│ └── orders.js
├── uploads/
│ └── payments/
├── .env
├── .gitignore
├── server.js
├── package.json
├── vercel.json
└── README.md


---

## 🔌 Backend API

The backend is a separate Node.js project hosted on **Railway**. It handles:

- MongoDB connection
- Order schema and routes
- File upload for payment screenshots

> Backend repo link: **(https://autokraft-backend-production.up.railway.app/api/test)**

---

## 🚀 Getting Started (Frontend)


# Install dependencies
npm install

# Run the frontend
npm start

## 🚀 Getting Started (Backend)
```bash
# Install dependencies
npm install

# Create a .env file with the following:
MONGO_URL=your_mongodb_connection
PORT=5000

# Run the backend
node server.js
🧠 Author
👤 Sebin Joseph
📧 josephsebin012@gmail.com

📄 License
This project is licensed for educational and personal use only.
---

Let me know if you want me to turn this into an actual `README.md` file you can download too.
