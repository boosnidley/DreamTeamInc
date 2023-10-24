
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

function createTiles(){
    const tileGrid = document.getElementById("tileGrid");
    let htmlText = ''
    for (let i = 0; i < imageSources.length; i++) {
        htmlText = '<div class="tile"><div class="tile-inner"><div class="tile-front"></div><div class="tile-back">'
        htmlText += `<img src="${imageSources[i]}" alt="Image">`
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