(function () {
  'use strict';

  var HEART_SVG = '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  var SHARE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';

  var shareEnPlatforms = [
    { name: 'Facebook', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>', url: function(u,t){ return 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(u); } },
    { name: 'X', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', url: function(u,t){ return 'https://twitter.com/intent/tweet?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t); } },
    { name: 'Pinterest', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>', url: function(u,t){ return 'https://pinterest.com/pin/create/button/?url='+encodeURIComponent(u)+'&description='+encodeURIComponent(t); } },
    { name: 'Tumblr', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.168z"/></svg>', url: function(u,t){ return 'https://www.tumblr.com/widgets/share/tool?canonicalUrl='+encodeURIComponent(u)+'&title='+encodeURIComponent(t); } },
    { name: 'Email', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>', url: function(u,t){ return 'mailto:?subject='+encodeURIComponent(t)+'&body='+encodeURIComponent(u); } },
  ];

  // ===== Likes (localStorage) =====
  var LIKES_KEY = 'photo-likes';
  var LIKED_KEY = 'photo-liked';

  function getLikes() {
    try { return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}; } catch (e) { return {}; }
  }

  function addLike(key) {
    var likes = getLikes();
    likes[key] = (likes[key] || 0) + 1;
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
    return likes[key];
  }

  function getLikeCount(key) {
    return getLikes()[key] || 0;
  }

  function isLiked(key) {
    var liked = JSON.parse(localStorage.getItem(LIKED_KEY) || '[]');
    return liked.indexOf(key) !== -1;
  }

  function markLiked(key) {
    var liked = JSON.parse(localStorage.getItem(LIKED_KEY) || '[]');
    if (liked.indexOf(key) === -1) liked.push(key);
    localStorage.setItem(LIKED_KEY, JSON.stringify(liked));
  }

  function likeKey(tab, index) {
    return tab + ':' + index;
  }

  // ===== Gallery Data =====
  var galleries = {
    spain: {
      title: 'Barcelona, Spain',
      photos: [
        { src: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800', caption: 'Sagrada Familia' },
        { src: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800', caption: 'Park Güell' },
        { src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', caption: 'Gothic Quarter' },
        { src: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800', caption: 'La Boqueria Market' },
        { src: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800', caption: 'Casa Batlló' },
        { src: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=800', caption: 'Barcelona Beach' },
      ],
    },
    france: {
      title: 'Southern France',
      photos: [
        { src: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800', caption: 'Provence Lavender' },
        { src: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800', caption: 'Nice Coastline' },
        { src: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=800', caption: 'Monaco Harbor' },
        { src: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800', caption: 'Carcassonne' },
        { src: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=800', caption: 'French Riviera' },
      ],
    },
    italy: {
      title: 'Italy',
      photos: [
        { src: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800', caption: 'Venice Canals' },
        { src: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800', caption: 'Colosseum, Rome' },
        { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800', caption: 'Amalfi Coast' },
        { src: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=800', caption: 'Florence Duomo' },
        { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800', caption: 'Cinque Terre' },
        { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800', caption: 'Tuscany Hills' },
      ],
    },
    switzerland: {
      title: 'Switzerland',
      photos: [
        { src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800', caption: 'Swiss Alps' },
        { src: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800', caption: 'Lake Lucerne' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: 'Matterhorn' },
        { src: 'https://images.unsplash.com/photo-1517490232338-06b912a786b5?w=800', caption: 'Interlaken' },
      ],
    },
    germany: {
      title: 'Germany',
      photos: [
        { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', caption: 'Neuschwanstein Castle' },
        { src: 'https://images.unsplash.com/photo-1554072675-d532a40ffa0a?w=800', caption: 'Berlin Wall' },
        { src: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800', caption: 'Cologne Cathedral' },
        { src: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800', caption: 'Munich' },
      ],
    },
    hawaii: {
      title: 'Hawaii',
      photos: [
        { src: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800', caption: 'Waikiki Beach' },
        { src: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800', caption: 'Na Pali Coast' },
        { src: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800', caption: 'Maui Sunset' },
        { src: 'https://images.unsplash.com/photo-1483168527879-c66136b56105?w=800', caption: 'Volcanoes National Park' },
        { src: 'https://images.unsplash.com/photo-1573551089042-50e0a9ffa552?w=800', caption: 'Hanauma Bay' },
      ],
    },
    newzealand: {
      title: 'New Zealand',
      photos: [
        { src: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800', caption: 'Milford Sound' },
        { src: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800', caption: 'Queenstown' },
        { src: 'https://images.unsplash.com/photo-1508860662824-c0bb10952529?w=800', caption: 'Lake Tekapo' },
        { src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405a6?w=800', caption: 'Hobbiton' },
      ],
    },
    japan: {
      title: 'Japan',
      photos: [
        { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Fushimi Inari Shrine' },
        { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', caption: 'Tokyo Tower' },
        { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Cherry Blossoms' },
        { src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800', caption: 'Bamboo Forest' },
        { src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800', caption: 'Mount Fuji' },
        { src: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800', caption: 'Osaka Street' },
      ],
    },
    china: {
      title: 'China',
      photos: [
        { src: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800', caption: 'Great Wall' },
        { src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800', caption: 'Shanghai Skyline' },
        { src: 'https://images.unsplash.com/photo-1537531383496-f4749b918cbe?w=800', caption: 'Zhangjiajie' },
        { src: 'https://images.unsplash.com/photo-1513755743425-4afb29ec1e7e?w=800', caption: 'Li River, Guilin' },
        { src: 'https://images.unsplash.com/photo-1474181628669-e4be1436afd7?w=800', caption: 'Forbidden City' },
      ],
    },
    california: {
      title: 'California',
      photos: [
        { src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800', caption: 'Golden Gate Bridge' },
        { src: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800', caption: 'Yosemite Valley' },
        { src: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=800', caption: 'Pacific Coast Highway' },
        { src: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800', caption: 'Los Angeles' },
      ],
    },
    england: {
      title: 'England',
      photos: [
        { src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', caption: 'Tower Bridge, London' },
        { src: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800', caption: 'Big Ben' },
        { src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800', caption: 'London Eye' },
        { src: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800', caption: 'Stonehenge' },
        { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', caption: 'Oxford' },
      ],
    },
  };

  // ===== DOM =====
  var gallerySection = document.getElementById('gallery');
  var tabLinks = document.querySelectorAll('.tab-nav a');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var lightboxCounter = lightbox.querySelector('.lightbox-counter');
  var lightboxLike = lightbox.querySelector('.lightbox-like');
  var btnClose = lightbox.querySelector('.lightbox-close');
  var btnPrev = lightbox.querySelector('.lightbox-prev');
  var btnNext = lightbox.querySelector('.lightbox-next');

  var currentPhotos = [];
  var currentIndex = 0;
  var currentTab = 'spain';

  // ===== Render =====
  function renderGallery(key) {
    currentTab = key;
    var data = galleries[key];
    if (!data) {
      gallerySection.innerHTML =
        '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>' +
        '<p>Photos coming soon...</p></div>';
      return;
    }

    currentPhotos = data.photos;

    var html = '<h3 class="gallery-title">' + data.title + '</h3>';
    html += '<div class="photo-grid">';
    data.photos.forEach(function (photo, i) {
      var k = likeKey(key, i);
      var liked = isLiked(k);
      var count = getLikeCount(k);
      html +=
        '<div class="photo-item" data-index="' + i + '">' +
        '<img src="' + photo.src + '" alt="' + photo.caption + '" loading="lazy">' +
        '<div class="photo-caption">' + photo.caption + '</div>' +
        '<button class="photo-share" data-caption="' + photo.caption + '">' + SHARE_SVG + '</button>' +
        '<button class="photo-like' + (liked ? ' liked' : '') + '" data-key="' + k + '">' +
          HEART_SVG +
          '<span class="like-num">' + (count > 0 ? count : '') + '</span>' +
        '</button>' +
        '</div>';
    });
    html += '</div>';

    gallerySection.innerHTML = html;

    document.querySelectorAll('.photo-item').forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target.closest('.photo-like') || e.target.closest('.photo-share')) return;
        openLightbox(parseInt(this.dataset.index));
      });
    });

    document.querySelectorAll('.photo-share').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        openSharePopup(this.dataset.caption || 'Travel Memo');
      });
    });

    document.querySelectorAll('.photo-like').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var k = this.dataset.key;
        if (isLiked(k)) return;
        markLiked(k);
        var n = addLike(k);
        this.classList.add('liked', 'pop');
        this.querySelector('.like-num').textContent = n;
        var self = this;
        setTimeout(function () { self.classList.remove('pop'); }, 500);
      });
    });
  }

  // ===== Tabs =====
  function setActiveTab(key) {
    tabLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.tab === key);
    });
    renderGallery(key);
    history.replaceState(null, '', '#' + key);
  }

  tabLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setActiveTab(this.dataset.tab);
    });
  });

  // ===== Lightbox =====
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    renderGallery(currentTab);
  }

  function updateLightbox() {
    var photo = currentPhotos[currentIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentPhotos.length;

    var k = likeKey(currentTab, currentIndex);
    var liked = isLiked(k);
    var count = getLikeCount(k);
    lightboxLike.className = 'lightbox-like' + (liked ? ' liked' : '');
    lightboxLike.querySelector('.like-num').textContent = count > 0 ? count : '';
    lightboxLike.dataset.key = k;
  }

  function prevPhoto() {
    currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightbox();
  }

  function nextPhoto() {
    currentIndex = (currentIndex + 1) % currentPhotos.length;
    updateLightbox();
  }

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', prevPhoto);
  btnNext.addEventListener('click', nextPhoto);

  lightboxLike.addEventListener('click', function () {
    var k = this.dataset.key;
    if (isLiked(k)) return;
    markLiked(k);
    var n = addLike(k);
    this.classList.add('liked', 'pop');
    this.querySelector('.like-num').textContent = n;
    var self = this;
    setTimeout(function () { self.classList.remove('pop'); }, 500);
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  // ===== Lightbox Share =====
  var lightboxShareBtn = document.getElementById('lightbox-share-btn');
  lightboxShareBtn.addEventListener('click', function () {
    var photo = currentPhotos[currentIndex];
    openSharePopup(photo ? photo.caption : 'Travel Memo');
  });

  // ===== Share Popup =====
  var shareOverlay = document.getElementById('share-overlay');
  var shareCloseBtn = document.getElementById('share-close');
  var shareIconsEl = document.getElementById('share-icons');
  var shareLinkInput = document.getElementById('share-link-input');
  var shareLinkCopy = document.getElementById('share-link-copy');
  var COPY_ICON = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var CHECK_ICON = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';

  function openSharePopup(title) {
    var pageUrl = window.location.href;
    shareIconsEl.innerHTML = shareEnPlatforms.map(function (p) {
      return '<button class="share-icon-btn" title="' + p.name + '">' + p.icon + '</button>';
    }).join('');

    shareLinkInput.value = pageUrl;

    shareIconsEl.querySelectorAll('.share-icon-btn').forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var url = shareEnPlatforms[i].url(pageUrl, title);
        if (url) window.open(url, '_blank', 'width=600,height=500');
      });
    });

    shareOverlay.classList.add('open');
  }

  function closeSharePopup() {
    shareOverlay.classList.remove('open');
  }

  shareCloseBtn.addEventListener('click', closeSharePopup);
  shareOverlay.addEventListener('click', function (e) {
    if (e.target === shareOverlay) closeSharePopup();
  });

  shareLinkCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(shareLinkInput.value);
    this.classList.add('copied');
    this.innerHTML = CHECK_ICON;
    var self = this;
    setTimeout(function () {
      self.classList.remove('copied');
      self.innerHTML = COPY_ICON;
    }, 2000);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && shareOverlay.classList.contains('open')) closeSharePopup();
  });

  // ===== Init =====
  var initialTab = location.hash ? location.hash.slice(1) : 'spain';
  if (!galleries[initialTab]) initialTab = 'spain';
  setActiveTab(initialTab);
})();
