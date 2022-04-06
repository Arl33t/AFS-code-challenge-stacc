// Variable declaration. Some on window load to catch DOM Elements
window.onload = function() {
    const tableCont = document.getElementById("main-table-cont");
    const table = document.getElementById("main-table");
    const tableBody = document.getElementById("tablebody");
    const tableMeta = document.getElementById("tableMeta");
    const loading = document.getElementById("loading");
}

// Loading animation functions
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

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         hideLoading()
    //         console.log("Data received")
    //         info = data
    //     });
    return data;
}


// Search function. Runs on button click or enter key.
async function search(event) {
    input = document.getElementById("searchInput").value;

    if (event.key == "Enter" || event == "btn") {
        const response = await fetchInfo(input);
        //console.log(response);
    }
}
