const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
    const data = new Date()
    const dia = document.getElementById("dia")
    const mes = document.getElementById('mes')
    const ano = document.getElementById('ano')
    dia.textContent = zeroFill(data.getDate())
    mes.textContent = zeroFill(data.getMonth() + 1)
    ano.textContent = data.getFullYear()
},1000)
const shareButton = document.getElementById('share-button')
const shareList = document.getElementById('share-list')

shareButton.addEventListener('click', () =>{
    if (shareList.style.display === 'flex'){
        shareList.style.display = 'none'
    } else {
        shareList.style.display = 'flex'
    }
})


