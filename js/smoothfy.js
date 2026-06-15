document.querySelectorAll('[data-tab]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var tabId = link.dataset.tab;
        document.querySelectorAll('.tabs a').forEach(function(a) { a.classList.remove('active'); });
        document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
        var navLink = document.querySelector('.tabs a[data-tab="' + tabId + '"]');
        if (navLink) navLink.classList.add('active');
        var content = document.getElementById('tab-' + tabId);
        if (content) content.classList.add('active');
    });
});
