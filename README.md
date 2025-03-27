# MiniUI_by_Rahul - A Lightweight UI Library

## Overview
MiniUI_by_Rahul is a minimal JavaScript UI library that provides a simple component-based architecture without a Virtual DOM. It is designed for ultra-lightweight projects and direct DOM updates.

## Features
- Small size (~2KB)
- JSX-like syntax (optional)
- Signals-based state management (auto updates without re-renders)
- Simple hooks-like system
- Zero dependencies
- Ideal for small projects, dashboards, and widgets

## Why MiniUI_by_Rahul is More Efficient?
MiniUI_by_Rahul is built for efficiency and performance in lightweight applications. Here’s why it stands out:
- **No Virtual DOM:** Unlike React, which uses a Virtual DOM for updates, MiniUI_by_Rahul directly updates the DOM, making it faster for small applications.
- **Minimal Bundle Size:** At just ~2KB, it is significantly smaller than libraries like React (~50KB) or Vue (~30KB), reducing load time and improving performance.
- **Signals-Based State Management:** Unlike React’s re-renders, MiniUI_by_Rahul uses signals to update only the necessary elements, reducing unnecessary computations.
- **Zero Dependencies:** No extra libraries are needed, ensuring a clean and efficient package.
- **Ideal for Small-Scale Applications:** Perfect for dashboards, widgets, and lightweight projects where using React or Vue would be overkill.

## Installation
You can use MiniUI_by_Rahul in your project via NPM:
```sh
npm install miniui_by_rahul
```
Or include it directly in your HTML file:
```html
<script type="module" src="https://unpkg.com/miniui_by_rahul"></script>
```

## Getting Started
### 1. Creating a Signal (State Management)
MiniUI_by_Rahul uses **signals** to manage state without re-rendering the entire component.
```javascript
import { setSignal } from "miniui_by_rahul";

const [count, setCount] = setSignal(0);
console.log(count()); // 0
setCount(5);
console.log(count()); // 5
```

### 2. Creating and Rendering a Component
Components in MiniUI_by_Rahul are simple functions that return DOM elements.
```javascript
import { render, setSignal } from "miniui_by_rahul";

function Counter() {
    const [count, setCount] = setSignal(0);
    const btn = document.createElement("button");
    btn.textContent = `Count: ${count()}`;
    btn.onclick = () => {
        setCount(count() + 1);
        btn.textContent = `Count: ${count()}`;
    };
    return btn;
}

render(Counter, document.getElementById("app"));
```

### 3. Using in HTML
Include MiniUI_by_Rahul in an HTML file and add an element with an `id` where the component will be mounted.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>MiniUI_by_Rahul Example</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="app.js"></script>
</body>
</html>
```

## API Reference
### `setSignal(initialValue)`
Creates a reactive state that updates elements automatically.
```javascript
const [value, setValue, subscribe] = setSignal(10);
```
- `value()`: Returns the current state.
- `setValue(newValue)`: Updates the state.
- `subscribe(callback)`: Runs a function when the state updates.

### `render(Component, container)`
Renders a MiniUI_by_Rahul component inside a given container.
```javascript
render(MyComponent, document.getElementById("app"));
```

## License
MIT License

## Author
Rahul

---

MiniUI_by_Rahul is designed for ultra-lightweight applications where using a full-fledged framework like React or Vue would be overkill. 🚀

