let clickedImages = [];
let clickedIndex = [];
let previas = clickedImages[clickedImages.length -1];
let last = clickedImages[clickedImages.length - 2];


const images = ['😊','👌','😎', '😶‍🌫️', '😸','☠️','🤢', '🤪']

// dobling the list of my images
const dobledImages = [...images, ...images]

// making my list to be random every time you start the game
const listOfImages = dobledImages.sort(() => Math.random() - 0.5)

// when you press the box on the page 
function pressed(cellId) {
    const cell = document.getElementById(cellId);
    // get the id number of the box clicked on
    let idNumber = Number(cellId);
    console.log(idNumber);

    clickedIndex.push(idNumber)
    // print image on the location of the id number
    let imageLocation = listOfImages[idNumber -1] 
    document.getElementById(idNumber).innerHTML = imageLocation;

    clickedImages.push(imageLocation)
    checkLengOfList()
    checkDubleClicked()
    
    console.log(clickedIndex)


}

function checkLengOfList() {
    
    if (clickedImages.length == 2) {
        if (last == previas) {
            console.log('the are the same')
        } else {
            //clickedImages = []
        }
    } 
}
function checkDubleClicked() {
    let previasIndex = clickedIndex[clickedIndex.length -1]
    let lastIndex = clickedIndex[clickedIndex.length -2]



    if (lastIndex = previasIndex) {
        clickedIndex.splice(lastIndex, last)//last
        console.log('removed last index')
        console.log(clickedIndex)
    }
    splite
    console.log(previasIndex)

}

console.log(listOfImages)