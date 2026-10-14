(function () {
  var S = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  // ---- Hero video (optional) ----
  if (S.heroVideo) {
    var v = document.createElement('video');
    v.className = 'hero-video';
    v.src = S.heroVideo;
    v.muted = true; v.loop = true; v.autoplay = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('aria-hidden', 'true');
    $('.hero-media').prepend(v);
    v.play && v.play().catch(function () {});
  }

  // ---- Compare slider markup ----
  function afterMedia(a) {
    if (!a) return '';
    if (a.type === 'video') {
      return '<video src="' + esc(a.src) + '"' + (a.poster ? ' poster="' + esc(a.poster) + '"' : '') +
        ' muted loop autoplay playsinline preload="metadata"></video>';
    }
    return '<img src="' + esc(a.src) + '" alt="Generated ad" loading="lazy">';
  }

  function slide(ex) {
    var angles = (ex.angles || []).map(function (s) {
      return '<img src="' + esc(s) + '" alt="Input photo, another angle" loading="lazy">';
    }).join('');
    return '<article class="slide">' +
      '<div class="cmp" style="--ratio:' + esc(ex.ratio || '1 / 1') + '">' +
        '<div class="layer before"><img src="' + esc(ex.before) + '" alt="Original product photo" loading="lazy"></div>' +
        '<div class="layer after">' + afterMedia(ex.after) + '</div>' +
        '<div class="handle"></div>' +
        '<span class="tagl">Ad</span><span class="tagr">Photo</span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Compare original photo and generated ad">' +
      '</div>' +
      '<div class="meta"><h3>' + esc(ex.title) + '</h3><p>' + esc(ex.note) + '</p>' +
        (angles ? '<div class="angles"><small>Inputs</small>' + angles + '</div>' : '') +
      '</div></article>';
  }

  function demoSlide() {
    return '<article class="slide">' +
      '<div class="cmp demo">' +
        '<div class="layer before"><span>Original product photo</span></div>' +
        '<div class="layer after"><span>Generated ad</span></div>' +
        '<div class="handle"></div>' +
        '<span class="tagl">Ad</span><span class="tagr">Photo</span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Slider layout preview">' +
      '</div>' +
      '<div class="meta"><h3>Layout preview</h3>' +
        '<p>Real before/after examples are being added. Drag the slider to see how they will look.</p></div>' +
      '</article>';
  }

  var track = $('#track');
  var examples = (S.examples || []).filter(function (e) { return e && e.before && e.after; });
  track.innerHTML = examples.length ? examples.map(slide).join('') : demoSlide();
  if (examples.length < 2) $('#arrows').hidden = true;

  // slider interaction
  track.addEventListener('input', function (e) {
    if (e.target.matches('.cmp input[type=range]')) {
      e.target.closest('.cmp').style.setProperty('--pos', e.target.value + '%');
    }
  });

  // carousel arrows
  function step(dir) {
    var first = track.querySelector('.slide');
    var w = first ? first.getBoundingClientRect().width + 22 : 400;
    track.scrollBy({ left: dir * w, behavior: 'smooth' });
  }
  $('#prev').addEventListener('click', function () { step(-1); });
  $('#next').addEventListener('click', function () { step(1); });

  // ---- Stats ----
  if ((S.stats || []).length) {
    $('#results').hidden = false;
    $('#statsGrid').innerHTML = S.stats.map(function (s) {
      return '<div class="stat"><strong>' + esc(s.value) + '</strong><span>' + esc(s.label) + '</span></div>';
    }).join('');
  }

  // ---- Build log ----
  $('#logList').innerHTML = (S.log || []).length
    ? S.log.map(function (l) {
        return '<li><time>' + esc(l.date) + '</time><h3>' + esc(l.title) + '</h3><p>' + esc(l.text) + '</p></li>';
      }).join('')
    : '<li><h3>Updates coming</h3><p>Progress will be posted here with dates as things ship.</p></li>';

  // ---- Contact ----
  if (S.email) {
    $('#contactRow').hidden = false;
    $('#contactBtn').href = 'mailto:' + S.email;
  }

  $('#yr').textContent = new Date().getFullYear();

  // ---- Reveal on scroll ----
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
