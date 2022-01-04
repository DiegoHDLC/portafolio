// Wait for the DOM to be ready
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#contact-form").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 100,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            msg: {
                required: true,
                maxlength: 5000,
                minlength: 2
            },
        },
        // Specify validation error messages
        messages: {
            name: {
                required: "Introduce un nombre",
                maxlength: "La longitud es mayor a 100 caracteres",
                minlength: "La longitud minima es de 2 caracteres"
            },
            email: {
                required: "Introduce un email",
                email: "el email no es vÃ¡lido",
                maxlength: "La longitud es mayor a 100 caracteres"
            },
            msg: {
                required: "Introduce un mensaje",
                maxlength: "La longitud es mayor a 5000 caracteres",
                minlength: "La longitud minima es de 2 caracteres"
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});