// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('contactForm').reset();
    
    // Feedback visual
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check2"></i> Campos Limpos!';
    btn.style.backgroundColor = '#eddca4';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
}

// Validação e envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Simulação de envio
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="bi bi-hourglass"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simula delay de envio
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

// Função auxiliar para validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Adicionar ano atual no footer (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});