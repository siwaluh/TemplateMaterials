(function () {
  var e = document.querySelectorAll(".b-tabs li"),
    c = document.querySelectorAll(".s-tabs");
  0 == e.length && 0 == c.length || e.forEach(function (t, a) {
    var r = a;
    t.addEventListener("click", t => {
      var a = t.currentTarget;
      e.forEach(e => e.classList.remove("active")), a.classList.add("active"), c.forEach(e => e.classList.remove("active")), c[r].classList.add("active")
    }), 0 == r && t.click()
  })
})();