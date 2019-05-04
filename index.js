const container = document.querySelector(".PetShop");

function getRequest() {
    //debugger;
    return fetch('data.json')
   // return fetch('https://silchencko.github.io/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
};
let data = getRequest(); 
