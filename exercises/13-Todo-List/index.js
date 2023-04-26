// Your code here Dina 

// 1. Tengo que recuperar todos los iconos de 'basura'.
// 2. A cada span de basura, le tengo que asociar un evento 
// click para que al hacer click elimine el item

document.querySelectorAll('span').forEach( x => {
    x.addEventListener('click', function (event) {
       // Borra a mi padre <li>
       event.currentTarget.parentElement.remove()
    });
});

//crear un elemnto a la lista con la tecla enter

document.querySelector('input').addEventListener('keyup', function(event) {
    //vamos a ver si el usuario le ha dado a la tecla Enter 
   // console.log(event.code)
   if(event.code=='Enter'){
    const task = document.querySelector('#addToDo').value;
    const item = document.createElement('li');
    item.innerHTML= `<span><i class="fa fa-trash"></i></span> ${task}`;
    document.querySelector('ul').appendChild(item);

    //poder eliminar la nueva tasca 
    item.querySelector('span').addEventListener('click', function (event) {
        event.currentTarget.parentElement.remove();
    })

    //limpiar el imput
    document.querySelector('#addToDo').value = '';

   }
});