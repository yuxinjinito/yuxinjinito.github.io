(function () {
  'use strict';

  // ===== Gallery Data =====
  // Each key is a tab id matching the nav links.
  // Replace placeholder URLs with your own photos.
  const galleries = {
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

  // ===== DOM References =====
  const gallerySection = document.getElementById('gallery');
  const tabLinks = document.querySelectorAll('.tab-nav a');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const btnClose = lightbox.querySelector('.lightbox-close');
  const btnPrev = lightbox.querySelector('.lightbox-prev');
  const btnNext = lightbox.querySelector('.lightbox-next');

  let currentPhotos = [];
  let currentIndex = 0;

  // ===== Render Gallery =====
  function renderGallery(key) {
    const data = galleries[key];
    if (!data) {
      gallerySection.innerHTML =
        '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>' +
        '<p>Photos coming soon...</p></div>';
      return;
    }

    currentPhotos = data.photos;

    let html = '<h3 class="gallery-title">' + data.title + '</h3>';
    html += '<div class="photo-grid">';
    data.photos.forEach(function (photo, i) {
      html +=
        '<div class="photo-item" data-index="' + i + '">' +
        '<img src="' + photo.src + '" alt="' + photo.caption + '" loading="lazy">' +
        '<div class="photo-caption">' + photo.caption + '</div>' +
        '</div>';
    });
    html += '</div>';

    gallerySection.innerHTML = html;

    document.querySelectorAll('.photo-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLightbox(parseInt(this.dataset.index));
      });
    });
  }

  // ===== Tab Switching =====
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
  }

  function updateLightbox() {
    const photo = currentPhotos[currentIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentPhotos.length;
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

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  // ===== Init =====
  var initialTab = location.hash ? location.hash.slice(1) : 'spain';
  if (!galleries[initialTab]) initialTab = 'spain';
  setActiveTab(initialTab);
})();
