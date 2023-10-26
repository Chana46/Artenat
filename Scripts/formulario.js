function validarFormulario(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const comments = document.getElementById("comments");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const commentsError = document.getElementById("commentsError");

    // Validación de nombre (no vacío y al menos 3 caracteres)
    if (name.value.trim() === "") {
      nameError.textContent = "El nombre es obligatorio";
      nameError.style.color = "red";
      event.preventDefault();
    } else if (name.value.length < 3) {
      nameError.textContent = "El nombre debe tener al menos 3 caracteres";
      nameError.style.color = "red";
      event.preventDefault();
    } else {
      nameError.textContent = "";
    }

    // Validación de correo electrónico válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.textContent = "El correo electrónico no es válido";
      emailError.style.color = "red";
      event.preventDefault();
    
    } else if(email.value.trim() === ""){
       emailErrorr.textContent = "El Correo es obligatorio";
       emailError.style.color = "red";
    } else {
      emailError.textContent = "";
    }

    // Validación de asunto (menos de 50 caracteres)
    if (subject.value.length > 50) {
      subjectError.textContent = "El asunto no debe tener más de 50 caracteres";
      subjectError.style.color = "red";
      event.preventDefault();
    } else if(subject.value.trim() === ""){
        subjectError.textContent = "El asunto es obligatorio";
        subjectError.style.color = "red";
    } else {
      subjectError.textContent = "";
    }

    // Validación de límite de caracteres de comentarios (500)
    if (comments.value.length > 500) {
      commentsError.textContent = "Los comentarios no deben superar los 500 caracteres";
      commentsError.style.color = "red";
      event.preventDefault();
    } else if(comments.value.trim() === ""){
       commentsError.textContent = "El comentario es obligatorio";
       commentsError.style.color = "red";
    } else {
      commentsError.textContent = "";
    }
  }