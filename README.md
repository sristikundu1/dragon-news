# 🐉 Dragon News

Dragon News is a modern news website built with React and Vite.
Users can read news by category, see details, and log in using Email or Google.
Some pages are protected with Private Route, so users must log in to see news details.

---

🌐 Live Site

🔗 Live Link: https://dragon-news-84904.web.app

---

## 🚀 Live Features

- 📰 Category based news system
- 🔍 News details page
- 🔐 Private route for protected pages
- 🔑 Email & Password authentication
- 🔑 Google sign-in authentication
- 👤 User profile photo after login
- 🔔 Toast notification system
- 📅 Date & time formatting
- 📢 Marquee breaking news banner
- 📱 Responsive layout
- 🎨 Modern UI using Tailwind + DaisyUI

---

## 🔐 Authentication

This project uses Firebase Authentication.

Users can:

- Register with Email & Password
- Login with Email & Password
- Login with Google
- Logout
- Update profile (name & photo)
- Access private pages after login

Private Route is used for:

- News Details page
- Protected content

---

## 🛠️ Tools & Technologies

- Vite
- React
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- React Icons
- React Hot Toast
- React Fast Marquee
- date-fns

---

## 📂 Project Functions

- Home page with categories
- Category news filter
- News details page
- Login / Register system
- Google login
- Private route protection
- User photo in navbar
- Toast message on login / register
- Loading spinner
- Responsive layout
- Banner with marquee
- Date format using date-fns

---

## 🔑 Private Route

Some pages require login.

If user is not logged in:
→ Redirect to login page
→ After login → go back to previous page
