document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artistCards = document.querySelectorAll('.artist-card');

    // Filter Functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            const selectedGenre = button.getAttribute('data-genre');

            // Show or hide artist cards based on selected genre
            artistCards.forEach(card => {
                const cardGenre = card.getAttribute('data-genre');
                if (selectedGenre === 'all' || selectedGenre === cardGenre) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
