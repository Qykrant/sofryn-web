(function () {
    'use strict';

    function finishLoading() {
        document.body.classList.add('page-ready');
    }

    window.addEventListener('load', finishLoading, { once: true });
    window.addEventListener('pageshow', function () {
        document.body.classList.remove('page-leaving');
    });

    document.querySelectorAll('a[href]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var url = new URL(link.href, window.location.href);
            var isSamePageHash = url.pathname === window.location.pathname && url.hash;
            var isInternalPage = url.origin === window.location.origin && /\.html$/.test(url.pathname);

            if (!isInternalPage || isSamePageHash || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }

            event.preventDefault();
            document.body.classList.add('page-leaving');
            window.setTimeout(function () {
                window.location.href = url.href;
            }, 320);
        });
    });
}());
