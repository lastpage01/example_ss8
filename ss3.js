//3.2
console.log(document.getElementById("upper"));

//3.3
document.getElementById("upper").addEventListener("click", function () {
    console.log("Upper it!!! just clicked")
})

//3.4
console.log(document.getElementById("input"))

//3.5
document.getElementById("upper").addEventListener("click", function () {
    console.log(`User's name:${document.getElementById("input").value}`)
})

//3.6
document.getElementById("upper").addEventListener("click", function () {
    console.log(`User name uppercase:${document.getElementById("input").value.toLocaleUpperCase()}`)

})

//3.7
console.log(document.getElementById("div"));

//3.8

document.getElementById("upper").addEventListener("click", function () {
    let input = document.getElementById("input").value.toLocaleUpperCase();
    if (input == "")
        document.getElementById("div").innerHTML = 'Your result will appear here'
    else
        document.getElementById("div").innerHTML = input
})