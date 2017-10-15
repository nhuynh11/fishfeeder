<script src="//cdn.pubnub.com/pubnub-3.7.18.min.js"></script>
// keys for pubnub
var pubnub = PUBNUB({
    　subscribe_key : 'sub-c-50867924-b132-11e7-85f8-821de3cbacaa',                          
    　publish_key   : 'pub-c-cb9e8d3b-884b-4c46-a2fa-0d4e9861b724'
});

var feed = document.getElementById('feed');

feed.addEventListener('click', function(){
    pubnub.publish({
        channel: 'feeder',
        message: {action: 'feed'}
    });
});