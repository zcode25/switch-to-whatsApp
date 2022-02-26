const inputNoHp = document.querySelector('input[name=noHp]');
const info = document.getElementById('info');
const api = 'https://api.whatsapp.com/send?phone=';

info.style.display = 'none';

function normalisasiNoHP(noHp) {
    noHp = String(noHp).trim();
    if (noHp.startsWith('+62')) {
        noHp = '62' + noHp.slice(3);
    } else if(noHp.startsWith('0')) {
        noHp = '62' + noHp.slice(1);
    }
    return noHp.replace(/[- .]/g, '');
}

inputNoHp.addEventListener('input', function() {
    const link = document.getElementById('link');
    const noHp = inputNoHp.value;
    const normalisaiNoHp = normalisasiNoHP(noHp);
    link.style.fontSize = '12px';
    link.classList.add('btn');
    link.classList.add('btn-success');
    link.classList.add('btn-sm');
    info.style.display = 'block';
    link.innerHTML = api+normalisaiNoHp;
    link.setAttribute('href', api+normalisaiNoHp);
}) ;

