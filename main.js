// References to DOM Elements
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const book = document.getElementById("book");
const openBtn = document.getElementById("open-btn");
const buttonContainer = document.querySelector('.button-container');
const bgMusic = document.getElementById('bgMusic');
const musicOverlay = document.getElementById('musicOverlay');

// Paper elements
const paper1 = document.getElementById("p1");
const paper2 = document.getElementById("p2");
const paper3 = document.getElementById("p3");
const paper4 = document.getElementById("p4");
const paper5 = document.getElementById("p5");
const paper6 = document.getElementById("p6");
const paper7 = document.getElementById("p7");
const paper8 = document.getElementById("p8");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
openBtn.addEventListener("click", openFirstPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

// Solusi Chrome Autoplay Policy
function enableAutoplay() {
    bgMusic.muted = false;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Fallback untuk browser yang memblok autoplay
            musicOverlay.style.display = 'block';
        });
    }
}

// Trigger autoplay setelah interaksi pertama
musicOverlay.addEventListener('click', () => {
    bgMusic.play();
    musicOverlay.style.display = 'none';
});

// Coba autoplay saat load
window.addEventListener('load', () => {
    bgMusic.volume = 0.3; // Volume rendah
    enableAutoplay();
});

// Open Book Function
function openFirstPage() {
    buttonContainer.classList.add('show-buttons');
    paper1.classList.add("flipped");
    paper1.style.zIndex = 1;
    currentLocation = 2;
    
    // Debugging
    console.log("Tombol Open disembunyikan");
    console.log("Tombol navigasi ditampilkan");
    openBook();
    paper1.classList.add("flipped");
    paper1.style.zIndex = 1;
    currentLocation = 2;
}

function openBook() {
    openBtn.style.display= "none"
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(10px)";
    nextBtn.style.transform = "translateX(10px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
        book.style.boxShadow = "none";
    } else {
        book.style.transform = "translateX(100%)";
        book.style.boxShadow = "none";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                buttonContainer.classList.remove('show-buttons');
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 8;
                currentLocation = 1;
                openBtn.style.display = "block"
                closeBook(true)
                
                // Debugging
                console.log("Kembali ke halaman utama");
                console.log("Tombol Open ditampilkan kembali");
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 7;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 6;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 5;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 4;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 3;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 2;
                break;
            case 9:
                openBook();
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}
