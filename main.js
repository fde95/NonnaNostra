$(document).ready(function(){
    $('#cel').mask('(00) 00000-0000', {
    });

    $('form').validate({
        rules: {
            name:{
                required: true
            },
            tel:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            interesse:{
                required: false
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            name: 'Por favor, insira o seu nome',
            email: 'Insira seu e-mail',
            tel: 'Insira número de celular para contato',
            mensagem: 'Escreva mais detalhes sobre sua reserva (Ex.: Quantidade de pessoas, alergias)'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos não preenchidos`)
            }
        }
    });

})