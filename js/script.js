"use strict";

// Initialize Swiper 

const mainSlider = new Swiper(".mainSwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const footerSlider = new Swiper(".footerSwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});


//   Initialize Simplebar

new SimpleBar(document.getElementById('Knl1-list'), {
    autoHide: false,
    scrollbarMaxSize: 180,
}
);

new SimpleBar(document.getElementById('Knl2-list'), {
    autoHide: false,
    scrollbarMaxSize: 180,
}
);


// Tab

const tabs = document.querySelectorAll(".schedule_tub");
const tabsContent = document.querySelectorAll(".schedule_tabcontent");


// Functions that hides and show tabs
function hiddenTabContent() {
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove("is-active");
        tabs[i].classList.remove("is-active");
    }
}

function showTabContent(i) {
    tabsContent[i].classList.add("is-active");
    tabs[i].classList.add("is-active");
}


tabs.forEach((tab, i)=> {
    tab.addEventListener("click", function (event) {
        event.preventDefault();
        if (tab.classList.contains("is-active")) {
            return;
        }
        else {
        hiddenTabContent();
        showTabContent(i);
        }
    })
});

