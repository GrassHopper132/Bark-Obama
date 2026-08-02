export function setupInteractions() {
    const dogBtn = document.getElementById('dogButton');
    
    dogBtn.addEventListener('click', function() {
        alert('You petted Bark Obama!');
        dogBtn.textContent = "Petted!";
    });
}
