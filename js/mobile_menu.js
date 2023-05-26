function menuPop() {
  const x = document.getElementById('top-navigation');
  const y = document.querySelector('#menu-button');
  const z = document.querySelector('.menu-icon h2');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    z.style.visibility = 'visible';
    y.src = './images/icons/Union.png';
  } else {
    x.style.display = 'block';
    z.style.visibility = 'hidden';
    y.src = './images/icons/close.svg';
  }
}

const worksContent = [
  {
    id: 0,
    worksName: 'Multi-Post Stories',
    worksContent:
      `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    techStack: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/Works_cont.svg',
  },
  {
    id: 1,
    worksName: 'Data Dashboard Healthcare',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/pro_sec.svg',
  },
  {
    id: 2,
    worksName: 'Data Dashboard Healthcare',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/Data_content_image.svg',
  },
  {
    id: 3,
    worksName: 'Website Portfolio',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/website.svg',
  },
  {
    id: 4,
    worksName: 'Profesional Art Printing Data',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/professional.svg',
  },
  {
    id: 5,
    worksName: 'Data Dashboard Healthcare',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/Data_content_image.svg',
  },
  {
    id: 6,
    worksName: 'Website Portfolio',
    worksContent:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    img: 'images/icons/website.svg',
  },
];

function mainProject() {
  const presentProject = worksContent[0];
  const worksHeadline = `<section class="works-content">
  <img src=${presentProject.img} class="image-placement" alt="The Banner" />
  <div class="text-placement">
    <h2>${presentProject.worksName}</h2>
    <p>${presentProject.worksContent}</p>
    <ul>
      <li>
        <a href="#">${presentProject.techStack[0]}</a>
      </li>
      <li>
        <a href="#">${presentProject.techStack[1]}</a>
      </li>
      <li>
        <a href="#">${presentProject.techStack[2]}</a>
      </li>
      <li>
        <a href="#">${presentProject.techStack[3]}</a>
      </li>
    </ul>
    <button id=${presentProject.id} onclick="buttonClick(this.id)" type="button">See project</button>
  </div>
</section>`;

  return worksHeadline;
}

const showSections = () => worksContent
  .filter((item) => item.id !== 0)
  .map((item) => `<section class="center-content">
        <section class="content-desc">
          <img src=${item.img} alt="" />
          <div class="top-left${item.id === 0 ? '1' : ''}">
            <h2>${item.worksName}</h2>
            <p>${item.worksContent}</p>
            <ul>
              <li><a href="#">${item.techStack[0]}</a></li>
              <li><a href="#">${item.techStack[1]}</a></li>
              <li><a href="#">${item.techStack[2]}</a></li>
            </ul>
            <button id=${item.id} onclick="buttonClick(this.id)" type="button">See project</button>
          </div>
        </section>
      </section>`);

function popupWin() {
  const presentProject = worksContent[1];
  const {
    linkToLiveVersion,
    linkToSource,
  } = presentProject;
  const pop = `<div class="popup">
  <div class="popup_content">
    <div class="titleContent">
      <div class="heading">
        <h2 id="headingSection"></h2>
      </div>
      <img id="closeButton" onclick="closed()" src="images/icons/close.svg" alt="close">
    </div>
    <ul>
      <li>
        <a href="#">${presentProject.techStack[0]}</a>
      </li>
      <li>
        <a href="#">${presentProject.techStack[1]}</a>
      </li>
      <li>
        <a href="#">${presentProject.techStack[2]}</a>
      </li>
    </ul>
    <div class="popWindow">
      <div id="popup_info">
        <img id="popup-img" src="images/icons/Snapshoot_Portfolio.jpg" alt="Snapshop_Portfolio">
      </div>
      <div class ="all_info">
        <p id="projectDesc"></p>
        <div class="bottom_section">
          <a href="${linkToLiveVersion}" target="_blank"><button class="btnIcon">See live <img src="images/icons/see_live.png" alt="" class="btnIcon"></button></a>
          <a href="${linkToSource}" target="_blank"><button class="btnIcon">See source <img src="images/icons/git.png" alt="" class="btnIcon"></button></a>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return pop;
}

function buttonClick(theId) {
  const savedInfo = theId;
  const titleSelect = document.getElementById('headingSection');
  const paragraphSelect = document.getElementById('projectDesc');
  const popWin = document.querySelector('.popup');

  worksContent.forEach((e, i) => {
    const project = i;
    if (worksContent[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = worksContent[project].worksName;
      paragraphSelect.innerHTML = worksContent[project].worksContent;
      popWin.style.visibility = 'visible';
    }
  });
}

buttonClick();

function closed() {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
}

function validateEmail(event) {
  const email = document.forms[0].elements.Email.value;
  const res = email.match(/[A-Z]/g);
  const btn = document.querySelector('form #form_btn');
  const container = document.querySelector('form #form-btn-container');
  const child = document.createElement('h2');
  let msg = '';

  if (res) {
    msg = 'Error: Please use only lower case for the email address';
    event.preventDefault();
  } else return;
  child.innerText = msg;
  child.style.color = 'red';
  child.style.fontFamily = 'inter, sans-serif';
  child.style.fontSize = '18px';
  child.style.fontWeight = 'bold';
  container.insertBefore(child, btn);

  setTimeout(() => {
    child.remove();
  }, 4000);
}

window.onload = () => {
  document.querySelector('#form').addEventListener('submit', (event) => validateEmail(event));
};

window.addEventListener('load', () => {
  document.getElementById('multiPost').innerHTML = mainProject();
  document.getElementById('grid-info').innerHTML = showSections().join('');
  document.getElementById('popupWindow').innerHTML = popupWin();
});

menuPop();
closed();