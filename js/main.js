window.addEventListener("DOMContentLoaded", () => {
  const overviews = document.querySelectorAll(
    ".home-overviews__box__progress__loading-bar__percentage"
  );

  overviews.forEach((i) => {
    i.style.width = `${i.dataset.percent}%`;
    i.style.backgroundColor = `#4e74ff`;
    console.log(i);
  });

  AOS.init();
});
