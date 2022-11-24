var eye = document.getElementById('eye');
var box = document.getElementById("box");
let count = 0;

eye.addEventListener('click', click_eye);

box.style.visibility = "hidden";

function click_eye() {
    count++;
    console.log(count);
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    if (count === 1) {
        eye.style.width = '100px';
        eye.style.height = '100px';
        box.style.visibility = "visible";
    } else if (count === 2){
        text1.style.marginTop = "20px";
        text2.style.marginTop = "20px";
        img1.src="profile-pics.png";
        img2.src="SocialMedia.jpeg";
    } else if (count === 3) {
        img1.src="profile-layout.jpeg";
        img2.src="fakeNews.png";
    } else if (count === 4) {
        text1.innerHTML = "Physical property";
        text2.innerHTML = "Authorship / copyright";
        text1.style.marginTop = "300px";
        text2.style.marginTop = "300px";
        img1.src = "transparent.png";
        img2.src = "transparent.png";
    } else if (count === 5) {
        text1.innerHTML = "When you see the Apple Logo, you think of the fruit";
        text2.innerHTML = "OR electronics...?";
        text1.style.marginTop = "20px";
        text2.style.marginTop = "20px";
        img1.src = "apple.png";
        img2.src = "appleItem.png";
        img2.style.marginTop = "100px";
    } else if (count === 6) {
        count = 1;
        text1.innerHTML = "Who are you";
        text2.innerHTML = "The world in your eyes";
        text1.style.marginTop = "300px";
        text2.style.marginTop = "300px";
        img1.src = "transparent.png";
        img2.src = "transparent.png";
        img2.style.marginTop = 0;
    }
}