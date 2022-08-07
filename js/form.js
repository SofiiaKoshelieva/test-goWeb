const input = document.querySelector("#callemail")
const form = document.querySelector(".call_form")
const warn = document.querySelector(".warning-cont")
form.addEventListener("submit", e => {
    e.preventDefault()
    if (input.value.trim() === "") {
        warn.classList.remove("display--none")
        
    }
    else {
           warn.classList.add("display--none")


    }
    e.target.reset()
})
