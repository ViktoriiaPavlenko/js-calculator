window.onload = () => {
    const inputRef = document.querySelector('input')
    const btnsRef = document.querySelector('.btns')

    console.log(inputRef, btnsRef);

    const data = ['1', '2', '3', '=', '4', '5', '6', '+', '7', '8', '9', '-']

    const markup = data.map( (item) => {
        return `<li class="btn">${item}</li>`
    })

    btnsRef.insertAdjacentHTML('beforeend', markup.join(' '))

    console.log(markup.join(' '));
}