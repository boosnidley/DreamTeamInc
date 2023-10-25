
const imageSources = [
    "./pics/CAT1.png",
    "./pics/CAT2.png",
    "./pics/CAT3.png",
    "./pics/CAT4.png",
    "./pics/CAT5.png",
    "./pics/CAT6.png",
    "./pics/CAT7.png",
    "./pics/CAT8.png",
    "./pics/Jumpscare.png",
];

function randomizeArray(arr) {
    let res = []
    let randomIndex = 0
    while(res.length < arr.length){
        randomIndex = Math.floor(Math.random() * (arr.length))
        console.log(randomIndex)
        if(!res.includes(arr[randomIndex])){
            res.push(arr[randomIndex])
        }
    }
    return res
}

function createTiles(){
    const tileGrid = document.getElementById("tileGrid");
    let htmlText = ''
    const shuffledImages = randomizeArray(imageSources)
    for (let i = 0; i < shuffledImages.length; i++) {
        htmlText = '<div class="tile"><div class="tile-inner"><div class="tile-front">' +
            '<img src="pics/knife.svg" alt=""></div><div class="tile-back">'
        htmlText += `<img src="${shuffledImages[i]}" alt="Image">`
        htmlText += '</div></div></div>'

        // tile.appendChild(image);
        // tile.addEventListener("click", function () {
        //     image.style.display = "block";
        // });
        tileGrid.innerHTML += htmlText;
    }
}

createTiles()

$(".tile").click(function (){
    if(!($(this).hasClass('flipped'))){
        const ind = $(this).index()
        $(this).children('.tile-inner').css('transform', 'rotateY(180deg)')
    }

})