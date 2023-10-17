var first = document.querySelector('.first'), second = document.querySelector('.second'), third = document.querySelector('.third'), last = document.querySelector('.bottom'), firstImg = [
    document.querySelector('.presentable-part-one'),
    document.querySelector('.presentable-part-two')
], secondImg = [
    document.querySelector('.presentable-stage-2-one'),
    document.querySelector('.presentable-stage-2-two'),
    document.querySelector('.presentable-stage-2-three')
], thirdImg = [
    document.querySelector('.presentable-stage-3-one'),
    document.querySelector('.presentable-stage-3-two'),
    document.querySelector('.presentable-stage-3-three'),
    document.querySelector('.presentable-stage-3-four')
], lastImg = document.querySelector('.presentable-stage-4-main'), zoomed = document.querySelectorAll('.zoomed');
setTimeout(function () {
    first.style.opacity = '1';
    for (var i = 0; i < firstImg.length; i++) {
        firstImg[i].style.transform = 'translate(0px, 0px)';
        firstImg[i].style.opacity = '1';
    }
}, 100);
window.addEventListener('scroll', function () {
    if (window.scrollY < 500) {
        first.style.opacity = '1';
        for (var i = 0; i < firstImg.length; i++) {
            firstImg[i].style.transform = 'translate(0px, 0px)';
            firstImg[i].style.opacity = '1';
        }
    }
    else {
        first.style.opacity = '0';
        firstImg[0].style.transform = 'translate(-250px, 0px)';
        firstImg[1].style.transform = 'translate(250px, 0px)';
        for (var i = 0; i < firstImg.length; i++) {
            firstImg[i].style.opacity = '0';
            firstImg[i].style.transition = 'all .9s ease';
        }
    }
    if (window.scrollY > 501 && window.scrollY < 1500) {
        second.style.opacity = '1';
        for (var i = 0; i < secondImg.length; i++) {
            secondImg[i].style.opacity = '1';
            secondImg[i].style.transform = 'translate(0px, 0px)';
        }
    }
    else {
        second.style.opacity = '0';
        for (var i = 0; i < secondImg.length; i++) {
            secondImg[i].style.opacity = '0';
            secondImg[i].style.transition = 'all .9s ease';
        }
        secondImg[0].style.transform = 'translate(-250px, 0px)';
        secondImg[1].style.transform = 'translate(250px, 0px)';
        secondImg[2].style.transform = 'translate(0px, 250px)';
    }
    if (window.scrollY > 1501 && window.scrollY < 2400) {
        third.style.opacity = '1';
        for (var i = 0; i < thirdImg.length; i++) {
            thirdImg[i].style.opacity = '1';
            thirdImg[i].style.transform = 'translate(0px, 0px)';
        }
    }
    else {
        third.style.opacity = '0';
        for (var i = 0; i < thirdImg.length; i++) {
            thirdImg[i].style.opacity = '0';
            thirdImg[i].style.transition = 'all .9s ease';
        }
        thirdImg[0].style.transform = 'translate(-150px, -150px)';
        thirdImg[1].style.transform = 'translate(150px, -150px)';
        thirdImg[2].style.transform = 'translate(-150px, 150px)';
        thirdImg[3].style.transform = 'translate(150px, 150px)';
    }
    if (window.scrollY > 2401) {
        last.style.opacity = '1';
        lastImg.style.opacity = '1';
        lastImg.style.transform = 'translate(0px, 0px)';
    }
    else {
        last.style.opacity = '0';
        lastImg.style.opacity = '0';
        lastImg.style.transition = 'all .9s ease';
        lastImg.style.transform = 'translate(0px, 250px)';
    }
});
zoomed.forEach(function (zoomObject) {
    zoomObject.addEventListener('mouseover', function (event) {
        var target = event.target;
        target.style.transition = 'all .3s ease';
        target.style.transform = 'scale(1.1)';
    });
    zoomObject.addEventListener('mouseout', function (event) {
        var target = event.target;
        setTimeout(function () {
            target.style.transition = 'all .9s ease';
        }, 300);
        target.style.transform = 'scale(1)';
    });
});
