const express = require('express');
const path = require('path');
const router = express.Router();
const connection = require(path.join(__dirname, 'connection.js'));

// const getForm = (req, res) => {
//     const { username, lastname, gender } = req.body; // Assuming the form fields have the names "username" and "gender"
  
//     // Insert the form data into the database
//     const sql = 'INSERT INTO user (username, lastname, gender) VALUES (?, ?, ?)'; // Replace "your_table_name" with your actual table name
//     const values = [username, lastname ,gender];
    
//     connection.query(sql, values, (error, result) => {
//         if (error) {
//           console.error('Error saving data:', error);
//           res.send('Error saving data');
//         } else {
//           const insertedId = result.insertId; // Access the auto-incremented ID value
//           console.log('Data saved successfully. Inserted ID:', insertedId);
//           res.send('Data saved successfully. Inserted ID: ' + insertedId);
//         }
//     });
// };

// const getForm = (req, res) => {
//     const { username, lastname, gender } = req.body; // Assuming the form fields have the names "username", "lastname", and "gender"

//   // Check if the username already exists in the database
//     const checkUsernameSql = 'SELECT * FROM user WHERE username = ?';
//     connection.query(checkUsernameSql, [username], (error, results) => {
//         if (error) {
//             console.error('Error checking username:', error);
//             res.send('Error checking username');
//         } else {
//             if (results.length > 0) {
//               // Username already exists
//                 console.log('Username already exists:', username);
//                 res.send('Username already exists');
//             } else {
//               // Insert the form data into the database
//                 const insertSql = 'INSERT INTO user (username, lastname, gender) VALUES (?, ?, ?)';
//                 const values = [username, lastname ,gender];
            
//                 connection.query(insertSql, values, (error, result) => {
//                     if (error) {
//                         console.error('Error saving data:', error);
//                         res.send('Error saving data');
//                     } else {
//                         const insertedId = result.insertId; // Access the auto-incremented ID value
//                         console.log('Data saved successfully. Inserted ID:', insertedId);
//                         res.send('Data saved successfully. Inserted ID: ' + insertedId);
//                     }
//                 });
//             }
//         }
//     });
// };

const getForm = (req, res) => {
    const { username, gender } = req.body; // Assuming the form fields have the names "username" and "gender"
  
    // Check if the username already exists in the database
    const checkUsernameSql = 'SELECT * FROM user WHERE username = ?';
    connection.query(checkUsernameSql, [username], (error, results) => {
        if (error) {
            console.error('Error checking username:', error);
            res.send('Error checking username');
        } else {
            if (results.length > 0) {
                // Username already exists
                console.log('Username already exists:', username);
                res.send('Username already exists');
            } else {
                // Insert the form data into the database
                let insertSql;
                let values;
                
                if (req.body.lastname) {
                    // If lastname is provided in the form data
                    insertSql = 'INSERT INTO user (username, lastname, gender) VALUES (?, ?, ?)';
                    values = [username, req.body.lastname, gender];
                } else {
                    // If lastname is not provided in the form data
                    insertSql = 'INSERT INTO user (username, gender) VALUES (?, ?)';
                    values = [username, gender];
                }
                
                connection.query(insertSql, values, (error, result) => {
                    if (error) {
                        console.error('Error saving data:', error);
                        res.send('Error saving data');
                    } else {
                        const insertedId = result.insertId; // Access the auto-incremented ID value
                        console.log('Data saved successfully. Inserted ID:', insertedId);
                        res.send('Data saved successfully. Inserted ID: ' + insertedId);
                    }
                });
            }
        }
    });
};


router.post('/', getForm);

module.exports = router;