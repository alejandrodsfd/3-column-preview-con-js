const cards = document.querySelectorAll('.card');

cards.forEach((card) =>{
    card.addEventListener('click', addandRemClass)
})

function addandRemClass(event){
    const cardEvent = event.currentTarget;
    const isActive = cardEvent.classList.contains('active');
    cards.forEach((card) =>{
        card.classList.remove('active');
    })
    
    if (!isActive) {
        cardEvent.classList.add('active');
    }
}