

let myAge = document.getElementById("my-age")
let saveBtn = document.getElementById("save-btn")
let count = 0

function increment() {
    count = count + 1
    myAge.textContent = count
    console.log("button was clicked")
}

function save() {
    console.log(count)
    count = 0
myAge.textContent = count

}
