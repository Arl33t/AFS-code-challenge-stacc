// Load json from file
let pep;
fetch("pep_small.json")
  .then(response => response.json())
  .then(data => pep = data)
  .then(() => console.log(pep));


// Search function. Runs on button click or enter key.
function search(event) {
    text = document.getElementById("searchInput").value;
    tableCont = document.getElementById("main-table-cont");
    table = document.getElementById("main-table");
    nameFound = false;
    
    if (event.key == "Enter" || event == "btn") {
        for (const key in pep) {
            let name = pep[key]["name"];
            let alias = pep[key]["aliases"].split(";");

            if (text == name || alias.includes(text)) {
                console.log(pep[key]);
                nameFound = true;
            }
        }
        if (!nameFound) {
        console.log("Name not found");
        }
    }
}
