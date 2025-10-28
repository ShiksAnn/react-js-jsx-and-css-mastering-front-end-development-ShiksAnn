
'''PlpTaskManager/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── TaskManager.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   └── pages/
│       ├── Home.jsx
│       └── ApiData.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
'''


⚙️ Setup Instructions
1️⃣ Install Dependencies

Make sure you have Node.js (v18 or higher) installed, then run:

npm install

2️⃣ Start Development Server
npm run dev


This will start your Vite development server and open the app in your browser (usually at http://localhost:5173
).

3️⃣ Build for Production
npm run build


To preview the production build locally:

npm run preview

🧩 Features Overview
🧠 Task Manager Component

A fully functional task management system with:

✅ Add new tasks

✏️ Mark tasks as completed

🗑️ Delete tasks

🔍 Filter tasks: All / Active / Completed

💾 Persistent storage using localStorage

⚙️ Custom hook useLocalStorageTasks for clean logic

🎨 Styling with Tailwind CSS

TailwindCSS utility classes used for responsive layouts

Custom button variants (primary, secondary, danger, etc.)

Light/Dark mode toggle integrated with Tailwind’s dark: feature

Mobile-first responsive design

🌗 Theme Management

Implemented using ThemeContext.jsx:

Uses useContext to provide global theme state

Persists user preference in localStorage

Toggles between light and dark themes dynamically

Example snippet:

const { theme, toggleTheme } = useContext(ThemeContext);
<Button onClick={toggleTheme}>Toggle Theme</Button>

🔗 API Integration

A placeholder ApiData section is prepared in App.jsx for fetching and displaying public API data (e.g., from JSONPlaceholder
):

You can extend it to:

Fetch and display API data

Add search functionality

Include pagination or infinite scrolling

🧪 Hooks Used
Hook	Purpose
useState	Manage local component state
useEffect	Handle side effects (saving/loading tasks)
useContext	Manage theme globally
useLocalStorage	Custom hook for saving data persistently

🧱 Reusable Components
Component	Description
Button.jsx	Styled button with variants (primary, secondary, danger)
Navbar.jsx	Navigation bar with optional theme toggle
Footer.jsx	Footer with copyright info
TaskManager.jsx	Core feature – manages user tasks
ThemeContext.jsx	Provides global theme state

