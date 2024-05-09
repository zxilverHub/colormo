const colorsContainer = document.querySelector('.colors'),
    countsContainer = document.querySelector('.counts')

let colorsInGame = [
    {
        color: 'yellow',
        count: 0,
        id: 1
    },

    {
        color: 'white',
        count: 0,
        id: 2
    },

    {
        color: 'pink',
        count: 0,
        id: 3
    },

    {
        color: 'blue',
        count: 0,
        id: 4
    },

    {
        color: 'red',
        count: 0,
        id: 5
    },

    {
        color: 'green',
        count: 0,
        id: 6
    }
]

function render() {
    colorsInGame.innerHTML = ''
    countsContainerinnerHTML = ''

    colorsInGame.forEach((c) => {
        colorsContainer.innerHTML +=
        `<div class="color-option" style="background-color: ${c.color};" id="${c.id}"></div>`
    })
}



function renderCount() {
    countsContainer.innerHTML = ""
    colorsInGame.forEach((c) => {
        countsContainer.innerHTML +=
        `<h2 class="${c.count>=7? `${c.color}`: ''}">${c.color}: <span>${c.count}</span> </h2>`
    })

}

render()
renderCount()

const colorsBtn = document.querySelectorAll('.color-option');

colorsBtn.forEach(cb => {
    cb.addEventListener('click', (e)=> {
        colorsInGame.forEach(cg => {
            if(cg.id == e.target.id) {
                cg.count += 1
                renderCount()
            }
        })

    })
})