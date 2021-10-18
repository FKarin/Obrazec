fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Order submitted!',
        text: 'We will review your order and contact you on your email in the next 48 hours!',
    }).then((result) => {
            document.getElementById('fullForm').submit();
    });
});