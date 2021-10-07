

$(document).ready(function () {

    const loadTweets = () => {
        $.ajax({
            url: '/tweets',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.err(err);

            }
        });
    }

    loadTweets();


    const data = [
        {
            "user": {
                "name": "Newton",
                "avatars": "https://i.imgur.com/73hZDYK.png"
                ,
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": "https://i.imgur.com/nlhLi3I.png",
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        }
    ]


    const createTweetElement = function (obj) {
        const $location = $('#tweets-container');
        const $header = $(`<header> <div> <p><img src="${obj.user.avatars}" alt=""> ${obj.user.name}</p><p class="handle">${obj.user.handle}</p></div></header>`);

        const $div = $('<div>');
        const $footer = $('<footer>');

        const $article = $('<article>');
        const $logos = $(`<div class="logos"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i> </div>`)
        const $date = $(`<div class="date need_to_be_rendered" datetime="${obj.created_at}"></div>`);
        const $content = $(`<p>${obj.content.text}</p>`);
        const $tweetInfo = $div.append($content);
        const $footerInfo = $footer.append($date, $logos);

        const $articles = $article.append($header, $tweetInfo, $footerInfo);

        const $complete = $location.append($articles);
        return $complete;
    };


    const renderTweets = function (tweets) {
        for (const tweet in tweets) {
            // console.log(tweets[tweet]);
            createTweetElement(tweets[tweet]);
        }

    }

    renderTweets(data);

    timeago.render(document.querySelectorAll('.need_to_be_rendered'));

    const $form = $('#new-tweet');

    $form.on('submit', function (e) {
        e.preventDefault();

        const serializeData = $(this).serialize();

        $.post('/tweets', serializeData, (r) => {
            console.log(r);
            console.log('yes');
        })
        
    });

})
