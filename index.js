const container = document.querySelector(".PetShop");

function getRequest() {
    //debugger;
    return fetch('https://crossorigin.me/model/data.json')
   // return fetch('model/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
};
let data = getRequest(); 