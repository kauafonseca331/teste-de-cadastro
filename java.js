document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.textContent = '';
    successMessage.textContent = '';

    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Todos os campos são obrigatórios.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não correspondem.';
        return;
    }

    successMessage.textContent = 'Cadastro realizado com sucesso!';
    
    // Limpar campos
    document.getElementById('signupForm').reset();
});
