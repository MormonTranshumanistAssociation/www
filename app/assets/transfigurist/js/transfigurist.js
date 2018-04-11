/* eslint-disable */

function getBlogPostImage(title, link, callback) {
  $.ajax({
    url: link,
    dataType: 'html',
    success: function(data) {
      var image;
      var images = $(data).find("meta[itemprop='image']");
      for (var i = 0; i < images.length; i++) {
        if (images[i].parentNode.getAttribute('itemprop') === 'blogPost') {
          image = images[i].getAttribute('content');
          break;
        }
      }
      callback(title, link, image);
    },
  });
}

function parseRSS(link, callback) {
  $.ajax({
    url:
      document.location.protocol +
      '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' +
      encodeURIComponent(link),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    },
  });
}

function getBlogPostCards() {
  parseRSS(
    'http://www.transfigurist.org/feeds/posts/default?max-results=7&redirect=false&alt=rss&orderby=published',
    function(feed) {
      for (var i = 1; i < feed.entries.length; i++) {
        getBlogPostImage(feed.entries[i].title, feed.entries[i].link, function(title, link, image) {
          if (image === undefined) image = 'http://transfigurism.org/assets/142/mta-banner.png';
          if ($('#recent-articles').children().length % 2 == 0) {
            $('#recent-articles').append(
              "<a class='recent-article recent-article-left' href='" +
                link +
                "'><img src='" +
                image +
                "'><div class='recent-article-title'>" +
                title +
                '</div></a>',
            );
          } else {
            $('#recent-articles').append(
              '<a class="recent-article recent-article-right" href="' +
                link +
                '"><img src="' +
                image +
                '"><div class="recent-article-title">' +
                title +
                '</div></a>',
            );
          }
        });
      }
    },
  );
}

function configurePage() {
  if ($('#recent-articles').length > 0) getBlogPostCards();
}
