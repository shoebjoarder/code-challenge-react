# IKIM Code Challenge React.js - Template

A "Simple To-Do List" built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

This is the **template**: the logic has been removed and replaced with
`// * Task N` placeholders for you to complete. The app **runs at every step** —
after you finish each task one by one, it keeps working without crashing.

## Getting started

```bash
nvm use         # If you have Node.js installed via nvm, this will switch to the correct version.
npm install     # Install dependencies
npm run dev     # Start the development server
```

Then open http://localhost:3000.

## Tasks

Complete the tasks in order. Each placeholder is marked with `// * Task N: Starts here`
… `// * Task N: Ends here` comments. The full task descriptions are in the respective slides.

| Task | Goal | File | Marker |
| ---- | ---- | ---- | ------ |
| 1 | Create & initialize the `todos` state | `src/components/todo-app.tsx` | `Task 1` |
| 2 | `handleDeleteTodo` function | `src/components/todo-app.tsx` | `Task 2` |
| 3 | Render `<TodoList>` + receive its props | `src/components/todo-app.tsx` & `src/components/todo-list.tsx` | `Task 3` |
| 4 | Wire the delete function to the button's event handler | `src/components/todo-list.tsx` | `Task 4` |
| 5 | `handleAddTodo` function | `src/components/todo-app.tsx` | `Task 5` |
| 6 | Render `<AddTodo>` + state & click handler | `src/components/todo-app.tsx` & `src/components/add-todo.tsx` | `Task 6` |
| 7 | `handleChange` for the input field | `src/components/add-todo.tsx` | `Task 7` |
| * | Bonus: Bug fixing input field | `src/components/add-todo.tsx` | `Bug fixing` |

> Component map (parent → children): `TodoApp` (App) renders `AddTodo` and
> `TodoList` (Todo). `Header` and `Footer` are already complete.
