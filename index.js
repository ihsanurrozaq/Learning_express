// import express
import express from "express";

// Import router
import Router from "./routes/routes.js";

// init express
const app = express();

// use router
app.use(Router);

// // basic route
// // Home Route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // About Route
// app.get('/about', (req, res) => {
//     res.send('This is about page!');
// });

// // Contact Route
// app.get('/contact', (req, res) => {
//     res.send('This is contact page!');
// });

// Listen on port
app.listen(5000, () => console.log('Server Running at http://localhost:5000'));