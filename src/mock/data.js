import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Satya Chiratla',
  subtitle: 'MERN Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'vivek.jpg',
  paragraphOne: `Hello I am Satya Chiratla, I have much knowledge in Frontend Development. A highly motivated individual passionate about coding and technology. I have been developing websites for over 2 years.`,
  paragraphTwo: `The technologies I knew are Html5, CSS3, JavaScript, ReactJs, Redux. I create responsive websites that are displayed on all devices desktops and mobiles. I have curious to learn FullStack and many more technologies.`,
  paragraphThree: `Also, I have worked hard in my education and now its time to put them into my career.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'My Personal Portfolio',
    info: 'Completely made with React and its inbuilt features. There is no other Stack.',
    info2: '',
    url: '',
    repo: 'https://github.com/satyachiratla/Portfolio-2/tree/master/src', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foodorder.png',
    title: 'Food Order App',
    info: 'Build a Dynamic Single Page Application by managing the state with context API and fetching data, storing data from the backend (FireBase)',
    info2: '',
    url: 'https://peddadameals.netlify.app/',
    repo: 'https://github.com/satyachiratla/foodapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'places.png',
    title: 'Saving Places',
    info: 'Created a saving places app that you might be visit in the future, using MERN(MongoDB, Express, React, Node) deployed in Heroku and Netlify..',
    info2: '',
    url: 'https://vivekchowdary.herokuapp.com/',
    repo: 'https://github.com/satyachiratla/places/tree/master', // if no repo, the button will not show up
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
