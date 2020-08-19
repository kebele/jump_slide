// thanks to Ania Kubow
// https://www.youtube.com/watch?v=3rsKUTCh0LU

document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character')
    let bottom = 0
    let gravity = 0.9
    let isJumping = false
    let isGoingLeft = false
    let isGoingRight = false
    let left = 0
    let right = 0
    let rightTimerId
    let leftTimerId

    function jump(){
        if(isJumping) return
        prince.classList.remove('character-slide')
        prince.classList.add('character')
        let timerUpId = setInterval(function(){
            if(bottom > 250){
                clearInterval(timerUpId)
                let timerDownId = setInterval(function (){
                    if(bottom < 0){
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -= 5
                    prince.style.bottom = bottom + 'px'
                }, 30)
            }
            isJumping = true
            bottom += 30
            bottom = bottom * gravity
            // console.log(bottom)
            prince.style.bottom = bottom + 'px'
        }, 30)        
    }

    function slideLeft(){
        prince.classList.add('character-slide')
        prince.classList.remove('character')
        if(isGoingRight){
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(function(){
            left -= 5
            console.log('sola')
            prince.style.left = left + 'px'
        },30)        
    }

    function slideRight(){
        prince.classList.add('character-slide')
        prince.classList.remove('character')
        if(isGoingLeft){
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval(function(){
            left += 5
            console.log('sağa')
            prince.style.left = left + 'px'
        },30)        
    }
    


    function control(e){
        if(e.keyCode === 39){
            slideRight() //sağa basılırsa
        } else if(e.keyCode === 38){
            jump()
        } else if (e.keyCode === 37){
            slideLeft() //sola basılırsa            
        }
    }


    document.addEventListener('keyup', control);



})