const eventsList = document.querySelector('.eventsList');
const addEventForm = document.querySelector('.add-event-form');
const titleValue = document.getElementById('inputTitle');
const descriptionValue = document.getElementById('inputDescription');
const cityEventValue = document.getElementById('inputCityEvent');
const addressValue = document.getElementById('inputAddress');
const dateStartValue = document.getElementById('inputDateStart');
const timeStartValue = document.getElementById('inputTimeStart');
const priceValue = document.getElementById('inputPrice');

let outputLess = '';

const renderPosts = (posts) => {
    posts.forEach(post => {
        outputLess += `
            <a href="event.html" class="my-5">
            <div class="event-container position-relative m-4">
                <img class="event-image rounded position-absolute" src="img/eventimage1@2x.png" alt="">
                <div class="event-body bg-white position-absolute">
                    <div class="col justify-content-center">
                        <div class="my-3 size24 semibold color-primary">${post.title}</div>
                    </div>
                    <div class="col">
                        <div class="d-flex d-sm-inline-flex flex-wrap flex-row justify-content-center">
                            <div class="col-auto">
                            <span class=" badge-category border-radius bg-primary-c text-white size18 medium"
                                  href="#${post.category}">${post.category}</span>
                            </div>
                            <div class="mt-2 mt-sm-0 d-flex align-items-center justify-content-lg-start">
                                <img src="img/date@2x.png" alt="date">
                                <div>
                                    <p class="m-0 ml-2 medium size16 color-primary">${post.startDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col my-3">
                        <p class="size16 regular color-primary desc">${post.description}</p>
                    </div>
                    <div class="col">
                        <div class="d-flex align-items-center justify-content-start of">
                            <img class="align-self-center" src="img/time@2x.png" alt="date">
                            <p class="ml-2 m-0 medium size16 color-primary">${post.startTime}</p>
                            <img class="ml-2" src="img/location@2x.png" alt="location">
                            <p class="ml-2 m-0 medium size16 color-primary">${post.city}</p>
                            <img class="ml-2" src="img/price@2x.png" alt="price">
                            <p class="ml-2 m-0 medium size16 color-primary">${post.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
            `;
    });
    eventsList.innerHTML = outputLess;
}

const url = 'http://localhost:5000/api/posts';

fetch(url)
    .then(res => res.json())
    .then(data => {
        renderPosts(data)
    });

eventsList.addEventListener('click', (e)=>{

})
//Create - Insert new event
//Method: POST
addEventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleValue.value,
            description: descriptionValue.value,
            city: cityEventValue.value,
            address: addressValue.value,
            price: priceValue.value,
            startDate: dateStartValue.value,
            startTime: timeStartValue.value,
            organization: "Lviv Event",
            phone: "096 035 7582",
            email: "eventlviv@gmail.com"

        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr);
        })
})
