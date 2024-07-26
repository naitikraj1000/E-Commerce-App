# E-commerce App

A full-stack e-commerce application built with React for the frontend and Express.js for the backend, offering a range of features for both administrators and general users.

## Deployment Link

[E-commerce App Deployment](https://e-commerce-frontend-mocha-seven.vercel.app/)

### Credentials for Testing

- **Admin**: admin@gmail.com (Password: 12345678)
- **Guest User**: guest@gmail.com (Password: 12345678)

## Features

### For Users

- User registration and login
- Browse and search products
- Add products to cart
- Buy products
- Manage cart products
- Filter products based on price range and category
- Responsive user interface

### For Administrators

- Upload and manage products
- View all registered users
- Access to admin panel

## Technologies Used

- Frontend: React
- Backend: Express.js
- Database: MongoDB
- State Management: (If used, e.g., Redux, Context API)
- Styling: (e.g., CSS, Styled-components, Tailwind CSS)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/e-commerce-app.git
cd e-commerce-app
Copy 2. Install dependencies for both frontend and backend:
cd frontend
npm install
cd ../backend
npm install
Copy 3. Set up environment variables:
Create `.env` files in both frontend and backend directories and add necessary variables.
Backend

```
PORT=
MONGODB_URI=
TOKEN_SECRET_KEY=
FRONTEND_URL=
```

Frontend

```
REACT_APP_CLOUD_NAME_CLOUDINARY =
REACT_APP_BACKEND_URL =
```

Fill in the values according to your setup.

## Usage

1. Start the backend server:
   cd backend
   npm run dev
   Copy
2. In a new terminal, start the frontend development server:
   cd frontend
   npm start
   Copy
3. Open your browser and navigate to `http://localhost:3000`.

## Contributing

We welcome contributions to the E-commerce App! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## Contact

For any questions or feedback, please reach out to [Naitik Raj](https://www.linkedin.com/in/naitik-raj/).

---

Happy shopping! 🛒
