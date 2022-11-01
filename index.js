

function progressDisp1() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "30%";
    document.getElementById("htmlcssjs").style.display = "block";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp2() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "25%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "block";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp3() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "50%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "block";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp4() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "5%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "block";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp5() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "15%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "block";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp6() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "15%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "block";
    document.getElementById("cpp-prog").style.display = "none";
}
function progressDisp7() {
    document.getElementById("level-count").style.display = "block";
    document.getElementById("first").style.width = "20%";
    document.getElementById("htmlcssjs").style.display = "none";
    document.getElementById("react").style.display = "none";
    document.getElementById("python").style.display = "none";
    document.getElementById("node").style.display = "none";
    document.getElementById("mysql").style.display = "none";
    document.getElementById("java").style.display = "none";
    document.getElementById("cpp-prog").style.display = "block";
}



document.addEventListener('DOMContentLoaded',(event) => {
        var dataText = ["Tirth Patel","a Web Developer", "a Data Analyst", "a ML enthusiast", "Tirth Patel"];
        function typeWriter(text, i, fnCallback) {
            if (i < (text.length)) {
                document.querySelector('span[class="webdev-para change"]').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            }
            else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 700);
            }
        }
        function StartTextAnimation(i) {
            if (typeof dataText[i] == 'undefined') {
                setTimeout(function () {
                    StartTextAnimation(0);
                }, 20000);
            }
            if (i < dataText[i].length) {
                typeWriter(dataText[i], 0, function () {
                    StartTextAnimation(i + 1);
                });
            }
        }
        StartTextAnimation(0);
    });