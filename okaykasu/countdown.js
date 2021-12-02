const dd = document.getElementById('dd')
const hh = document.getElementById('hh')
const mm = document.getElementById('mm')
const ss = document.getElementById('ss')
const ms = document.getElementById('ms')
const wk = document.getElementById('wk')

const testday = new Date('2022/01/15 09:30:00') 

function countdown (){
    const now = new Date()
    const diff = testday - now

    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const secound = Math.floor(diff / 1000) % 60
    const msecond = Math.floor(diff) % 1000
    const week = Math.floor(day / 7)

    dd.innerText = day
    hh.innerText = hour
    mm.innerText = minutes
    ss.innerText = secound
    ms.innerText = msecond
    wk.innerText = week
}

countdown()
setInterval(countdown,100)