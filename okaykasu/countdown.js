const cdd = document.getElementById('cd')

const testday = new Date('2022/01/15 09:30:00') 

function countdown (){
    const now = new Date()
    const diff = testday - now

    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const secound = Math.floor(diff / 1000) % 60
    const msecond = diff % 1000
    const week = Math.floor(day / 7)

    cd.innerText = `共通テストまで あと${day}日${hour}時間${minutes}分${secound}秒${msecond}（${week}週）`
}

countdown()
setInterval(countdown,1)
