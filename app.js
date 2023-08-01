social = document.getElementsByClassName("social");

for (let i = 0; i < social.length; i++) {
  social[i].addEventListener("mouseenter", function () {
    var temp = this;
    var source = this.getAttribute("src");

    switch (source) {
      case "Assets/email.png":
        temp.setAttribute("src", "Assets/email hover.png");
        break;

      case "Assets/github.png":
        temp.setAttribute("src", "Assets/github hover.png");
        break;

      case "Assets/linkedin.png":
        temp.setAttribute("src", "Assets/linkedin hover.png");
        break;

      case "Assets/instagram.png":
        temp.setAttribute("src", "Assets/instagram hover.png");
        break;

      default:
        break;
    }
  });

  social[i].addEventListener("mouseleave", function () {
    var temp = this;
    var source = this.getAttribute("src");

    switch (source) {
      case "Assets/email hover.png":
        temp.setAttribute("src", "Assets/email.png");
        break;

      case "Assets/github hover.png":
        temp.setAttribute("src", "Assets/github.png");
        break;

      case "Assets/linkedin hover.png":
        temp.setAttribute("src", "Assets/linkedin.png");
        break;

      case "Assets/instagram hover.png":
        temp.setAttribute("src", "Assets/instagram.png");
        break;

      default:
        break;
    }
  });
}
cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  card_bg = document.getElementsByClassName("card-bg");
  card_title = document.getElementsByClassName("card-title");
  cards[i].addEventListener("mouseenter", function () {
    card = this;
    switch (card.classList[1]) {
      case "card-1":
        card_bg[0].classList.add("card-bg-active");
        card_title[0].classList.add("hide-title");
        break;
      case "card-2":
        card_bg[1].classList.add("card-bg-active");
        card_title[1].classList.add("hide-title");
        break;
      case "card-3":
        card_bg[2].classList.add("card-bg-active");
        card_title[2].classList.add("hide-title");
        break;
      case "card-4":
        card_bg[3].classList.add("card-bg-active");
        card_title[3].classList.add("hide-title");
        break;

      default:
        break;
    }
  });

  cards[i].addEventListener("mouseleave", function () {
    card = this;
    switch (card.classList[1]) {
      case "card-1":
        card_bg[0].classList.remove("card-bg-active");
        card_title[0].classList.remove("hide-title");
        break;
      case "card-2":
        card_bg[1].classList.remove("card-bg-active");
        card_title[1].classList.remove("hide-title");
        break;
      case "card-3":
        card_bg[2].classList.remove("card-bg-active");
        card_title[2].classList.remove("hide-title");
        break;
      case "card-4":
        card_bg[3].classList.remove("card-bg-active");
        card_title[3].classList.remove("hide-title");
        break;

      default:
        break;
    }
  });
}

function display() {
  var flex = document.getElementsByClassName("nav-links");
  flex[0].classList.toggle("active");
  var img = document.getElementsByClassName("nav-img");
  if (img[0].getAttribute("src") == "Assets/menu.png") {
    img[0].setAttribute("src", "Assets/close.png");
  } else {
    img[0].setAttribute("src", "Assets/menu.png");
  }
}
