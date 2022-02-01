
// Calculator start here
let calc_data = []

let valGet = (val) => {

    calc_data.push(val)
    document.querySelector('.for_top_monitop').innerHTML = calc_data.join('')
    document.querySelector('.for_main_monitop').innerHTML = 0
}

let all_clear = () => {

    calc_data = []
    document.querySelector('.for_top_monitop').innerHTML = 0
    document.querySelector('.for_main_monitop').innerHTML = ''
}

let back = () => {

    calc_data.pop()
    document.querySelector('.for_top_monitop').innerHTML = calc_data.join('')
}

let finalRes = () => {

    let cal_str = calc_data.join('')
    document.querySelector('.for_main_monitop').innerHTML = eval(cal_str)
}
// Calculator end here


// Analog clock start here

// Get elements
const sec = document.querySelector('.second')
const min = document.querySelector('.minute')
const hour = document.querySelector('.hour')

setInterval(function () {
    let time = new Date()

    let current_sec = time.getSeconds()
    let current_min = time.getMinutes()
    let current_hour = time.getHours()
    
    sec.style.transform = `rotate(${ghoriTime(60, current_sec)}deg)`
    min.style.transform = `rotate(${ghoriTime(60, current_min)}deg)`
    hour.style.transform = `rotate(${ghoriTime(12, current_hour)}deg)`

}, 1000)

function ghoriTime(time, current) {
    return (360 * current) / time
}
// Analog clock end here

// Instant data with checkbox start here
const skill = document.querySelectorAll('.skill')
const skill_all = document.querySelector('.skill_all')

skill.forEach(skills => {
    skills.addEventListener('change', function () {
        
        let total_data = document.querySelectorAll('.skill:checked')

        let skill_array = []

        total_data.forEach(data => {
            skill_array.push(data.value)
        })

        let list = ''
        
        skill_array.map(data => {
            list += `<li class="list-group-item">${data}</li>`
        })
        skill_all.innerHTML = list
    })
})
// Instant data with checkbox end here

