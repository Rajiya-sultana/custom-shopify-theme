document.addEventListener('DOMContentLoaded', () => {
  // Select all product cards
  const productCards = document.querySelectorAll('.card__media');

  productCards.forEach(card => {
    const cartConcern = card.querySelector('.cart-concern');
    const mainImage = card.querySelector('img:first-child');

    if (cartConcern) {
      // Show buttons on hover
      card.addEventListener('mouseover', () => {
        cartConcern.classList.remove('hidden');
        if (mainImage) mainImage.style.opacity = '0.7'; // Optional image fade
      });

      // Hide buttons when not hovering
      card.addEventListener('mouseout', () => {
        cartConcern.classList.add('hidden');
        if (mainImage) mainImage.style.opacity = '1';
      });
    }
  });
});