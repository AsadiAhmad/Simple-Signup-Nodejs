const express = require('express');
const path = require('path');
const router = express.Router();
const connection = require(path.join(__dirname, 'connection.js'));
const getInformation = (req, res) => {
    var userId = req.params.userId;
    var query = 'SELECT * FROM user WHERE id = ?';
    console.log(userId)
    connection.query(query, [userId], function(err, results) {
      if (err) {
        console.error('Error querying MySQL database: ' + err.stack);
        return res.status(500).send('Error querying database');
      }
      
      if (results.length === 0) {
        return res.status(404).send('User not found');
      }
      
      var userInfo = 'ID: ' + results[0].id + ', Username: ' + results[0].username +
                     ', Lastname: ' + results[0].lastname + ', Gender: ' + results[0].gender;
                     
      res.send(userInfo);
    });
};

router.get('/:userId', getInformation);

module.exports = router;
  