document.addEventListener('DOMContentLoaded', () => {

    let trg = document.querySelector('.target');

    trg.addEventListener('pointerdown', (e) => {
        trg.setPointerCapture(e.pointerId); 
        moveAt()
    })

   function moveAt() {
    trg.addEventListener('pointermove', move)
   }

    function move(e) {
        if (e.clientX >= 200) {
            trg.style.left = (200 - centerTrg) + 'px'
        } else if(e.clientX <= 0) {
            trg.style.left = 0 + 'px'
        } else {
            centerTrg = trg.getBoundingClientRect().width / 2;
            trg.style.left = e.clientX - centerTrg + 'px'
        }
    }

    trg.addEventListener('pointerup', () => {
        trg.removeEventListener('pointermove', move)
        trg.pointerUp = null
    })

})

