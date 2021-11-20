var usuario = prompt("piedra, papel o tijera");
var cpu = Math.floor(Math.random()*(4-1)+1);
var rescpu;

switch (usuario) {
    case 'piedra':
        usuario=1
        break;
    case 'papel':
        usuario=2
        break;
    case 'tijera':
        usuario=3
        break;
}

switch (cpu) {
    case 1:
        rescpu = 'piedra'
        break;
    case 2:
        rescpu = 'papel'
        break;
    case 3:
        rescpu = 'tijera'
        break;
}

if (usuario !==1 && usuario !==2 && usuario !==3) {
    alert('Introduce un valor correcto');
} else {
    if (usuario == cpu) 
    alert("Empate");
    else{
        if ((usuario == 1 && cpu==3) || (usuario == 2 && cpu ==1) || (usuario ==3 && cpu==2)){
            alert('Has ganado!!!!!!' + ' la Maquina saco ' + rescpu);}
        else 
            alert('Has perdido :( ' + ' la Maquina saco ' + rescpu);
        }
    }

location.reload();
    
