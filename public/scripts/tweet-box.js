$(document).ready(function () {
    
    const writeTweet =  document.getElementsByClassName('tweet')[0];
    console.log(writeTweet);

    writeTweet.addEventListener('click', function(){
        const $form = $('.new-tweet');
        $form.slideToggle();

        console.log(form);
    })

});


// tweetText.addEventListener("input", function () {
//     let char = this.value.length;
//     let counter = 140 - char;

//     document.getElementsByClassName("counter")[0].innerHTML = counter;

//     let styleChange = document.getElementsByClassName("counter")[0];
//     if (counter <= -1) {
//         styleChange.classList.add('red');
//     }

//     if (counter >= 0) {
//         styleChange.classList.remove('red');
//     }
// });