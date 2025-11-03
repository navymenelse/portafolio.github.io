document.addEventListener('DOMContentLoaded', function() {

    // 1. Desplazamiento suave para el botón CTA
    const ctaButton = document.getElementById('cta-button');
    const contactSection = document.getElementById('contact');

    if (ctaButton && contactSection) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // 2. Manejo del envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío real del formulario

            const formData = new FormData(contactForm);
            const formAction = "https://formspree.io/f/mqagvbna"; // <-- PEGA TU URL DE FORMSPREE AQUÍ

            formStatus.textContent = 'Enviando...';
            formStatus.style.color = 'blue';

            fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.textContent = '¡Gracias por tu mensaje! Te contactaremos pronto.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                } else {
                    formStatus.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
                    formStatus.style.color = 'red';
                }
            }).catch(error => {
                formStatus.textContent = 'Hubo un error de red. Por favor, revisa tu conexión.';
                formStatus.style.color = 'red';
            }).finally(() => {
                // Opcional: Ocultar el mensaje después de 5 segundos
                setTimeout(() => { formStatus.textContent = ''; }, 5000);
            });
        });
    }

    // 3. Funcionalidad del menú de hamburguesa
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu_visible');

            // Accesibilidad: Cambiar el aria-label dependiendo si el menú está visible o no
            const isVisible = navMenu.classList.contains('nav-menu_visible');
            navToggle.setAttribute('aria-label', isVisible ? 'Cerrar menú' : 'Abrir menú');
        });
    }
});
