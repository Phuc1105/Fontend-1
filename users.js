const express = require('express');
const router = express.Router();
const db = require('./db'); 

router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error retrieving customers:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

router.post('/users', (req, res) => {
  const { username, email, password, status, role } = req.body;
  db.query('INSERT INTO users (username, email, password, status, role) VALUES (?, ?, ?, ?, ?)',
    [username, email, password, status, role],
    (err, result) => {
      if (err) {
        console.error('Error adding customer:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send('Customer added successfully');
    });
});
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password, status, role } = req.body;
    db.query(
      'UPDATE users SET username = ?, email = ?, password = ?, status = ?, role = ? WHERE id = ?',
      [username, email, password, status, role, id],
      (err, result) => {
        if (err) {
          console.error('Error updating user:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        res.status(200).send('User updated successfully');
      }
    );
  });
  
  router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(200).send('User deleted successfully');
    });
  });
  
module.exports = router;
