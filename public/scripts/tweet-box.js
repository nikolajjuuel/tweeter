$(document).ready(function () {    
    const writeTweet =  document.getElementsByClassName('tweet')[0];

    writeTweet.addEventListener('click', function(){
        const $form = $('.new-tweet');
        const focusForm= document.getElementById('tweet-text');
        $form.slideToggle()

        focusForm.focus()
    })

});
