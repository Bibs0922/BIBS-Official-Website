document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = "Thanks for your submission!";
                status.style.color = 'green';
                form.reset();
            } else {
                status.textContent = "Oops! There was a problem submitting your form.";
                status.style.color = 'red';
            }
        } catch (error) {
            status.textContent = "Oops! There was a problem submitting your form.";
            status.style.color = 'red';
        }
    }

    form.addEventListener("submit", handleSubmit);
});