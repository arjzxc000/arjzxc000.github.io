let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
// let searchBtn = document.querySelector('.bx-search-alt');

btn.onclick = function () {
    sidebar.classList.toggle('active'); // toggle sidebar state to active
}
// searchBtn.onclick = function () {
//     sidebar.classList.toggle('active'); // when click searchbar will change sidebar's state to active
// }


const media_query = window.matchMedia("(max-width: 1000px)");

media_query.onchange = (evt) => { // เป็น function ที่จะเปลี่ยนไปตามที่ขนาดหน้าจอเราเปลี่ยนตามไปด้วย
    if (media_query.matches) {
        // less than 600px
        // console.log('match')
        sidebar.classList.remove('active');
    }
    else {
        // more than 600px
        sidebar.classList.add('active');
    }
}

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


// active sidebar when scroll
const sections = document.querySelector('.content .Home section');
const sidebarli = document.querySelector('.sidebar.active .navlist li a');
// console.log(sections)
// console.log(sections)
// for(i in sections){
//     console.log(i)
// }
// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         console.log(sectionTop)
//     });
// })

// Education accordion -> หีบเพลง
const accordion = document.getElementsByClassName('educationBx');
const accordion_label = document.getElementsByClassName('education_label');


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

function NewTab(url) {
    window.open(
        url, "_blank");
}