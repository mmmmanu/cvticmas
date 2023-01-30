
document.getElementById('dpboton');
document.getElementById('hideText');
document.getElementById('dpboton').addEventListener('onclick',mostrardatospersonales);

function mostrardatospersonales()
{ 
   hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        dpboton.innerHTML = 'Ocultar datos personales';
    }
    else {dpboton.innerHTML = 'Datos Personales';}
}

document.getElementById('fboton');
document.getElementById('ftext');
document.getElementById('fboton').addEventListener('onclick',mostrarformacionprofesional);

function mostrarformacionprofesional()
{
   hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        dpboton.innerHTML = 'Ocultar formación profesional';
    }
    else {dpboton.innerHTML = 'Formación profesional';}
}
