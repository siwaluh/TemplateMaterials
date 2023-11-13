(function (a, b) {
  //Dark Mode
  let root = a.documentElement || a.getElementsByTagName('html')[0],
    mode = a.getElementById('mode');
  if (typeof localStorage != 'undefined' && mode) {
    let checkMode = localStorage.getItem('data-tema');
    if (checkMode) {
      mode.checked = true;
      root.setAttribute('data-tema', 'gelap');
    } else {
      mode.checked = false;
      root.removeAttribute('data-tema');
    };
    mode.addEventListener('change', () => {
      if (mode.checked) {
        root.setAttribute('data-tema', 'gelap');
        localStorage.setItem('data-tema', 'gelap');
      } else {
        root.removeAttribute('data-tema');
        localStorage.removeItem('data-tema');
      }
    });
  }

  //Aksen
  let aksen = a.querySelectorAll('.aksen-warna input[type="radio"]');
  if (typeof localStorage != 'undefined' && aksen.length > 0) {
    if (localStorage.getItem('data-aksen')) {
      root.setAttribute('data-aksen', localStorage.getItem('data-aksen'))
    };
    aksen.forEach(e => {
      let i = localStorage.getItem('data-aksen') ? e.parentElement.parentElement.querySelector(`input[value='${localStorage.getItem('data-aksen')}']`) : e.parentElement.parentElement.querySelector('input[value="firstColor"]');
      e.addEventListener('change', l => {
        localStorage.setItem('data-aksen', l.target.value);
        l.target.value == 'firstColor' ? root.removeAttribute('data-aksen') : root.setAttribute('data-aksen', l.target.value)
      });
      localStorage.getItem('data-aksen') ? i.checked = true : i.checked = false;
      i.checked ? i.setAttribute('checked', 'checked') : i.removeAttribute('checked');
    })
  }

  //Form Function
  let form = a.querySelectorAll('form input[name="q"]');
  console.log(form.length)
  if (form.length > 0) {
    form.forEach(item => {
      item.addEventListener('input', () => item.setCustomValidity(''));
      item.addEventListener('invalid', () => item.setCustomValidity('Ketik kata kunci pencarian'))
    })
  }
})(document, window)