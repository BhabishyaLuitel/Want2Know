
# 🌟 Want2Know Blog Site Project

## 🌐 Project Overview

"Want2Know" is an innovative and modern blog platform 📰 designed to blend user-generated ✍️ and AI-driven 🤖 content. Built with Next.js, MongoDB, and the Shadcn/UI component library, this project is aimed at delivering a responsive 📱, user-friendly 👥, and informative 💡 platform.

## 📂 Project Structure

```
Want2Know/
│
├── pages/                        # 📄 Page components for frontend and API routes
│   ├── api/                      # ⚙️ Backend API routes
│   │   ├── auth/                 # 🔐 Authentication APIs
│   │   ├── blogs/                # 📝 Blog management APIs
│   │   └── user/                 # 👤 User profile management APIs
│   ├── _app.js                   # 🌐 Main app component
│   ├── index.js                  # 🏠 Home page
│   └── [other pages].js          # 📑 Other frontend pages
│
├── components/                   # 🧩 Reusable React components
│   ├── layout/                   # 📐 Layout components
│   ├── ui/                       # 🎨 UI components (using Shadcn/UI)
│   └── blog/                     # 📖 Blog-specific components
│
├── public/                       # 📚 Static files
│
├── styles/                       # 🎨 Global styles and CSS modules
│
├── lib/                          # 🔧 Shared utility and helper functions
│   ├── api/                      # 🌐 API call utilities
│   ├── auth/                     # 🔑 Authentication helpers
│   └── db/                       # 💾 MongoDB connection and setup
│
├── models/                       # 📋 MongoDB models
│
├── context/                      # 💭 React context for state management
│
├── hooks/                        # 🪝 Custom React hooks
│
├── utils/                        # 🛠️ Utility functions
│
├── .env.local                    # 🔒 Environment variables
│
├── next.config.js                # ⚙️ Next.js configuration
│
└── package.json                  # 📦 NPM package configuration
```

## 🔑 Key Features

- **User Authentication**: Registration, login, profile management.
- **Blog Management**: Creating, updating, deleting, and viewing blog posts.
- **AI-Driven Content**: Automated blog generation based on trending topics.
- **Database Integration**: MongoDB for data persistence.
- **Frontend Development**: Next.js for server-side rendering and SEO optimization.
- **Shadcn/UI Integration**: Modern UI components for a sleek user interface.

## 🚀 Getting Started

1. Clone the repository 📥.
2. Install dependencies with `npm install` 💻.
3. Set up your MongoDB instance and configure `.env.local` 🔧.
4. Run `npm run dev` to start the development server 🌐.

## 📚 Contribution Guidelines

- Ensure code quality and consistency 🏆.
- Follow commit message conventions ✏️.
- Test features thoroughly before pushing 🧪.
- Document any major changes or additions 📝.

## 📃 License

This project is licensed under the [MIT License](LICENSE).
