const accordionBtns = [...document.getElementsByTagName("button")]
const items = document.querySelectorAll(".item")

accordionBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const selectedBtn = e.target
        const content = selectedBtn.nextElementSibling
        const parentElem = selectedBtn.parentElement

        if (content.style.maxHeight) {
            content.style.maxHeight = null

            removeActiveClass(selectedBtn)
            removeActiveClass(content)
            removeActiveClass(parentElem)
        } else {
            //closes the previous accordion
            items.forEach(item => {
                if (item.classList.contains("active")) {
                    const prevBtn = item.firstElementChild
                    const prevContent = item.lastElementChild
                    
                    prevContent.style.maxHeight = null
                    
                    removeActiveClass(item)
                    removeActiveClass(prevBtn)
                    removeActiveClass(prevContent)
                }
            })

            content.style.maxHeight = content.scrollHeight + "px"

            addActiveClass(selectedBtn)
            addActiveClass(content)
            addActiveClass(parentElem)

            console.log(content.style.maxHeight)
        }        
    })
})

function addActiveClass(elem) {
    elem.classList.add("active")
}

function removeActiveClass(elem) {
    elem.classList.remove("active")
}