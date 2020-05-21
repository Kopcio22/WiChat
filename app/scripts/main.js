// Formularz logowania i rejestracji
const formSwitchMsg = $('.form__switch a');

formSwitchMsg.on('click', function(e) {
    e.preventDefault();
    $('form').toggleClass('hidden');
});