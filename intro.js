const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:"./blueman.jpg",
        text: 
        "Lorem ipsum dolor, sit amet consectetur adipiscing elit, saepe eum excepbeatae voluptatibus eaque iste. Lorem ipsum dolor, sit amet consectetur adipiscing elit,saepe eumexcepturi beatae, voluptatibus eaque iste."
    },
    {
        id: 2,
        name: "anna johson",
        job: "web designer",
        img:"./blackfemale.jpg",
        text: 
        " sit amet consectetur adipiscing elit,saepe eumexcepturi beatae, voluptatibus eaque iste."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:"./pinkwoman.jpg",
        text: 
        " saepe eum excepbeatae voluptatibus eaque iste. Lorem ipsum dolor, sit amet consectetur adipiscing elit,saepe eumexcepturi beatae, voluptatibus eaque iste."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:"./standfemale.jpg",
        text: 
        "Lorem ipsum dolor, sit amet consectetur adipiscing elit, saepe eum excepbeatae voluptatibus eaque iste. consectetur adipiscing elit,saepe eumexcepturi beatae, voluptatibus eaque iste."
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person base on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});
// show random person
randomBtn.addEventListener('click', function() {
   currentItem = Math.floor(Math.random() * reviews.length);
      console.log(currentItem);
      showPerson();
});
