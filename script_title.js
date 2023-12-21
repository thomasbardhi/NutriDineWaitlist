document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the feature boxes
    const featureBoxes = document.querySelectorAll('.feature');
    // Add hover event listeners to each feature box
    featureBoxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)'; // Scale up the box
            box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)'; // Increase the shadow
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)'; // Scale back to normal
            box.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; // Restore the shadow
        });
    });

    // Get the join button
    const joinButton = document.querySelector('.button');
    // Add hover event listener to the join button
    joinButton.addEventListener('mouseenter', () => {
        joinButton.style.boxShadow = '0 0 0 4px #bed1ac'; // Add a glowing border
    });
    joinButton.addEventListener('mouseleave', () => {
        joinButton.style.boxShadow = 'none'; // Remove the glowing border
    });
});