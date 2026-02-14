# Advanced Todo Management Application


A professional, high-performance task management application built with **React**, featuring persistent storage, optimized rendering, and a clean user interface.

## Features

* **Task Management**: Create, toggle, and delete tasks with ease.
* **Persistent Storage**: Integration with `localStorage` via a Custom Hook to ensure data persists after page reloads.
* **Performance Optimized**: Utilizes `useMemo` for heavy filtering and `useCallback` to prevent unnecessary child re-renders.
* **Advanced Filtering**: Filter tasks by status (All, Completed, Uncompleted).
* **Real-time Stats**: Instant dashboard showing total, completed, and pending tasks.
* **Custom UI Components**: Custom-built Modals for deletion confirmation (no window alerts).
* **Fully Responsive**: Styled with modern CSS (Flexbox, Grid) to work on all screen sizes.

## Tech Stack

* **Core**: React (Functional Components)
* **Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback`, and Custom Hooks.
* **Styling**: Modern CSS3 with CSS Variables and Animations.

##  Project Structure

```text
src/
 ├── components/
 │    ├── TaskForm.js
 │    ├── TaskList.js
 │    ├── TaskItem.js
 │    └── FilterButton.js
 ├── hooks/
 │    └── useLocalStorage.js
 ├── styles/
 │    └── App.css
 └── App.js
```
## Installation & Setup

 1- Clone the repository:
```bash
git clone https://github.com/Jan030100/Advanced-Todo-Management-Application.git
```
2- Install dependencies:
```bash
npm install
 ```
3-Start the application:
```bash
npm start
 ```
