let header = document.querySelector(".header")
let testBtn = document.querySelector("#test-btn")

// testBtn.innerHTML = "Назад"
window.addEventListener("scroll",function() {
    
    let scrollPosition = window.scrollY
    if(scrollPosition > 0) {
        header.classList.add ("scrolled")
    }
    else {
        header.classList.remove ("scrolled")
    }

    
}) 

testBtn.addEventListener("click",function() {
    
   
        if(testBtn.innerHTML == "Назад") {
            testBtn.innerHTML = "Взглянуть"      
        }    

        else {
            testBtn.innerHTML = "Назад" 
        }
    
        
        console.log(testBtn.innerHTML);
})





