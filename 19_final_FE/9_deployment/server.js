const app = require('http').createServer((req, res) =>
  res.sendDate('oh hi there')
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// console.log(process.env);

// environment variables
//
