const card = document.querySelectorAll(".card")
const glow = document.querySelector(".glow")

card.forEach(c=>{
    c.addEventListener("mousemove",(e)=>{
        let cRect = c.getBoundingClientRect()

        let x = e.clientX - cRect.x
        let y = e.clientY - cRect.y

        let midCardWidth = cRect.width / 2
        let midCardHeight = cRect.height / 2

        let angleX = (y - midCardWidth) / 8
        let angleY = - (x - midCardHeight) / 8

        let glowX = x / cRect.width * 100
        let glowY = y / cRect.height * 100

        c.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        c.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(197, 201, 204), transparent);`
    })
    c.addEventListener("mouseleave", ()=>{
        c.children[0].style.transform = `rotateX(0) rotateY(0)`
        c.children[1].style.transform = `rotateX(0) rotateY(0)`
    })
})