import { render, setSignal } from "../src/miniui.js";

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
