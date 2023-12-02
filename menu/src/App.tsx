import { useEffect, useState } from "react";

// Example mutation
// const updatePageTitle = async (id: number) => {
// 	await fetch(`${window.wpApiSettings.root}wp/v2/pages/${id}`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			// This is required for authenticated requests
// 			"X-WP-Nonce": window.wpApiSettings.nonce,
// 		},
// 		credentials: "include",
// 		body: JSON.stringify({
// 			title: "Hello World",
// 		}),
// 	});
// };

const App = () => {
	const [count, setCount] = useState(0);
	const [pages, setPages] = useState<any>([]);

	// Example query (ideally use a library like React Query)
	useEffect(() => {
		// Fetches all pages
		fetch(`${window.wpApiSettings.root}wp/v2/pages`)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setPages(json);
			});
	}, []);

	return (
		<>
			<h1>Wordpress Plugin</h1>
			<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			<ul>
				{pages.map((page: any) => (
					<li
						key={page.id}
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						{page.title.rendered || "Untitled"}
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
