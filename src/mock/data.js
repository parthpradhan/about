import { nanoid } from 'nanoid';

export const headData = {
  title: 'Parth Pradhan | Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Parth Pradhan',
  subtitle: 'and I like learning :)',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'parth.png',
  paragraphOne:
    'Howdy, I am Parth! Born and raised in Delhi, India. I am currently 20 years old and I want to design and code with accessibility and empathy in mind.',
  paragraphTwo:
    'Since my childhood I was always interested in art and playing games so I took my inspiration from them and converted those hobbies into designing and developing.',
  paragraphThree: 'I like learning new things, so feel free to give me ideas x)',
  resume: 'Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'first.png',
    title: 'First Website',
    info: 'Even with limited knowledge someone has to start at some point. Basic utilization of HTML,CSS and little bit of JS',
    info2: 'But I put a lot of thought and love into this so here I am mentioning this.',
    url: 'https://parthpradhan.github.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'current.png',
    title: 'Current Website',
    info: 'With more knowledge comes more responsibilty :D, Including Bulma Framework, more emphasis on Typography and Iconography while following Gestalt Principles.',
    info2: 'Showcasing my projects,artworks and photography',
    url: 'https://parthpradhan.github.io/soulfrostgem.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'game.png',
    title: 'My First Game',
    info: 'F.P.S aka FreeStyle Parkour and Shooting was my first game made with C# and Unity Game Engine.',
    info2: 'It was a 1.5 months long journey which I enjoyed at every step.',
    url: 'https://parthpradhan.github.io/index2.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipie.png',
    title: 'My Latest Project',
    info: 'Recipie is a react based web application bundled with bootstrap made for searching recipes.',
    info2: 'Using Edamame API calls it fetches recipes.',
    url: 'https://parthpradhan.github.io/recipiehome/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you wanna connect with me? Awesome!',
  btn: "Let's Go",
  email: 'soulcoder11111@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
