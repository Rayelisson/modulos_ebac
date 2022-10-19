$(document).ready(function() {
    $('#carosel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle('active');
    });

    $('#cpf').mask('000.000.000-00', {reverse: true});

    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000-000');
    
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            cep: {
                required:true
            },
            endereço: {
                required:true
            },
            cep: {
                required:true
            },
        },
        messages: {
            nome: 'Insira seu Nome Complete',
            email: 'Insira seu E-mail',
            telefone: 'Insira seu Telefone',
            cpf: 'Insira seu CPF',
            endereço: 'Insira seu Endereço',
            cep: 'Insira seu CEP',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }

    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})