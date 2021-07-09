$().ready(function(){
    console.log('jjjj')
    $("#signupform").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 1
            },
            username: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            timezone: {
                required: true,
            },
            password: {
                required: true,
                minlength: 4
            },
            box: {
                required: true
            },
            
        },
        messages: {
            firstname: {
                required: "Please enter your first name"
            },
            lastname: {
                required: "Please enter your last name"
            },
            username: {
                required: "Please enter your username"
            },
            email: {
                required: "Please enter your email address"
            },
            timezone: {
                required: "Enter timezone"
            },
            password: {
                required: "Please enter your password"
            },
            box: {
                required: "Please click the terms and conditions"
            }
        },
        submitHandler: (signupform, e) => {
            e.preventDefault()
            $.ajax({
                url: "",
                data: $("#signupform").serialize(),
                method: "post",
                
                success: function (response) {
                console.log("hhh")

                    if (response == 'true') {
                        document.getElementById("signupform").reset();
                        var theDiv = document.getElementById("success");
                        var content = document.createTextNode("Success");
                        theDiv.appendChild(content);
                    }
                    if (response == 'false1') {
                        $("#return-error").html(" Username already taken")
                    }
                    if (response == 'false2') {
                        $("#return-error").html(" Email already taken")
                    }
                    
                },

            })
            

        }
    })
}
)
$().ready(function(){
    $("#signupform2").validate({
        rules: {
            firstname2: {
                required: true,
                minlength: 3
            },
            lastname2: {
                required: true,
                minlength: 1
            },
            username2: {
                required: true,
                minlength: 4
            },
            email2: {
                required: true,
                email: true
            },
            timezone2: {
                required: true,
            },
            password2: {
                required: true,
                minlength: 4
            },
            box2: {
                required: true
            },
            
        },
        messages: {
            firstname2: {
                required: "Please enter your first name"
            },
            lastname2: {
                required: "Please enter your last name"
            },
            username2: {
                required: "Please enter your username"
            },
            email22: {
                required: "Please enter your email address"
            },
            timezone: {
                required: "Enter timezone"
            },
            password2: {
                required: "Please enter your password"
            },
            box2: {
                required: "Please click the terms and conditions"
            }
        },
        submitHandler: (signupform, e) => {
            e.preventDefault()
            $.ajax({
                url: "talent-signup/",
                data: $("#signupform2").serialize(),
                method: "post",
                
                success: function (response) {
                    console.log('talent')


                    if (response == 'true') {
                        document.getElementById("signupform2").reset();
                        var theDiv = document.getElementById("success2");
                        var content = document.createTextNode("Success");
                        theDiv.appendChild(content);
                    }
                    if (response == 'false1') {
                        $("#return-error2").html(" Username already taken")
                    }
                    if (response == 'false2') {
                        $("#return-error2").html(" Email already taken")
                    }
                    
                },

            })
            

        }
    })
}
)


function fan(){
    $('#bttn1').css('background-color', 'black')
    $('#bttn2').css('background-color', '#6ae98d')
    $("#form2").hide();
    $("#form1").show();
}

function talent(){
    $('#bttn2').css('background-color','black')
    $('#bttn1').css('background-color', '#6ae98d')

    $("#form1").hide();
    $("#form2").show();
    
}