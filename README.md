# 🎮 Beautiful Tic-Tac-Toe Game

A modern, responsive Tic-Tac-Toe game built with React and Vite, featuring beautiful glassmorphism design and smooth animations.

![Tic Tac Toe Game](https://img.shields.io/badge/React-19.0.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.3-green) ![CSS3](https://img.shields.io/badge/CSS3-Responsive-orange)

## ✨ Features

- 🎨 **Beautiful UI**: Modern glassmorphism design with gradient backgrounds
- 📱 **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- ⚡ **Smooth Animations**: Engaging hover effects and transitions
- 🎯 **Interactive Gameplay**: Click to place X's and O's with visual feedback
- 🏆 **Win Detection**: Automatic win detection with celebration message
- 🔄 **Reset Functionality**: Easy game reset button
- ♿ **Accessible**: Keyboard navigation and screen reader friendly

## 🚀 Live Demo

Visit the live demo: [Tic-Tac-Toe Game](https://your-vercel-deployment-url.vercel.app)

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with animations
- **JavaScript ES6+** - Game logic
- **Vercel** - Deployment platform

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
tic-tac-toe/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── circle.png
│   │   └── cross.png
│   ├── components/
│   │   ├── TicTacToe.jsx
│   │   └── TicTacToe.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── dist/                 # Build output
├── vercel.json          # Vercel configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🎮 How to Play

1. The game starts with Player X
2. Click on any empty square to place your mark
3. Players alternate between X and O
4. First player to get 3 marks in a row (horizontal, vertical, or diagonal) wins
5. Click "Reset" to start a new game

## 🐛 Troubleshooting

### Common Deployment Issues

1. **404 Errors for Assets**
   - Ensure `base: "./"` is set in `vite.config.js`
   - Check that `vercel.json` is properly configured

2. **React Errors in Production**
   - Make sure all refs are properly null-checked
   - Avoid mutating state directly
   - Use proper React patterns for state management

3. **Build Fails**
   - Check for ESLint errors: `npm run lint`
   - Ensure all dependencies are installed: `npm install`

## 🔧 Configuration Files

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: "./", // Important for deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### vercel.json
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Vercel for the excellent hosting platform

---

⭐ If you found this project helpful, please give it a star!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
