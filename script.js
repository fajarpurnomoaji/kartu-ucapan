document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const confettiContainer = document.querySelector('.confetti-container');

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');

        // Jika kartu sudah terbuka, aktifkan confetti
        if (card.classList.contains('flipped')) {
            setTimeout(() => { // Memberi sedikit jeda agar animasi flip terlihat dulu
                createConfetti();
            }, 500); // Sesuaikan jeda ini jika perlu
        }
    });

    function createConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        const numConfetti = 50; // Jumlah confetti yang akan dihasilkan

        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durasi animasi antara 3-5 detik
            confetti.style.animationDelay = `${Math.random() * 0.5}s`; // Penundaan agar tidak semua jatuh bersamaan
            confetti.style.setProperty('--confetti-color', colors[Math.floor(Math.random() * colors.length)]);
            confettiContainer.appendChild(confetti);

            // Hapus confetti setelah animasi selesai untuk performa yang lebih baik
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});