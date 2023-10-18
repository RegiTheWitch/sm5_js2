// setTimeout(()=>{
//     console.log('timeout');
// },3000)

// setInterval(()=>{
//     console.log('interval');
// },3000)


const timeBlock=document.querySelector('.time-block')
const timeBtn=document.querySelector('.time-button')
const countEl=document.querySelector('.count')

setTimeout(()=>{
 countFunc()
},10000)

timeBtn.addEventListener('click', ()=>{
    countFunc()
})


function countFunc(){
    timeBlock.classList.add('active')
    let count = 5
   countHtml(count)
   timeBtn.classList.remove('active')

const countInterval =setInterval(()=>{
    count--
    countHtml(count)

    timeBtn.classList.remove('active')

    if (count===0){
        clearInterval(countInterval)
        timeBlock.classList.remove('active')
        timeBtn.classList.add('active')
    }
    
},1000)
}

function countHtml(value){
    countEl.innerHTML = value
}