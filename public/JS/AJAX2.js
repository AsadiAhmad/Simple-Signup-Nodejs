function getUserInfo() {
    var userId = $('#userIdInput').val();

    $.ajax({
      url: '/getUserInfo/' + userId,
      type: 'GET',
      success: function(response) {
        $('#userInfo').text(response); // Update the content of the <p> tag
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
} 