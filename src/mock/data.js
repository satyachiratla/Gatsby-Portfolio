import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Satya Chiratla',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'vivek.jpeg',
  paragraphOne: `Hello I am Satya Chiratla, A highly motivated individual passionate about coding and technology. I have been developing websites for over 2 years.`,
  paragraphTwo: `The technologies I knew are Html5, CSS3, JavaScript, Python, ReactJs, Redux and NodeJs. I create responsive websites that are displayed on all devices desktops and mobiles. I have curious to learn FullStack and many more technologies.`,
  paragraphThree: `Also, I have worked hard in my education and now its time to put them into my career.`,
  resume: 'https://drive.google.com/file/d/1wSehTampGP8huqFP15z1Y7z9Rxlca4k0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foodapp.jpg',
    title: 'Food Ordering App',
    info: 'The successful creation of a stunning restaurant website using NextJS and the power of Tailwind CSS.',
    info2: `One of the most exciting aspects of this project was implementing the CRUD operations. NextJS 13's built-in APIs and data-fetching capabilities made it effortless to create, read, update, and delete data within the website.`,
    url: 'https://peddadameals.vercel.app/',
    repo: 'https://github.com/satyachiratla/NextJS-Food-App',
  },
  {
    id: nanoid(),
    img: 'foodorder.png',
    title: 'Food App',
    info: 'The app helps customers access online food ordering platforms, search for the right restaurant or dish they want to order, place their orders and pay easily.',
    info2: `Build a Dynamic Single Page Application by managing the state with context API and integrated the backend with NodeJS, and ExpressJS.`,
    url: 'https://peddadameals.netlify.app/',
    repo: 'https://github.com/satyachiratla/foodapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cricbuzz.png',
    title: 'Mini Cricbuzz',
    info: 'Get the T20 World Cup 2022 Live Cricket Score, Scorecard, and Schedules of International Matches.',
    info2: `Fully built with NextJS and its core features like page pre-rendering. Once visiting this page the pages are pre-rendered so that the pages are loaded quickly as possible.`,
    url: 'https://vivekscricbuzz.vercel.app/',
    repo: 'https://github.com/satyachiratla/Nextjs_Cricbuzz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'satyachiratla77@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/v.i.v.e.k_c.h.o.w.d.a.r.y/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/satya-chiratla-378b31165/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/satyachiratla',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
