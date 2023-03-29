$(document).ready(function(){
    $('#regForm').submit(function(e){
        e.preventDefault();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var address = $("#address").val();
        var contact = $("#contact").val();
        var username = $("#username").val();
        var email = $("#email").val();
        var pass = $("#pass").val();
        var conpass = $("#conpass").val();

        var formData = {
            "fname": fname,
            "lname": lname,
            "address": address,
            "contact": contact,
            "username": username,
            "email": email,
            "pass": pass,
        };
        if(pass == conpass){
            $.ajax({
                url: "/createUser",
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify(formData),
                success: function(response) {
                    alert(response)
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                    console.log(formData)
                }
            });
        }else{
            Swal.fire(
                'Password dont match!',
                'You clicked the button!',
                'warning'
            )
        }
        
    });
});