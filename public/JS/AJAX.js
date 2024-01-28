// $(document).ready(function() {
//     $('#myForm').submit(function(e) {
//         e.preventDefault(); // Prevent default form submission
//         if (!validateForm(true)) {
//             return; // Stop execution if form validation fails
//         }
//         var formData = $(this).serialize(); // Serialize form data into a query string or JSON object
      
//         // Send an Ajax POST request to the server-side script
//         $.ajax({
//             url: '/save', // Replace with your server-side endpoint
//             type: 'POST',
//             data: formData,
//             success: function(response) {
//                 // Handle the success response
//                 console.log(response);
//             },
//             error: function(error) {
//                 // Handle the error response
//                 console.log(error);
//             }
//         });
//     });
// });

$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        if (!validateForm(true)) {
            return; // Stop execution if form validation fails
        }
        var formData = $(this).serialize(); // Serialize form data into a query string or JSON object
      
        // Send an Ajax POST request to the server-side script
        $.ajax({
            url: '/save', // Replace with your server-side endpoint
            type: 'POST',
            data: formData,
            success: function(response) {
                // Handle the success response
                console.log(response);
                if (response === 'Username already exists') {
                    // Display an alert if the username already exists
                    alert('Username already exists. Please choose a different username.');
                } else {
                    // Display a success message if the data was saved successfully
                    alert('Data saved successfully. Inserted ID: ' + response);
                }
            },
            error: function(error) {
                // Handle the error response
                console.log(error);
                alert('Error saving data. Please try again later.');
            }
        });
    });
});
