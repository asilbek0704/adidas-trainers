// Movement Animation to happen

const container = document.querySelectorAll('.container');



// Moving Animation Event

for (let i = 0; i < container.length; i++) {
    let currentCard = container[i].querySelector('.card');
    let currentCardTitle = container[i].querySelector('.title');
    let currentCardSneacker = container[i].querySelector('.sneaker img');
    let currentCardText = container[i].querySelector('.info p');
    let currentCardSizes = container[i].querySelector('.sizes');
    let currentCardPurchase = container[i].querySelector('.purchase');


    // Animate In
    container[i].addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 70;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 70;

        currentCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        currentCard.style.transition = `none`;

        currentCardTitle.style.transform = `translateZ(150px)`;
        currentCardSneacker.style.transform = `translateZ(180px) rotateZ(-45deg)`;
        currentCardText.style.transform = `translateZ(120px)`;
        currentCardSizes.style.transform = `translateZ(100px)`;
        currentCardPurchase.style.transform = `translateZ(75px)`;
    })



    // Animate Out
    container[i].addEventListener('mouseleave', e => {
        currentCard.style.transition = `all 0.5s ease`;
        currentCard.style.transform = `rotateY(0) rotateX(0)`;

        currentCardTitle.style.transform = `translateZ(0px)`;
        currentCardSneacker.style.transform = `translateZ(0px) rotateZ(0)`;
        currentCardText.style.transform = `translateZ(0px)`;
        currentCardSizes.style.transform = `translateZ(0px)`;
        currentCardPurchase.style.transform = `translateZ(0px)`;
    })
}
