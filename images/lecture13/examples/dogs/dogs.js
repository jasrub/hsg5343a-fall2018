const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogs = document.querySelector(".dogs");

function addNewDog() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute dog";
      dogs.appendChild(img);
    });
}

document.querySelector(".add-dog").addEventListener("click", addNewDog);