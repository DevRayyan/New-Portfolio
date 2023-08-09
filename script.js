const navTglBtn = document.querySelector("#hero-nav-toggler");
const navTglMenu = document.querySelector("#hero-nav-menu");
const searchCont = document.querySelector(".search-container");
const searchBox = document.querySelector("#search-box");
const searchTabs = document.querySelectorAll(".search-switcher button");
const tabsContent = document.querySelectorAll(".search-nav-tabs");
const searchTabsLine = document.querySelector("#line");
const heroBg = document.querySelector(".hero-bg");
const blurBg = document.querySelector("#blur");
const herohead = document.querySelector(".hero-heading");
const collapsedNav = document.querySelector(".nav-collapsed");
const InnerNavContent = collapsedNav.querySelector(
  ":scope > * > .inner-nav-content"
);
navTglBtn.addEventListener("click", () => {
  navTglMenu.classList.toggle("active");
  navTglMenu.style.zIndex = 13;
  blurBg.classList.toggle("active");
});

document.addEventListener("keydown", (e) => {
  let currentActiveTab = document.querySelector(
    ".search-switcher button.active"
  );
  let nextTab = Array.from(searchTabs).indexOf(currentActiveTab);
  if (e.key === "Escape") {
    onEscKeyPress();
  } else if (e.ctrlKey && e.key === "/") {
    searchBoxFocus();
  } else if (e.ctrlKey && e.key === "ArrowRight") {
    onArrowRightPress(nextTab);
  } else if (e.ctrlKey && e.key === "ArrowLeft") {
    onArrowLeftPress(nextTab);
  } else if (e.ctrlKey && e.key === "ArrowUp") {
    e.preventDefault();
    showNav();
  }
});

const onArrowLeftPress = (nextTab) => {
  if (nextTab > 0) {
    activateTabs(nextTab - 1);
  }
};

const onArrowRightPress = (nextTab) => {
  if (nextTab < searchTabs.length - 1) {
    activateTabs(nextTab + 1);
  }
};

const onEscKeyPress = () => {
  const elementsToRemoveActive = [
    navTglMenu,
    blurBg,
    searchBox.parentNode,
    collapsedNav,
  ];
  elementsToRemoveActive.forEach((element) =>
    element.classList.remove("active")
  );
  searchBox.blur();
  navTglMenu.style.zIndex = 13;
  searchCont.style.marginRight = "0";
  InnerNavContent.classList.remove("animate");
};

const searchBoxFocus = () => {
  searchBox.parentNode.classList.add("active");
  searchBox.focus();
  navTglMenu.style.zIndex = 0;
};

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = clientX / 2;
  const y = clientY / 2;
  const elWidth = herohead.getBoundingClientRect().width / 2;
  const elHeight = herohead.getBoundingClientRect().height / 2;

  navTglBtn.style.transform = `translate(${-x * 0.05}px,${-y * 0.05}px)`;
  herohead.style.transform = `translate(-${elWidth - x * 0.05}px,-${
    elHeight - y * 0.05
  }px)`;
});

searchBox.addEventListener("click", () => {
  searchBox.parentNode.classList.add("active");
  navTglMenu.style.zIndex = 0;
});

document.addEventListener("click", (e) => {
  const searchToggler = e.target.closest(".search-toggler");
  const searchResults = e.target.closest(".search-results");
  const isHeroNavMenu = e.target.closest("#hero-nav-menu");

  if (!searchToggler && !searchResults) {
    searchBox.parentNode.classList.remove("active");
    searchBox.blur();
  }
  if (!isHeroNavMenu) {
    navTglMenu.classList.remove("active");
    blurBg.classList.remove("active");
  }
});

const activateTabs = (tab) => {
  const searchTogglerActive = document
    .querySelector(".search-toggler")
    .classList.contains("active");

  if (searchTogglerActive) {
    const defaultColor = "rgba(20, 211, 211, 0.521)";
    searchTabs.forEach((otherTab, index) => {
      tabsContent[index].classList.remove("active");
      otherTab.classList.remove("active");
      searchTabs[index].style.color = defaultColor;
      searchTabs[index].querySelector("span").style.color = defaultColor;
    });

    const baseColor = tabsContent[tab].dataset.clrcomb;
    searchTabsLine.style.backgroundColor = baseColor;
    searchTabs[tab].style.color = baseColor;
    searchTabs[tab].querySelector("span").style.color = baseColor;
    searchTabsLine.style.left = (100 / searchTabs.length) * tab + "%";
    searchTabs[tab].classList.add("active");
    tabsContent[tab].classList.add("active");
  }
};
activateTabs(0);

searchTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activateTabs(index);
  });
});

const showNav = () => {
  const isActive = collapsedNav.classList.contains("active");

  if (!isActive) {
    collapsedNav.classList.add("active");
    navTglMenu.style.zIndex = 0;
    searchCont.style.marginRight = "clamp(40px, 3.1vw, 3.1vw)";
    searchCont.style.transition = "margin 0s";
    InnerNavContent.classList.add("animate");
  } else {
    navTglMenu.style.zIndex = 13;
    searchCont.style.marginRight = "0";
    collapsedNav.classList.remove("active");
    InnerNavContent.classList.remove("animate");
  }
};

InnerNavContent.querySelectorAll(".inner-nav-item").forEach((each, i) => {
  each.addEventListener("mouseover", () => {
    InnerNavContent.querySelectorAll(".inner-nav-item").forEach(
      (singleItem, index) => {
        if (i != index) {
          singleItem.querySelector(".overlay").classList.add("active");
        }
      }
    );
  });
  each.addEventListener("mouseout", () => {
    InnerNavContent.querySelectorAll(".inner-nav-item").forEach(
      (singleItem) => {
        singleItem.querySelector(".overlay").classList.remove("active");
      }
    );
  });
});

const musicList = [
  {
    title: "Wahran",
    cover: "./resource/img/wahran.jpg",
    path: "./resource/audio/Wahran.mp3",
  },
  {
    title: "London View",
    cover: "./resource/img/london-view.jpg",
    path: "./resource/audio/London-view.mp3",
  },
  {
    title: "Ploua",
    cover: "./resource/img/ploua.jpg",
    path: "./resource/audio/ploua.mp3",
  },
  {
    title: "Drama",
    cover: "./resource/img/audio1.jpg",
    path: "./resource/audio/audio1.mp3",
  },
  {
    title: "Believer",
    cover: "./resource/img/believer.jpg",
    path: "./resource/audio/believer.mp3",
  },
  {
    title: "Believer",
    cover: "./resource/img/believer.jpg",
    path: "./resource/audio/believer.mp3",
  },
  {
    title: "Believer",
    cover: "./resource/img/believer.jpg",
    path: "./resource/audio/believer.mp3",
  },
  {
    title: "Believer",
    cover: "./resource/img/believer.jpg",
    path: "./resource/audio/believer.mp3",
  },
];

// const musicPlay = (index) => {};
const audioEl = new Audio(musicList[0].path);
const musicUi = Array.from(navTglMenu.querySelectorAll("li"));

musicUi.forEach((li, i) => {
  const button = li.querySelector("button");
  const playIcon = button.children[2];
  const pauseIcon = button.children[2];
  const activeIcon = button.children[0];
  
  button.children[1].src = musicList[i].cover;
  
  li.addEventListener("click", () => {
    musicUi.forEach((lis) => {
      const Prevbutton = lis.querySelector("button")
      Prevbutton.children[2].classList.remove("fa-pause")
      Prevbutton.children[2].classList.add("fa-play")
      Prevbutton.children[0].classList.remove("active")
      Prevbutton.children[0].style.backdropFilter ="blur(2px)"
      Prevbutton.children[0].style.backgroundColor ="rgba(0, 0, 0, 0.121)"

    })
    if (audioEl.paused) {
      pauseIcon.classList.remove("fa-play");
      pauseIcon.classList.add("fa-pause");
      activeIcon.classList.add("active");
      audioEl.src = musicList[i].path;
        const playPromise = audioEl.play();
  if (playPromise !== undefined) {
    playPromise
      .then(_ => {
        // Playback started successfully
      })
      .catch(error => {
        console.error('Error playing media:', error);
      });
  }
    } else {
      activeIcon.classList.remove("active");
      playIcon.classList.add("fa-play");
      pauseIcon.classList.remove("fa-pause");
      audioEl.pause();
    }
  });
});
