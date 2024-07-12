// .at() - useful for arrays and strings

const arr = [100, 200, 300, 400, 50000, 10];

arr.at(-2); // 50000

// instead of having to do
arr[arr.length - 2];

// top level await

// Top-level await allows you to use the await keyword outside of async functions, directly in the main body of a module. This can be particularly useful for initializing your app, loading configurations, or fetching initial data without wrapping the code in an async function.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Top-Level Await Example</title>
//     <script type="module" src="main.js"></script>
// </head>
// <body>
//     <h1>Top-Level Await Example</h1>
//     <div id="data"></div>
// </body>
// </html>

// main.js
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

try {
  // Top-level await
  const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  document.getElementById('data').textContent = JSON.stringify(data, null, 2);
} catch (error) {
  console.error('Failed to fetch data:', error);
  document.getElementById('data').textContent = 'Failed to fetch data';
}
