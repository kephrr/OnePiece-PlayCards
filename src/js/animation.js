const card = document.querySelectorAll(".card")
const glow = document.querySelector(".glow")
const body = document.querySelector('#body')



card.forEach(c=>{
    c.addEventListener("mousemove",(e)=>{
        let cRect = c.getBoundingClientRect()
        
        let x = e.clientX - cRect.x
        let y = e.clientY - cRect.y

        let midCardWidth = cRect.width / 2
        let midCardHeight = cRect.height / 2

        let angleX = (y - midCardWidth) / 8
        let angleY = - (x - midCardHeight) / 8
        
        c.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        
        let color = c.children[0].getAttribute('id')
        body.style.background = `radial-gradient(circle at 50% 100%, black, black)`
        c.children[0].style.boxShadow = `0px 0px 30px 0px ${color}`
    })
    c.addEventListener("mouseleave", ()=>{    
        c.children[0].style.transform = `rotateX(0) rotateY(0)`
        c.children[1].style.transform = `rotateX(0) rotateY(0)`
        c.children[0].style.boxShadow = `none`
        body.style.background = `radial-gradient(circle at 50% 100%, rgb(250, 0, 0),rgb(150, 0, 0),rgb(100, 0, 0),rgb(80, 0, 0),rgb(50, 0, 0),rgb(40, 0, 0),rgb(30, 0, 0),rgb(20, 0, 0),rgb(10, 0, 0),rgb(9, 0, 0),rgb(8, 0, 0),rgb(7, 0, 0),rgb(6, 0, 0),rgb(5, 0, 0),rgb(5, 0, 0), black)`
    })
    
})