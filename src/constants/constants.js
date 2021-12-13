export const projects = [


  {
    title: 'Artag Shop',
    description: "Using node.js we created an api with connection to mongoDB where the information of products, customers and also used JWT 'Json Web Token' for client and server security, on the client side we used React for the end user to see a friendly and reactive interface. firebase was also used to store images of the products and then their address is stored in the Mongo database.",
    image: '/images/artag.png',
    tags: ['React', 'JWT', "Node", "Express", "MongoDB", "Redux"],
    source: 'https://artagshop-2aa04.web.app/',
    visit: 'https://github.com/Artag-Chris/artag-shop-front',
    id: 0,
  },
  {
    title: 'Barber House',
    description: "Site created with React and axios registers, deletes, searches and updates clients, appointments, and barbers makes calls to the api that was created in Node.js uses Firebase database and has authentication methods using google and facebook. Bootstrap was also used for the responsive design for the client's convenience in case he wanted to use his mobile phone to schedule an appointment.",
    image: '/images/barberhouse.png',
    tags: ['Firebase', 'Express', 'React', 'Node',"Axios"],
    source: 'https://amazing-mahavira-981b72.netlify.app/ ',
    visit: 'https://github.com/Artag-Chris/barberia_front-end',
    id: 1,
  },
  {
    title: 'Victory Road Build ',
    description: "For study purposes I created a pokemon site that makes calls to the poke api to ask for information of all the pokemon is responsive using bootstrap also has information from other pages in order to improve the experience when creating a competitive team of pokemon when playing.",
    image: '/images/VictoryRoad.png',
    tags: ['React', 'JavaScript', "Bootstrap"],
    source: 'https://victoryroad.netlify.app/',
    visit: 'https://github.com/Artag-Chris/Victoryroad',
    id: 2,
  },
  {
    title: 'Guarda Imagenes',
    description: "Site created with React and axios register, delete, search and update post about images, uses Node.js as Back-end and MongoDB as database but saves the images thanks to Base64 in the same database. ",
    image: '/images/Merntest.png',
    tags: ['React', 'Node', 'MongoDB', 'Express',],
    source: 'https://github.com/Artag-Chris/FotosProyect',
    visit: 'https://nostalgic-mahavira-7bd87a.netlify.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started my journey with programming and Javascript', },
  { year: 2021, text: 'I won a scholarship to study programming at Unab "Colombia".', },
  { year: 2021, text: 'Start learning Object Oriented Programming and Node.js and React', },
  { year: 2021, text: 'Started to work as a freelance at Upwork', },
];