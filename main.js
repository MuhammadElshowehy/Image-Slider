// select elements and some basics:
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let sliderLength = sliderImages.length;
let currentSlide = 1;
let slideNumber = document.querySelector(".slide-number");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let pagination = document.querySelector(".pagination");

// create pagination ul:
let ul = document.createElement("ul");
for (let i = 1; i <= sliderLength; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
pagination.appendChild(ul);

// make an array from lis:
let lis = Array.from(document.querySelectorAll(".pagination ul li"));

// the checker function:
function theChecker() {
  removeActive();

  slideNumber.textContent = `# ${currentSlide} Of ${sliderLength}`;
  sliderImages[currentSlide - 1].classList.add("active");
  lis[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == sliderLength) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
theChecker(); // call the checker to show the first img by default.

// remove all active classes:
function removeActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  lis.forEach((li) => {
    li.classList.remove("active");
  });
}

// next slide function:
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    theChecker();
  }
}
// prev slide function:
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    theChecker();
  }
}

// click on next and prev buttons:
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// click on pagination:
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    currentSlide = parseInt(index);
    theChecker();
  });
}
// DONE.
