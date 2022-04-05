// Search function. Runs on button click or enter key.
function search(event) {
    text = document.getElementById("searchInput").value
    if (event.key == "Enter" || event == "btn") {
        console.log(text)
    }
}