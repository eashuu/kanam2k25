import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import Load from "./Load.jsx";

const Main = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <NextUIProvider>
        {/* {load ? <Load /> : <App />} */}
        <App/>
      </NextUIProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
