// Import express
import express from 'express';

// Import page
import {Home, Contact, About} from "../controllers/page.js";

// Init express router
const router = express.Router();

// Home route
router.get('/', Home);

// Contact route
router.get('/contact', Contact);

// About route
router.get('/about', About);

// // Home route
// router.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Contact route
// router.get('/contact', (req, res) => {
//     res.send('This is contact page!');
// });

// // About route
// router.get('/about', (req, res) => {
//     res.send('This is about page using express router!');
// });

// export default router
export default router;