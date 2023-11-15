const bulb = document.querySelector(".bulb");
const bulbSwitch = document.querySelector(".bulb_switch");

bulbSwitch.addEventListener('click', () => {
    // console.log(bulb.src);
    if (bulb.src.match('off')) {
        bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
        bulbSwitch.innerHTML = "Turn OFF"
    } else {
        bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
        bulbSwitch.innerHTML = "Turn ON"
    }

    //////////////  OR (only for button text)

    // if (bulbSwitch.innerHTML.match('ON')) {
    //     bulbSwitch.innerHTML = "Turn OFF"
    // } else {
    //     bulbSwitch.innerHTML = "Turn ON"
    // }
})


