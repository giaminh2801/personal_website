const section_covers = document.querySelectorAll('.section-cover');
const section_buttons = document.querySelectorAll('.section-btn');
const section_contents = document.querySelectorAll('.section-content')

function is_stretch(btn){
    for (let index = 0; index < btn.classList.length; index++) {
        if (btn.classList[index] == 'section-btn-stretch'){
            return true;
        }
    }
    return false;
}

for (let index = 0; index < section_covers.length; index++) {
    section_buttons[index].addEventListener('click', (e) => {
        if (is_stretch(section_buttons[index])){
            section_covers[index].classList.remove('section-anim-stretch');
            section_covers[index].classList.add('section-anim-shrink');
            section_buttons[index].classList.remove('section-btn-stretch');
            section_buttons[index].classList.add('section-btn-shrink');
            setTimeout(() => {
                section_contents[index].classList.add('section-content-anim');
            }, 500);
        }
        else{
            section_covers[index].classList.remove('section-anim-shrink');
            section_covers[index].classList.add('section-anim-stretch');
            section_buttons[index].classList.remove('section-btn-shrink');
            section_buttons[index].classList.add('section-btn-stretch');
            section_contents[index].classList.remove('section-content-anim');
        }
    });
}