$(document).ready(function () {
    const loadTweets = () => {
        $.ajax({
            url: '/tweets',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                renderTweets(data);
            },
            error: function (err) {
                console.err(err);

            }
        });
    }

    loadTweets();

    //creates and prepends data onto index page
    const createTweetElement = function (obj) {
        const formattedDate = timeago.format(obj.created_at);

        const $createLocation = $('#tweets-container');
        const $article = $('<article>');
        const $header = $(`<header> <div> <p><img src="${obj.user.avatars}" alt=""> ${obj.user.name}</p><p class="handle">${obj.user.handle}</p></div></header>`);
        const $content = $(`<div><p>${obj.content.text}</p></div>`);
        const $footer = $(`<footer><div class="date need_to_be_rendered" datetime="1633639091411">${formattedDate}</div><div class="logos"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div></footer>`)

        const $articles = $article.append($header, $content, $footer);
        const $elementCreate = $createLocation.prepend($articles);

        return $elementCreate;
    };


    const renderTweets = function (tweets) {
        //stops data from being dublicated
        $('#tweets-container').empty();

        for (const tweet in tweets) {
            createTweetElement(tweets[tweet]);
        }
    }

    const $form = $('#new-tweet');
    $form.on('submit', function (e) {
        e.preventDefault();

        //jquery validator rules and messages
        $('#new-tweet').validate({
            rules: {
                text: {
                    required: true,
                    minlength: 1,
                    maxlength: 140
                },
            },
            messages: {
                text: {
                    required: 'Please insert your deep thought above',
                    minlength: 'Please insert your thought above',
                    maxlength: 'This hum is too long, please shorten it!'
                },

            },
            submitHandler: function (form) {
                const serializedData = $(form).serialize();
                $.post('/tweets', serializedData).then(loadTweets).then($('#tweet-text').val(''), console.log('test'));
            }
        });


    });

})

