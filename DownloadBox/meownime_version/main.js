(function () {
  const e = document.querySelectorAll(".meowBox.collapse .tomvol");
  0 != e.length && e.forEach(e => e.addEventListener("click", function (e) {
    const t = e.currentTarget.parentElement,
      l = t.nextElementSibling;
    t.classList.toggle("active"), l.style.maxHeight ? l.style.maxHeight = null : l.style.maxHeight = `${l.scrollHeight}px`
  }))
})();