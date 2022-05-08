const generateBtn = document.getElementById("generate-btn");
const resultBtn1 = document.getElementById('result-btn1')
const resultBtn2 = document.getElementById('result-btn2')
const resultBtn3 = document.getElementById('result-btn3')
const resultBtn4 = document.getElementById('result-btn4')
const resultBtns = document.getElementsByClassName("result-btn")



generateBtn.addEventListener('click', () => {


    resultBtn1.setAttribute("class", "generated-pass-btn")
    resultBtn2.setAttribute("class", "generated-pass-btn")
    resultBtn3.setAttribute("class", "generated-pass-btn")
    resultBtn4.setAttribute("class", "generated-pass-btn")

    function generateRandomPw() {

    let arr = ["","","","","","","","","","","","","","","","",]

        for(let i = 0; i < arr.length; i++) {
    
        let randomS = String.fromCharCode(Math.floor(Math.random() * (126 - 32) + 32))
        arr[i] = `${randomS}`
}
        let finalpw = arr.join("");
        return finalpw
}

    let result1 = generateRandomPw()
    let result2 = generateRandomPw()
    let result3 = generateRandomPw()
    let result4 = generateRandomPw()

    resultBtn1.textContent = result1
    resultBtn2.textContent = result2
    resultBtn3.textContent = result3
    resultBtn4.textContent = result4
})


resultBtn1.addEventListener("click", () => {
    navigator.clipboard.writeText(resultBtn1.innerText)
})
resultBtn2.addEventListener("click", () => {
    navigator.clipboard.writeText(resultBtn2.innerText)
})
resultBtn3.addEventListener("click", () => {
    navigator.clipboard.writeText(resultBtn3.innerText)
})
resultBtn4.addEventListener("click", () => {
    navigator.clipboard.writeText(resultBtn4.innerText)
})


