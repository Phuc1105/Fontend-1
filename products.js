// const express = require('express');
// const router = express.Router();
// const db = require('./models/db'); 

// router.get('/products', (req, res) => {
//   db.query('SELECT * FROM products', (err, results) => {
//     if (err) {
//       console.error('Error retrieving customers:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.json(results);
//   });
// });

// router.post('/products', (req, res) => {
//   const { product_name, price, status, caterory } = req.body;
//   db.query('INSERT INTO products (product_name, price, status, caterory) VALUES (?, ?, ?, ?)',
//     [product_name, price, status, caterory],
//     (err, result) => {
//       if (err) {
//         console.error('Error adding customer:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       res.status(201).send('Customer added successfully');
//     });
// });
// router.put('/product/:id', (req, res) => {
//     const { id } = req.params;
//     const { product_name, price, status, caterory } = req.body;
//     db.query(
//       'UPDATE products SET product_name = ?, price = ?, status = ?, caterory = ? WHERE id = ?',
//       [product_name, price, status, caterory, id],
//       (err, result) => {
//         if (err) {
//           console.error('Error updating user:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send('User updated successfully');
//       }
//     );
//   });
  
//   router.delete('/product/:id', (req, res) => {
//     const { id } = req.params;
//     db.query('DELETE FROM products WHERE id = ?', id, (err, result) => {
//       if (err) {
//         console.error('Error deleting user:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       res.status(200).send('User deleted successfully');
//     });
//   });
  
// module.exports = router;
