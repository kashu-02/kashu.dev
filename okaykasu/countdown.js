const cd = document.getElementById('cd')

const testday = new Date('2022/01/15 09:30:00')
const graduateday = new Date('2022/03/05 09:00:00')

function countdown (){
    const now = new Date()
    let diff
    if(now <= testday){
        diff = testday - now
    }else{
        diff = graduateday - now
    }
    

    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const secound = Math.floor(diff / 1000) % 60
    const msecond = diff % 1000
    const week = Math.floor(day / 7)

    if(now <= testday){
        cd.innerText = `共通テストまで あと${week}週${day}日${hour}時間${minutes}分${secound}秒${msecond}`
    }else{
        cd.innerText = `卒業まで あと${week}週${day}日${hour}時間${minutes}分${secound}秒${msecond}`
    }
}

countdown()
setInterval(countdown,1)
