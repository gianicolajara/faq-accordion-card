const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".details-faq__summary")) {
      if (!e.target.parentElement.hasAttribute("open")) {
        Array.from(d.querySelectorAll(".details-faq"))
          .filter((value) => value.hasAttribute("open"))[0]
          .removeAttribute("open");
      }
    }
  });
  d.addEventListener("mouseover", (e) => {
    if (e.target.matches(".details-faq__summary")) {
      d.querySelector(".card__img__desktop").classList.add(
        "card__img__desktop--move"
      );
    }
  });
  d.addEventListener("mouseout", (e) => {
    if (e.target.matches(".details-faq__summary")) {
      d.querySelector(".card__img__desktop").classList.remove(
        "card__img__desktop--move"
      );
    }
  });
});
