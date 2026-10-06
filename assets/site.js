// ===== TNS Tax Consulting — Shared Behavior =====

// ----- Mobile menu toggle -----
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const menuIcon = document.getElementById('menuIcon');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('hidden') === false;
  if (isOpen) {
    drawer.classList.add('hidden');
    if (menuIcon) menuIcon.textContent = 'menu';
  } else {
    drawer.classList.remove('hidden');
    drawer.classList.add('fade-in');
    if (menuIcon) menuIcon.textContent = 'close';
  }
}

// ----- Consultation modal -----
function openConsultationModal(defaultService) {
  const modal = document.getElementById('consultationModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  modal.classList.add('fade-in');
  document.body.style.overflow = 'hidden';

  if (defaultService) {
    const select = document.getElementById('modalServiceSelect');
    if (select) select.value = defaultService;
  }

  // Close mobile menu if it was open
  const drawer = document.getElementById('mobileDrawer');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
    const menuIcon = document.getElementById('menuIcon');
    if (menuIcon) menuIcon.textContent = 'menu';
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  // Reset to form view (hide success view if it was shown)
  const formView = document.getElementById('modalFormView');
  const successView = document.getElementById('modalSuccessView');
  if (formView) formView.classList.remove('hidden');
  if (successView) successView.classList.add('hidden');
}

function handleConsultationSubmit(event) {
  event.preventDefault();
  const submitBtn = document.getElementById('modalSubmitBtn');
  const submitLabel = document.getElementById('modalSubmitLabel');
  if (submitBtn) submitBtn.disabled = true;
  if (submitLabel) submitLabel.textContent = 'Mengirim Permohonan...';

  setTimeout(() => {
    const formView = document.getElementById('modalFormView');
    const successView = document.getElementById('modalSuccessView');
    const fullName = document.getElementById('modalFullName');
    const successName = document.getElementById('successFullName');
    if (successName && fullName) successName.textContent = fullName.value || 'Bapak/Ibu';
    if (formView) formView.classList.add('hidden');
    if (successView) successView.classList.remove('hidden');
    if (submitBtn) submitBtn.disabled = false;
    if (submitLabel) submitLabel.textContent = 'Kirimkan Permohonan';
  }, 800);
}

function handleWhatsAppDirect() {
  const fullName = document.getElementById('modalFullName');
  const companyName = document.getElementById('modalCompanyName');
  const serviceSelect = document.getElementById('modalServiceSelect');

  const name = fullName && fullName.value ? fullName.value : 'Pimpinan Korporasi';
  const company = companyName && companyName.value ? companyName.value : 'Perusahaan';
  const service = serviceSelect && serviceSelect.selectedOptions.length
    ? serviceSelect.selectedOptions[0].text
    : 'perpajakan korporasi';

  const text = encodeURIComponent(
    `Halo PT. Terang Nusantara Sentosa, saya ${name} dari ${company}. Kami membutuhkan advis konsultasi terkait ${service}. Mohon informasi jadwal temu/diskusi rahasia.`
  );
  window.open(`https://wa.me/6287817582369?text=${text}`, '_blank');
}

// ----- Contact page form (separate from the modal) -----
function handleContactSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('contactSubmitBtn');
  const label = document.getElementById('contactSubmitLabel');
  if (btn) btn.disabled = true;
  if (label) label.textContent = 'Mengirimkan Permohonan...';

  setTimeout(() => {
    const formView = document.getElementById('contactFormView');
    const successView = document.getElementById('contactSuccessView');
    const fullName = document.getElementById('contactFullName');
    const companyName = document.getElementById('contactCompanyName');
    const successName = document.getElementById('contactSuccessName');
    const successCompany = document.getElementById('contactSuccessCompany');

    if (successName) successName.textContent = (fullName && fullName.value) || 'Bapak/Ibu';
    if (successCompany) successCompany.textContent = (companyName && companyName.value) || 'perusahaan Anda';
    if (formView) formView.classList.add('hidden');
    if (successView) {
      successView.classList.remove('hidden');
      successView.classList.add('fade-in');
    }
    if (btn) btn.disabled = false;
    if (label) label.textContent = 'Kirim Permohonan Konsultasi Strategis';
  }, 850);
}

function resetContactForm() {
  const formView = document.getElementById('contactFormView');
  const successView = document.getElementById('contactSuccessView');
  const form = formView ? formView.querySelector('form') : null;
  if (form) form.reset();
  if (successView) successView.classList.add('hidden');
  if (formView) formView.classList.remove('hidden');
}

function handleContactWhatsApp() {
  const fullName = document.getElementById('contactFullName');
  const companyName = document.getElementById('contactCompanyName');
  const serviceSelect = document.getElementById('contactService');
  const fiscalSummary = document.getElementById('contactFiscalSummary');

  const name = (fullName && fullName.value) || '-';
  const company = (companyName && companyName.value) || '-';
  const service = (serviceSelect && serviceSelect.selectedOptions.length && serviceSelect.value)
    ? serviceSelect.selectedOptions[0].text
    : 'Konsultasi Fiskal';
  const summary = (fiscalSummary && fiscalSummary.value) || 'Permohonan konsultasi rahasia';

  const text = encodeURIComponent(
    `Halo PT. Terang Nusantara Sentosa,\\nNama: ${name}\\nPerusahaan: ${company}\\nLayanan: ${service}\\nKebutuhan: ${summary}`
  );
  window.open(`https://wa.me/6287817582369?text=${text}`, '_blank');
}

// ----- Floating WhatsApp tooltip (desktop hover) -----
function initFloatingWhatsApp() {
  const wrapper = document.getElementById('floatingWa');
  const tooltip = document.getElementById('waTooltip');
  if (!wrapper || !tooltip) return;
  wrapper.addEventListener('mouseenter', () => tooltip.classList.remove('hidden'));
  wrapper.addEventListener('mouseleave', () => tooltip.classList.add('hidden'));
}

document.addEventListener('DOMContentLoaded', () => {
  initFloatingWhatsApp();

  // Close modal on backdrop click
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeConsultationModal();
    });
  }
});
