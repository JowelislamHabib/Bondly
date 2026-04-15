# Bondly — Keep Your Network Alive

A modern web application for building and managing meaningful connections with a clean, fast, and user-friendly experience.

## 📖 Description

Bondly helps users organize relationships, track interactions, and strengthen personal or professional networks through a simple and intuitive interface.

## 🛠️ Technologies Used

- **Next.js** `16.2.3`
- **React** `19.2.4`
- **React DOM** `19.2.4`
- **Tailwind CSS** `4.x`
- **daisyUI**
- **Recharts**
- **React Toastify**
- **ESLint**
- **Node.js**
- **npm**

## ✨ Features

- User-friendly, responsive interface
- Fast page loads and smooth navigation
- Structured profile and connection management
- Search and filtering for quick discovery
- Toast notifications for UX feedback
- Chart/data visualization support
- Scalable project architecture for future growth

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/JowelislamHabib/Bondly.git
   cd bondly
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at:  
   `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint checks

## 📂 Project Structure

```text
bondly/
└── src/
    ├── app/
    │   ├── components/
    │   │   ├── Home/
    │   │   │   ├── FriendsCard.jsx
    │   │   │   ├── FriendsList.jsx
    │   │   │   ├── HeroText.jsx
    │   │   │   └── StatsCards.jsx
    │   │   ├── Footer.jsx
    │   │   ├── NavBar.jsx
    │   │   └── NoDataFound.jsx
    │   ├── stats/
    │   │   └── page.jsx
    │   ├── timeline/
    │   │   └── page.jsx
    │   ├── user/
    │   │   └── [id]/
    │   │       └── page.jsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   ├── not-found.js
    │   └── page.js
    └── context/
        ├── FriendsContext.jsx
        └── TimelineContext.jsx
```

## 🤝 Contributing

Contributions are welcome. Open an issue or submit a pull request to suggest improvements.

## 📄 License

This project is licensed under the **MIT License**.
