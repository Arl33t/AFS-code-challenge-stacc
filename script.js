// Variable declaration. Some on window load to catch DOM Elements
window.onload = function() {
    const loading = document.getElementById("loading");
    const hitsAmount = document.getElementById("hitsAmount");
}

// Loading-animation functions
function showLoading() {
    loading.style.display = "flex";
}
function hideLoading() {
    loading.style.display = "none";
}


// API call. Returns data from API.
let info; // Variable for fetched data
async function fetchInfo(name) {
    showLoading();
    let url = "https://code-challenge.stacc.dev/api/pep?name=" + name;
    
    const response = await fetch(url);
    const data = await response.json();
    hideLoading();
    console.log("Data received");
    info = data;
    console.log(data);

    return data;
}


// Search function. Runs on button click or enter key.
async function search(event) {
    input = document.getElementById("searchInput").value;

    if (event.key == "Enter" || event == "btn") {
        const response = await fetchInfo(input);
        const hitsNum = response.numberOfHits;
        if (hitsNum === 0) {
            console.log("No name found");
        }
        else {
            hitsAmount.innerText = "Number of hits: " + hitsNum;
            createTable(response.hits[0], "#table")
        }
    }
}


// Function for constructing table from JSON
function createTable(data, selector) {

    for (const key in data) {
        let header = key;
        let value = data[key]
        var row = $('<tr/>');
        row.append($('<th/>').html(header));
        row.append($('<td/>').html(value));
        $(selector).append(row);
    }
}