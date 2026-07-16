# Advanced ToDo Management Application

A responsive React dashboard for managing tasks with a clean workflow, persistent storage, and live task filtering.

## Features

- Add tasks with title and optional description
- Mark tasks as complete or pending
- Delete tasks with confirmation modal
- Filter tasks by all, completed, or pending status
- Persistent storage using browser localStorage
- Dashboard-style stats summary for total, completed, and pending tasks

## Project Structure

- `src/App.js` — main dashboard layout and state management
- `src/components/TaskForm.js` — task entry form
- `src/components/TaskList.js` — task list and empty state handling
- `src/components/TaskItem.js` — individual task row with actions
- `src/components/FilterButton.js` — task filter controls
- `src/components/TaskStats.js` — stats cards
- `src/hooks/useLocalStorage.js` — localStorage sync hook
- `src/styles/App.css` — app styling and responsive layout

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be generated in the `build` folder.

## Notes

- Data is saved locally in the browser using `localStorage`.
- No backend is required for this app.
- The UI is designed for desktop and mobile layouts.

## Learn More

- React documentation: https://reactjs.org/
- Create React App docs: https://create-react-app.dev/docs/getting-started/

