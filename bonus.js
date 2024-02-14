const imageLinks = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const PrevButton = document.getElementById('PrevButton');
const NextButton = document.getElementById('NextButton');

function showImage(index) {
    imageDisplay.src = imageLinks[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageLinks.length;
    showImage(currentIndex);
});

// Initial image display
showImage(currentIndex);
