function actualizarComentarios() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        // Selecciona los primeros 4 comentarios
        const comentarios = json.slice(0, 4);

        // Obtiene todos los elementos con la clase "comentario"
        const comentarioElements = document.querySelectorAll('.comentario');

        // Actualiza cada div con los datos de los comentarios correspondientes
        comentarioElements.forEach((element, index) => {
          element.querySelector('h3').textContent = comentarios[index].email;
          element.querySelector('p').textContent = comentarios[index].body;
        });
      })
      .catch(error => {
        console.error('Error al obtener los comentarios:', error);
      });
  }

  // Llama a la función automáticamente cuando se carga la página
  window.addEventListener('load', actualizarComentarios);