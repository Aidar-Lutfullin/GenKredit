//! scroll

$("a.toscroll").on("click", function (e) {
  var url = e.target.href;
  var hash = url.substring(url.indexOf("#") + 1);
  $("html, body").animate(
    {
      scrollTop: $("#" + hash).offset().top,
    },
    500
  );
  return false;
});

//! burger

$(function () {
  $(".header-btn").on("click", function (e) {
    $(".header-burger").addClass("active");
  });
});

$(function () {
  $(".burger-close").on("click", function (e) {
    $(".header-burger").removeClass("active");
  });
});

//! send form

const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("[data-close]");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);
}

modalTrigger.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
