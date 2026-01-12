import bankingApp from "./images/bankingApp.png";
import moviesProject from "./images/moviesProject.png";

export const projects = [
  {
    title: "Banking Online App",
    description: `
    A web-based online banking application built with React, TypeScript and Vite, allowing users to manage bank accounts, view transactions and make transfers. It uses a mock API built with Node.js and json-server, deployed on Railway, with the frontend deployed on Vercel.
Login credentials: admin@email.com
 / test.
    `,
    image: bankingApp,
    url: "https://banking-online-app.vercel.app/",
    urlCode: "https://github.com/DanAndrei-tech/banking-online-app",
  },

  {
    title: "Movie Management Web App",
    description: `
    A multi-page web application built with TypeScript and Vite that allows users to manage movies and actors.
    The frontend consumes a REST API deployed on Railway and is hosted on Netlify, enabling real-time listing, creation, editing, and deletion of data.`,
    image: moviesProject,
    url: "https://peliculas-proyecto.netlify.app/",
    urlCode: "https://github.com/DanAndrei-tech/proyecto-peliculas",
  },
];
