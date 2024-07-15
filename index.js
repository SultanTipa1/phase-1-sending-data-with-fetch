// Add your code here
fetch(destinationURL, configarationObject);

const formData = {
    dogName: "Byron",
    dogreed: "poodle",
}

const configarationObject = {
    method: "POST",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
.then(function (response){
    return response.json();
})
.then(function (object){
    console.log(object);
});

fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers;{
        "Content-Type": "application/json",
        'Accept': "application/json",
    }
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "poodle",
    }),
});



const destinationURL = "http://localhost:3000/users";  //server

fetch(destinationURL, configarationObject);

const formData ={
    userName: "name",
    userEmail:"email",
}

const configurationObject = {
    method: "POST",
    headers;{
        "Content-Type": "application/json",
        'Accept': "application/json",
    }
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/users", configurationObject)
.then(function (response){
    return response.json();
})
.then(function (object){
    console.log(object);
    appendToDom(object);
    .catch(function (error) {
        console.error("Error fetching data:", error);
        appendToDom(object);
});

function appendToDom(data){
    const valueToAppend = data.someValue;
    const container = document.getElementById("result-container"); 

  const newElement = document.createElement("div");
  newElement.textContent = valueToAppend;

  container.appendChild(newElement);
}
