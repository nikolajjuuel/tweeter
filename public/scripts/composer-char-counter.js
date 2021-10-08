$(document).ready(function () {
    const tweetText = document.getElementById("tweet-text");

    tweetText.addEventListener("input", function () {
        let char = this.value.length;
        let counter = 140 - char;

        document.getElementsByClassName("counter")[0].innerHTML = counter;

        let styleChange = document.getElementsByClassName("counter")[0];
        if (counter <= -1) {
            styleChange.classList.add('red');
        }

        if (counter >= 0) {
            styleChange.classList.remove('red');
        }
    });

});