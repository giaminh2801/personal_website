const panels = document.querySelectorAll("section");
let y_coords = [];
let epsilon = 100;
let current = -1;

for (let index = 0; index < panels.length; index++) {
    y_coords[index] = panels[index].offsetTop;
}

function find_section(){
    let pageYOffset = window.pageYOffset;
    let result = -1;

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

console.log(panels);
console.log(y_coords);
