import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Открыть модалку
      </button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
