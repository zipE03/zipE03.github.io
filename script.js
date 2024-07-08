/*Codigo contacto*/ 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '+542945526044'; // Reemplaza con tu número de WhatsApp

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Nombre:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;

    window.open(url, '_blank');
});