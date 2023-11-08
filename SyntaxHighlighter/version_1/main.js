(function (a) {
  let pre = a.querySelectorAll('pre code');
  if (pre.length > 0) {
    pre.forEach(item => {
      let i = a.createElement('i');
      i.className = 'copy';
      item.parentNode.append(i);
      i.addEventListener('click', () => {
        let content = item.textContent,
          area = a.createElement('textarea');
        area.className = 'clipboard';
        area.textContent = content;
        a.body.append(area);
        area.select();
        a.execCommand('copy');
        area.remove();
        item.parentNode.classList.add('copied');
        item.parentNode.setAttribute('data-copy', 'Kode berhasil di salin');
        setTimeout(() => {
          item.parentNode.classList.remove('copied');
        item.parentNode.removeAttribute('data-copy');
        }, 500);
      })
    })
  }
})(document);