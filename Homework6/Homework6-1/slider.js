let carousels = document.getElementsByClassName('nba-carousel');

[].forEach.call(carousels, function (c) {
    let next = c.getElementsByClassName('next')[0];
    let prev = c.getElementsByClassName('prev')[0];
    let ballsContainer = c.getElementsByClassName('balls')[0];
    let inner = c.getElementsByClassName('inner')[0];
    let imgs = inner.getElementsByTagName('img');
    let currentNbaIndex = 0;
    let width = 640;
    let balls = [];

    for (let i = 0; i < imgs.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        ballsContainer.appendChild(b);
        balls.push(b);

        b.addEventListener('click', function () {
            currentNbaIndex = i;
            switchImg();
        });
    }

    function switchImg () {
        inner.style.left = -width * currentNbaIndex + 'px';
        
        balls.forEach(function (b, i) {
            if (i === currentNbaIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    next.addEventListener('click', function () {
        currentNbaIndex++;

        if (currentNbaIndex >= imgs.length) {
            currentNbaIndex = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function () {
        currentNbaIndex--;

        if (currentNbaIndex < 0) {
            currentNbaIndex = imgs.length - 1;
        }

        switchImg();
    });

    switchImg();
});