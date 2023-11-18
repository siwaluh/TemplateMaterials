(function (a, b) {
  function multiAttr(elemnt, obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        elemnt.setAttribute(key, obj[key]);
      }
    }
    return elemnt;
  }
  let animeDex = a.getElementById('animeDex'),
    bg = a.createElement('div'),
    iframe = a.createElement('iframe'),
    param = new URLSearchParams(a.location.search),
    paramEp = param.get('episode');

  bg.innerHTML = "<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgScItJKPPM97KEYHTQG6kdwKyvA666o00nHRnsyF7zzas7CKAv3xWYDC4ljq0bw4zJqZCUiIlkOrGzVK8fVYY9Rpj5-MO898ZCgo04FOgZOv_gEmSYYtRq_nb5WvPbBn9CSBfUdnQLmOTkYnrguuQ4733PcFE0dFtcn-YyYwLuNLo3GBasNw-pIakPJLE/s750/1163369.jpg' alt='streaming'><div class='bg-icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /></svg></div>";
  bg.className = 'bg-play';

  iframe = multiAttr(iframe, {
    'referrerpolicy': 'no-referrer-when-downgrade',
    'width': '100%',
    'height': '100%',
    'frameborder': '0',
    'allow': 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    'allowfullscreen': 'allowfullscreen'
  });

  if (animeDex && typeof streamDexFiles == 'object' && streamDexFiles.length != 0) {
    let selectItem = animeDex.querySelectorAll('.selectItem'),
      vidTitle = animeDex.querySelector('.vid-title'),
      vid = animeDex.querySelector('.vid');
    bg.addEventListener('click', () => {
      let d = bg.getAttribute('data-embed');
      if (!d) return;
      vid.innerHTML = '';
      iframe.src = d;
      vid.appendChild(iframe);
    })

    function serverHtml(e, c, k) {
      let d = a.createElement('li');
      if (c)
        d.className = 'active';
      if (k) {
        d.setAttribute('data-embed', e.url);
        d.innerHTML = `<span>${e.name}</span>`;
        d.addEventListener('click', () => {
          addVideo(e.url);
          let el = d.parentElement.childNodes;
          el.forEach(item => item.classList.remove('active'));
          d.classList.add('active');
        });
      } else {
        d.setAttribute('data-episode', e.episode);
        d.setAttribute('data-title', e.title);
        d.innerHTML = `<span>${e.episode}</span>`;
        d.addEventListener('click', () => {
          let ep = d.getAttribute('data-episode'),
            title = d.getAttribute('data-title'),
            link = new URL(a.location.href);
          link.searchParams.set('episode', ep);
          window.history.replaceState({}, title, link);
          param = new URLSearchParams(a.location.search);
          paramEp = ep;
          run();
          animeDex.scrollIntoView({
            'top': 0,
            'behavior': 'smooth'
          })
        })
      }
      return d;
    };

    function downloadHtml(e) {
      let c = a.createElement('li');
      c.innerHTML = `<span><a href='${e.url}' target='_blank'>${e.name}</a></span>`;
      return c;
    }

    function addVideo(embed) {
      iframe.src = embed;
      if (vid.firstChild.nodeName != 'IFRAME') {
        vid.innerHTML = '';
        vid.appendChild(iframe);
      }
    };

    function showHideEl(element, hideShow) {
      let prev = element.previousElementSibling;
      if (hideShow) {
        if (prev && prev.nodeName == 'H4')
          prev.style.display = 'none';
        element.style.display = 'none';
      } else {
        if (prev && prev.nodeName == 'H4')
          prev.style.display = '';
        element.style.display = '';
      }
    }

    function run() {
      let files = paramEp ? (streamDexFiles.find(k => k.episode == paramEp) || streamDexFiles[0]) : streamDexFiles[0];
      selectItem.forEach(item => {
        let sItem = item.querySelector('.s-item'),
          type = item.getAttribute('data-type');
        sItem.innerHTML = '';
        if (type == 'server' && 'server' in files) {
          files.server.forEach((item, index) => {
            index = index == 0 ? true : false;
            let el = serverHtml(item, index, true);
            if (index) {
              bg.setAttribute('data-embed', item.url);
              vid.innerHTML = '';
              vid.appendChild(bg);
            }
            sItem.appendChild(el);
          })
        }

        if (type == 'episode') {
          streamDexFiles.forEach((item, index) => {
            let check = paramEp && paramEp == item.episode || index == 0 && !paramEp ? true : false,
              el = serverHtml(item, check, false);
            sItem.appendChild(el);
          })
        }

        if (type == 'download') {
          if ('download' in files) {
            files.download.forEach(download => {
              let elD = downloadHtml(download);
              sItem.appendChild(elD);
            });
            showHideEl(item, false);
          } else {
            showHideEl(item, true);
          }
        }
      });
      if(vidTitle) {
        vidTitle.innerHTML = files.title;
      }
    };

    run();

  }

})(document, window);