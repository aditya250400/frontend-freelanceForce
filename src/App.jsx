import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-slate-900 text-white">
      <div className="flex gap-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex flex-col gap-3">
        <button
          className="p-2 bg-blue-600 w-fit rounded-full "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button className="bg-slate-800">Click me</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
