const calculate = document.querySelector('.calculate')
const result = document.querySelector('#result')

calculateaq.addEventListener('click', (e)=>{
    if (!e.target.classList.contains('btn')) return; // Если элементте btn класс жок болсо функцияны токтот
    const value = e.target.innerText  
    switch(value){
        case 'AC':
            result.innerText = '';
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed(1);
            break;
        default:
            result.innerText += value;
    }
})

// toFixed() болчок сандын точкадан кийин канча санды корсото турганды билдирет
// contains определенный класс бар экенин текшерет
// eval эсепти чыгарып жообун корсотот