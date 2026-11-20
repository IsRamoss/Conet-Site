(() => {
  'use strict';

  // Ano do rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menu hambúrguer
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const toggleMenu = (open) => {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  burger.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

  // Destaque do link ativo (Intersection Observer)
  const links = [...document.querySelectorAll('.nav__link')];
  const sections = links
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) =>
        l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`)
      );
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => observer.observe(s));

  // Formulário de contato (simulado)
  const form = document.getElementById('contact-form');
  const success = document.getElementById('success');

  const rules = {
    nome: (v) => (v.trim().length >= 3 ? '' : 'Informe seu nome completo.'),
    empresa: (v) => (v.trim() ? '' : 'Informe o nome da empresa.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Informe um e-mail válido.'),
    servico: (v) => (v ? '' : 'Selecione um serviço.'),
    mensagem: (v) => (v.trim().length >= 10 ? '' : 'Escreva ao menos 10 caracteres.'),
  };

  const validateField = (input) => {
    const field = input.closest('.field');
    const msg = rules[input.name](input.value);
    field.classList.toggle('invalid', Boolean(msg));
    field.classList.toggle('valid', !msg);
    field.querySelector('.error').textContent = msg;
    input.setAttribute('aria-invalid', String(Boolean(msg)));
    return !msg;
  };

  const inputs = [...form.querySelectorAll('input, select, textarea')];
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      success.hidden = true;
      if (input.closest('.field').classList.contains('invalid')) validateField(input);
    });
    input.addEventListener('change', () => validateField(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = inputs.map(validateField);
    if (results.includes(false)) {
      inputs[results.indexOf(false)].focus();
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    // Simulação de envio (sem back-end)
    setTimeout(() => {
      form.reset();
      inputs.forEach((i) => i.closest('.field').classList.remove('valid', 'invalid'));
      btn.disabled = false;
      btn.textContent = 'Enviar mensagem';
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
})();
