$(document).ready(function () {
    // $.ajax({
    //     url: '/initial-tweets.json',
    //     method: 'GET',
    //     dataType: 'json',
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error: function (err) {
    //         console.err(err);

    //     }
    // });

    const tweetData = {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png",
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    }

    function createTweetElement(post){
        const $location = $('#tweets-container');
        const $header = $(`<header> <div> <p><img src="${tweetData.user.avatars}" alt=""> ${tweetData.user.name}</p><p class="handle">${tweetData.user.handle}</p></div></header>`);

        const $div = $('<div>');
        const $footer = $('<footer>')

        const $logos = $(`<div class="logos"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i> </div>`)
        const $date = $(`<div class="date">${tweetData.created_at}</div>`);
        const $content = $(`<p>${tweetData.content.text}</p>`);
        const $tweetInfo = $div.append($content);
        const $footerInfo = $footer.append($date, $logos);
        const $complete = $location.append($header, $tweetInfo, $footerInfo);

        return $complete;

    };

 

    const $tweet = createTweetElement(tweetData);

    // Test / driver code (temporary)
    console.log($tweet); // to see what it looks like
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



    console.log($tweet);
})
