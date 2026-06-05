import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./a11y.css";

if (import.meta.env.DEV) {
  void Promise.all([
    import("@axe-core/react"),
    import("react-dom"),
    import("react"),
  ]).then(([{ default: axe }, ReactDOM, React]) => {
    axe(React.default, ReactDOM.default, 1000, {});
  });
}

createRoot(document.getElementById("root")!).render(<App />);
