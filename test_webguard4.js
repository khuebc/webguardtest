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
    
    var data = JSON.stringify({});

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:8076/mywebguard/tes_api");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
//     xhr.setRequestHeader("postman-token", "9eb47305-288b-6c37-139e-42b0db7d132e");

    xhr.send(data);

    //appendChild
//     const box = document.getElementById('top_menu_collapse');
//     const first = document.createElement('div');
//     first.innerHTML = 'FIRST -- ';
//     box.appendChild(first);

//     const second = document.createElement('div');
//     second.innerHTML = 'SECOND -- ';
//     box.appendChild(second);


//     const third = document.createElement('div');
//     third.innerHTML = 'THIRD -- ';
//     box.appendChild(third);

//     const fourth = document.createElement('div');
//     fourth.innerHTML = 'FOURTH -- ';
//     box.appendChild(fourth);
});
