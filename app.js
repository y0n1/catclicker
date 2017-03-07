let model = {
  cats: [
    {
      name: "Rocoso",
      clicksCount: 0,
      imageLink: '/images/rocoso-320x240.jpeg'
    },
    {
      name: "Moccoso",
      clicksCount: 0,
      imageLink: '/images/moccoso-320x240.jpeg'
    },
    {
      name: "Asqueroso",
      clicksCount: 0,
      imageLink: '/images/asqueroso-320x240.jpeg'
    },
    {
      name: "Roniosso",
      clicksCount: 0,
      imageLink: '/images/roniosso-320x240.jpeg'
    },
  ]
};

let view = {
  get mainApp() {return document.getElementById('app')},
  get upVoteButton() {return document.getElementById('btn-up-vote')},
  get downVoteButton() {return document.getElementById('btn-down-vote')},
  get currentCatNameDisplay() {return document.getElementById('current-cat-name-display')},
  get clicksCounter() {return document.getElementById('clicks-counter')},
  get catsList() {return document.getElementById('cats-list')},
  get catFigure() {return document.getElementById('cat-figure')},
  get catImage() {return document.getElementById('cat-image')},
  getCatLineItemFragment(cat) {
    let template = `<li id="cat-${cat.name}"><a href="#">${cat.name}</a></li>`;
    let range = document.createRange();
    return range.createContextualFragment(template);
  },
};

let octopus = {
  currentCat: null,

  get randomCat() {
    let randomInt = Math.floor(Math.random() * model.cats.length);
    return model.cats[randomInt];
  },

  renderCatsList() {
    let catsList = view.catsList;
    model.cats.forEach((cat) => {
      let catItem = view.getCatLineItemFragment(cat);
      catsList.appendChild(catItem);
      catsList.lastChild.onclick = () => {
          octopus.render(cat);
      };
    });
  },

  render(cat) {
    octopus.currentCat = cat;
    view.currentCatNameDisplay.innerText = cat.name;
    view.catImage.setAttribute('src', cat.imageLink);
    view.clicksCounter.innerText = cat.clicksCount;
  },

  init() {
    octopus.renderCatsList();
    view.upVoteButton.onclick = () => {
      view.clicksCounter.innerText = ++octopus.currentCat.clicksCount;
    };
    view.downVoteButton.onclick = () => {
      view.clicksCounter.innerText = --octopus.currentCat.clicksCount;
    };
    octopus.render(octopus.randomCat);
  },
};

window.onload = () => {
  octopus.init();
};
