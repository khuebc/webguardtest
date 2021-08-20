document.addEventListener("DOMContentLoaded", function(event) {
    // innerHTML
    document.getElementById('top_menu').children[0].querySelector('span').innerHTML = '<span>First</span>';
    document.getElementById('top_menu').children[1].querySelector('span').innerHTML = '<span>Second</span>';
    document.getElementById('top_menu').children[2].querySelector('span').innerHTML = '<span>Third</span>';
    document.getElementById('top_menu').children[3].querySelector('span').innerHTML = '<span>Fourth</span>';

    // Image

    document.getElementById('first-img').src = '/mywebguard/static/src/img/mywebguard.png';
    document.getElementById('second-img').src = '/mywebguard/static/src/img/mywebguard.png';
    document.getElementById('third-img').src = '/mywebguard/static/src/img/mywebguard.png';

    //appendChild
    const box = document.getElementById('top_menu_collapse');
    const first = document.createElement('div');
    first.innerHTML = 'FIRST -- ';
    box.appendChild(first);

    const second = document.createElement('div');
    second.innerHTML = 'SECOND -- ';
    box.appendChild(second);


    const third = document.createElement('div');
    third.innerHTML = 'THIRD -- ';
    box.appendChild(third);

    const fourth = document.createElement('div');
    fourth.innerHTML = 'FOURTH -- ';
    box.appendChild(fourth);
});
