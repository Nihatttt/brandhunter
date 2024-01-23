"use strict";

const itemSort = document.querySelector(".item-sort");
const sortList = document.querySelector(".sort-list ul");

const itemEls = document.querySelectorAll('.item');
const itemListSpans = document.querySelectorAll(".itemListSpan");
const itemListLis = document.querySelectorAll(".item-list ul li");

const brendLis = document.querySelectorAll(".brend ul li");
const sizeLis = document.querySelectorAll(".size ul li");
const colorLis = document.querySelectorAll(".color ul li");

const brendChecks = document.querySelectorAll(".brendCheck");
const sizeChecks = document.querySelectorAll(".sizeCheck");
const colorChecks = document.querySelectorAll(".colorCheck");

const itemHeaderBtns = document.querySelectorAll(".item-header");
const accordionToggles = document.querySelectorAll(".accordion-toggle");
const itemListEls = document.querySelectorAll(".item-list");

const products = document.querySelector(".products");

itemSort.addEventListener("click", () => {
    sortList.classList.toggle("hidden");
});

itemListLis.forEach((item, index) => {
    item.addEventListener("click", () => {
        itemListSpans[index].classList.toggle("hidden");
    });
});

brendLis.forEach((brend, index) => {
    brend.addEventListener("click", () => {
        brendChecks[index].innerHTML = `<i class="fa-solid fa-check"></i>`;
    });
});

sizeLis.forEach((size, index) => {
    size.addEventListener("click", () => {
        sizeChecks[index].innerHTML = `<i class="fa-solid fa-check"></i>`;
    });
});

colorLis.forEach((color, index) => {
    color.addEventListener("click", () => {
        colorChecks[index].innerHTML = `<i class="fa-solid fa-check"></i>`;
    });
});

itemHeaderBtns.forEach((item, index) => {
    let isListVisible = false;
    item.addEventListener('click', () => {
        if (isListVisible) {
            hideItemList(index);
        } else {
            showItemList(index);
        }
    });
    
    function showItemList(index) {
        itemListEls[index].style.display = "block";
        isListVisible = true;
        item.style.background = "#ffdcdc";
        accordionToggles[index].innerHTML = `-`;
    }

    function hideItemList(index) {
        itemListEls[index].style.display = "none";
        isListVisible = false;
        item.style.background = "#e5e7eb";
        accordionToggles[index].innerHTML = `+`;
    }
});
