self.addEventListener('fetch', function(event) {
    // ignore anything other than GET requests
    var url = decodeURIComponent(event.request.url),
        urlToMatch = 'http://localhost:3333/catchme.html',
        responseText = 'request caught by service worker';

    event.respondWith(
        fetch(url).then(function(res) {
            if (res.status !== 200) {
                if (url === urlToMatch) return (new Response(responseText));
            } else {
                return res;
            }
        }).catch(function(err) {
            if (url === urlToMatch) return (new Response("Catch "));
        })
    );

});
