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

            // Simulación de envío
            formStatus.textContent = 'Enviando...';
            formStatus.style.color = 'blue';

            setTimeout(() => {
                // Limpiar el formulario
                contactForm.reset();
                
                // Mostrar mensaje de éxito
                formStatus.textContent = '¡Gracias por tu mensaje! Te contactaremos pronto.';
                formStatus.style.color = 'green';

                // Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);

            }, 1500); // Simular un retraso de red de 1.5 segundos
        });
    }

});
