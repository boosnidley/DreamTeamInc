
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
        tileGrid.innerHTML += htmlText;
    }
}
createTiles()

$(document).ready(function (){
    let w = $(window).width()
    console.log(w)
    $(".grid").css("gap", `${Math.trunc(0)}px ${Math.trunc(w * 0.02)}px`)
    $(".ghost").css("width", `${Math.trunc(w * 4/15)}px`)
    $(".tile").css("width", `${Math.trunc(w * 2/19)}px`)
})

$(".grid").on("resize", function (){

})

$(".tile").click(function (){
    if(!($(this).hasClass('flipped'))){
        $(this).addClass("flipped")
        const tileBack = $(this).find('.tile-back');
        const tileBackImage = tileBack.find('img');

        // Check if the tile-back image has src of Jumpscare.png
        if (tileBackImage.attr('src') === './pics/Jumpscare.png') {
            tileBack.addClass('jump'); // Add jump class before flipping
        }
        const ind = $(this).index()
        $(this).children('.tile-inner').css('transform', 'rotateY(180deg)')
        setTimeout(function () {
            tileBack.removeClass('jump');
        }, 500);
    }
})

