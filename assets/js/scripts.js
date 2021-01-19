const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".details-faq__summary")) {
      if (!e.target.parentElement.hasAttribute("open")) {
        const result = Array.from(
          d.querySelectorAll(".details-faq")
        ).find((value) => value.hasAttribute("open"));
        if (result) result.removeAttribute("open");
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
