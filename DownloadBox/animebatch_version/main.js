/*Download Box - Animebatch Version Js*/
(function (a) {
  let collapsible = a.querySelectorAll('.collapsible');
  if (collapsible.length != 0) {
    collapsible.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
        let content = item.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      })
    })
  }
})(document);