
const form = document.getElementById('form');
let a = document.getElementById('numero-a');
let b = document.getElementById('numero-b');
const containerMensagem = document.querySelector('.message');
const containerMensagemErro = document.querySelector('.message-error');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const mensagemPosi = `O número ${b.value} este numero e maior ${a.value} parabens `;
    const mensagemNegat = `O número ${b.value} não é maior que ${a.value}, tente de novo.`;

    if (b.value > a.value) {
        containerMensagem.innerHTML = mensagemPosi;
        containerMensagem.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        a.value = '';
        b.value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemNegat;
        containerMensagemErro.style.display = 'block';
        containerMensagem.style.display = 'none';

        a.value = '';
        b.value = '';
    }
})