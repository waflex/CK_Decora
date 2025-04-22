document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Función para mostrar mensajes al usuario
    function showMessage(message, isError = false) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`;
        alertDiv.role = 'alert';
        alertDiv.textContent = message;
        form.insertAdjacentElement('afterend', alertDiv);
        
        // Remover el mensaje después de 5 segundos
        setTimeout(() => alertDiv.remove(), 5000);
    }
    
    // Validación del formulario
    function validateForm() {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showMessage('Por favor, complete todos los campos.', true);
            return false;
        }
        
        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Por favor, ingrese un email válido.', true);
            return false;
        }
        
        return true;
    }
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Deshabilitar el botón durante el envío
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Enviando...
        `;
        
        try {
            // Crear los datos del formulario
            const formData = new FormData(form);
            
            // Realizar el envío mediante POST
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                form.reset();
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            showMessage('Lo sentimos, hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.', true);
        } finally {
            // Restablecer el botón
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensaje';
        }
    });
});