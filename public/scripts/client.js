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


    const createTweetElement = function (obj) {
        const $location = $('#tweets-container');
        const $header = $(`<header> <div> <p><img src="${obj.user.avatars}" alt=""> ${obj.user.name}</p><p class="handle">${obj.user.handle}</p></div></header>`);
        const $div = $('<div>');

        const $formattedDate = timeago.format(obj.created_at);
        
        const $footer = $(`<footer><div class="date need_to_be_rendered" datetime="1633639091411">${$formattedDate}</div><div class="logos"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i> </div></footer>`)


        //const $footer = $('<footer>');
        const $article = $('<article>');
       // const $logos = $(`<div class="logos"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i> </div>`)
       // const $date = $(`<div class="date need_to_be_rendered" datetime="${obj.created_at}">${$formattedDate}</div>`);
       // console.log('DATE',$date);

        const $content = $(`<p>${obj.content.text}</p>`);
        const $tweetInfo = $div.append($content);
        //const $footerInfo = $footer.append($date, $logos);
        const $articles = $article.append($header, $tweetInfo, $footer);

        const $complete = $location.prepend($articles);
        return $complete;
    };


    const renderTweets = function (tweets) {
        $('#tweets-container').empty();

        for (const tweet in tweets) {
            createTweetElement(tweets[tweet]);
        }
    }

    const $form = $('#new-tweet');



    $form.on('submit', function (e) {
        e.preventDefault();


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
                console.log('form',form); 
                console.log()

                const serializedData = $(form).serialize();
                $.post('/tweets', serializedData).then(loadTweets).then($('#tweet-text').val(''),console.log('test'));
            }
        });

        
    });

})

