/*Scroll fit page*/

const panels = document.querySelectorAll("section");
let y_coords = [];
let epsilon = Math.floor(window.innerHeight / 5);
let current = -1;
let pageYOffset = window.pageYOffset;


function find_section(){
    let result = -1;
    
    for (let index = 0; index < panels.length; index++) {
        y_coords[index] = panels[index].offsetTop;
    }
    for (let index = 0; index < y_coords.length; index++) {
        if (Math.abs(window.pageYOffset - y_coords[index]) < epsilon){
            result += index + 1;
            break;
        }
    }


    return result;
}

window.addEventListener('scroll', (e) => {
    let index = find_section();

    if (index < y_coords.length && (index != current)){
        current = index;
        window.scrollTo({
            left: 0,
            top: y_coords[index],
            behavior: 'smooth'
        });
    }
})