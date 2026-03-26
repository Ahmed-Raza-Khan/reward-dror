const form = document.querySelector('form');
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});