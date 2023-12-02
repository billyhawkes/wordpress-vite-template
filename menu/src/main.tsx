import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
	interface Window {
		wpApiSettings: {
			root: string;
			nonce: string;
		};
	}
}

// Make sure id matches the one in plugin.php entry html
ReactDOM.createRoot(document.getElementById("entry_point")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
