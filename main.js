let colorArray = [
    "#FFFFFF",
    "#B80000", 
    "#07A905", 
    "#0523A9", 
    "#CA07A0", 
    "#C88D03",
    "#0AFFFF",
    "#32CD32",
    "#FFD700",
    "#CD7F32",
    "#3F000F",
    "#B666D2",
    "#C48793"
]

const button = document.querySelector('.btn')
button.addEventListener('click', clickButton)

function clickButton  (e) {
    e.preventDefault();

    for(let i = 0; i < colorArray.length; i++){
        colorArrayLength = [i]
        const number = colorArrayLength[0]
        let lastNumber = Math.floor((Math.random() * number))
        colorHex = colorArray[lastNumber]
    }
    document.body.style.background = colorHex;
    const colorInput = document.getElementById('input').innerHTML = `Color Hex : ${colorHex}`
}