function changeTheme() {
    // Get the modal
    var modal = document.getElementById("colorModal");
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function wc_hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

function toggleTheme() {
    var colorPop = document.getElementById("colorInput");
    var root = document.querySelector(':root');
    if(wc_hex_is_light(colorPop.value)) {
        root.style.setProperty('--primary-color', colorPop.value);
        root.style.setProperty('--secondary-color', '#000');
        root.style.setProperty('--hover-color', '#fff');
    } else {
        root.style.setProperty('--primary-color', colorPop.value);
        root.style.setProperty('--secondary-color', '#fff');
        root.style.setProperty('--hover-color', '#000');
    }
}


function goTo(section) {
    var elmnt = document.getElementById(section);
    elmnt.scrollIntoView();
}

function theme_set(color) {
    console.log('ccc', color);
    document.documentElement.style.cssText = color;
}

function toggleNav() {
    var x = document.getElementById("mob-nav-links");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }

    var menu1 = document.getElementById("menu-closed");
    var menu2 = document.getElementById("menu-open");

    if (menu1.style.display === 'none') {
        menu1.style.display = 'block';
        menu2.style.display = 'none';
    } else {
        menu2.style.display = 'block';
        menu1.style.display = 'none';
    }
}

function toggleCard(id) {
    var card = document.getElementById(id);
    card.classList.toggle('is-flipped');
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var answer = this.childNodes[3];
        console.log(answer);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            answer.style.display = 'block';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            answer.style.display = 'none';
        }
    });
}
