import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const hitServer = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await response.json();
    setText(data.message);
  };

  return (
    <main>
      <h1>Vite + React</h1>
      <button onClick={hitServer}>Hit Server</button>
      <p>{text}</p>
    </main>
  );
};

export default App;
