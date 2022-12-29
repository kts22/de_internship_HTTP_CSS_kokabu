const btn = document.getElementById("up-btn");
btn.addEventListener("click", () => {
  let scrollToOptions = {
    top: 0,
    behavior: "smooth",
  };

  window.scrollTo(scrollToOptions);
});
