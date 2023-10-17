const first : HTMLDivElement = document.querySelector('.first') as HTMLDivElement,
    second : HTMLDivElement = document.querySelector('.second') as HTMLDivElement,
    third : HTMLDivElement = document.querySelector('.third') as HTMLDivElement,
    last : HTMLDivElement = document.querySelector('.bottom') as HTMLDivElement,

    firstImg: HTMLImageElement[] = [ 
        document.querySelector('.presentable-part-one') as HTMLImageElement, 
        document.querySelector('.presentable-part-two') as HTMLImageElement 
    ],
    secondImg: HTMLImageElement[] = [ 
        document.querySelector('.presentable-stage-2-one') as HTMLImageElement, 
        document.querySelector('.presentable-stage-2-two') as HTMLImageElement, 
        document.querySelector('.presentable-stage-2-three') as HTMLImageElement 
    ],
    thirdImg: HTMLImageElement[] = [ 
        document.querySelector('.presentable-stage-3-one') as HTMLImageElement,  
        document.querySelector('.presentable-stage-3-two') as HTMLImageElement, 
        document.querySelector('.presentable-stage-3-three') as HTMLImageElement, 
        document.querySelector('.presentable-stage-3-four') as HTMLImageElement 
    ],
    lastImg : HTMLDivElement = document.querySelector('.presentable-stage-4-main') as HTMLDivElement,
    zoomed: NodeListOf<HTMLImageElement> = document.querySelectorAll('.zoomed');

setTimeout(() => {
    first.style.opacity = '1';
    for (let i = 0; i < firstImg.length; i++){
        firstImg[i].style.transform = 'translate(0px, 0px)';
        firstImg[i].style.opacity = '1';
    }
}, 100);

window.addEventListener('scroll', () => {
    if (window.scrollY < 500){
        first.style.opacity = '1';
        for (let i = 0; i < firstImg.length; i++){
            firstImg[i].style.transform = 'translate(0px, 0px)';
            firstImg[i].style.opacity = '1';
        }
    }
    else{
        first.style.opacity = '0';
        firstImg[0].style.transform = 'translate(-250px, 0px)';
        firstImg[1].style.transform = 'translate(250px, 0px)';
        for (let i = 0; i < firstImg.length; i++){
            firstImg[i].style.opacity = '0';
            firstImg[i].style.transition = 'all .9s ease';
        }
    }

    if (window.scrollY > 501 && window.scrollY < 1500){
        second.style.opacity = '1';
        for (let i = 0; i < secondImg.length; i++){
            secondImg[i].style.opacity = '1';
            secondImg[i].style.transform = 'translate(0px, 0px)';
        }
    }
    else{
        second.style.opacity = '0';
        for (let i = 0; i < secondImg.length; i++){
            secondImg[i].style.opacity = '0';
            secondImg[i].style.transition = 'all .9s ease';
        }
        secondImg[0].style.transform = 'translate(-250px, 0px)';
        secondImg[1].style.transform = 'translate(250px, 0px)';
        secondImg[2].style.transform = 'translate(0px, 250px)';
    }

    if (window.scrollY > 1501 && window.scrollY < 2400){
        third.style.opacity = '1';
        for (let i = 0; i < thirdImg.length; i++){
            thirdImg[i].style.opacity = '1';
            thirdImg[i].style.transform = 'translate(0px, 0px)';
        }
    }
    else{
        third.style.opacity = '0';
        for (let i = 0; i < thirdImg.length; i++){
            thirdImg[i].style.opacity = '0';
            thirdImg[i].style.transition = 'all .9s ease';
        }
        thirdImg[0].style.transform = 'translate(-150px, -150px)';
        thirdImg[1].style.transform = 'translate(150px, -150px)';
        thirdImg[2].style.transform = 'translate(-150px, 150px)';
        thirdImg[3].style.transform = 'translate(150px, 150px)';
    }

    if (window.scrollY > 2401){
        last.style.opacity = '1';
        lastImg.style.opacity = '1';
        lastImg.style.transform = 'translate(0px, 0px)';
    }
    else{
        last.style.opacity = '0';
        lastImg.style.opacity = '0';
        lastImg.style.transition = 'all .9s ease';
        lastImg.style.transform = 'translate(0px, 250px)';
    }
});

zoomed.forEach(zoomObject => {
    zoomObject.addEventListener('mouseover', (event : Event) => {
        const target = event.target! as HTMLImageElement;

        target.style.transition = 'all .3s ease';
        target.style.transform = 'scale(1.1)';
    });

    zoomObject.addEventListener('mouseout', (event : Event) => {
        const target = event.target as HTMLImageElement;

        setTimeout(() => {
            target.style.transition = 'all .9s ease';
        }, 300);
        target.style.transform = 'scale(1)';
    })
})