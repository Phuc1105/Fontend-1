const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/deliveries', (req, res) => {
  db.query('SELECT * FROM deliveries', (err, results) => {
    if (err) {
      console.error('Error retrieving deliveries:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

router.post('/deliveries', (req, res) => {
  const { customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings } = req.body;
  db.query(
    'INSERT INTO deliveries (customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings) VALUES (?, ?, ?, ?, ?, ?)',
    [customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings],
    (err, result) => {
      if (err) {
        console.error('Error adding delivery:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send('Delivery added successfully');
    }
  );
});

router.put('/deliveries/:id', (req, res) => {
  const { id } = req.params;
  const { customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings } = req.body;
  db.query(
    'UPDATE deliveries SET customer_name = ?, customer_phone = ?, milkTea_flavor = ?, sugar = ?, ice = ?, toppings = ? WHERE id = ?',
    [customer_name, customer_phone, milkTea_flavor, sugar, ice, toppings, id],
    (err, result) => {
      if (err) {
        console.error('Error updating delivery:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(200).send('Delivery updated successfully');
    }
  );
});

router.delete('/deliveries/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM deliveries WHERE id = ?', id, (err, result) => {
    if (err) {
      console.error('Error deleting delivery:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(200).send('Delivery deleted successfully');
  });
});
router.get('/deliveries/search', (req, res) => {
    const searchTerm = req.query.searchTerm;
    db.query(
      'SELECT * FROM deliveries WHERE customer_name LIKE ?',
      [`%${searchTerm}%`],
      (err, results) => {
        if (err) {
          console.error('Error searching deliveries:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        res.json(results);
      }
    );
  });
  
module.exports = router;
