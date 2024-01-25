# README

# This project was build with:
Frontend: Typescript, React, Tailwind
Backend: Ruby on Rails
Database: Postgresql

This contains the frontend with Typescript and React components

# Setting up in development environment

Install the project locally,
Run the following commands:
### `npm i`
### `npm run dev`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# To run development environment in docker container

Install the project locally,
Run the following commands:
### `docker build . -t dev`
### `docker run -d -p 3000:3000 --rm dev`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Run `docker ps` to view the running container and its id
To stop the container run `docker stop <id>`

# Setting up in production environment

Install the project locally,
Run the following commands:
### `npm i`
### `npm run build`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Production environment

The project frontend is currently deployed on the following link through Heroku:
https://cvwo-web-forum-frontend-a8f77debc888.herokuapp.com/

# Backend

The github page for the backend can be found through the following link:
https://github.com/BryanL2303/cvwo-2024-winter-assignment-backend

It is currently up and running on Heroku, the website in development environment will connect to the backend through Heroku.

The backend url can be changed in `/src/index.tsx` if user is trying to switch to local backend for testing.

# Features

1. Users can sign up/log in, stay logged in through JWT stored in cookies.
2. Users can view posts and comments (Without logging in)
3. Users can create/update/delete posts and comments (While logged in)
4. Users can filter posts by categories predetermined
5. Users can type into a search bar to filter posts

# Acknowledgements

Learning:
I watched this series on Youtube to help me get started on typescript:
https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK

I initialized TailwindCSS using the guide from the link below:
https://tailwindcss.com/docs/installation

Refered to the video below to creat the frontend of the website:
https://www.youtube.com/watch?v=ymGB1lqP1CM&t=2154s

Setting up TailwindCSS:
https://blog.devgenius.io/set-up-a-react-app-with-typescript-and-tailwind-b9c0a61bbd64

Refered to the video below to code the SearchBar searching function:
https://www.youtube.com/watch?v=E1cklb4aeXA

Refered to documentations for react components/libraries
Refered to TailwindCSS documentations

Setting up Redux:
https://www.youtube.com/watch?v=EqbwHO6Vgbg

Bug fixing:
Fixed context issues with ReactNode as type:
https://dev.to/elhamnajeebullah/react-typescript-what-is-reactnode-and-when-to-use-it-3660

Error with typescript reading form values fixed with a function from below query:
https://stackoverflow.com/questions/71598967/how-to-get-the-value-of-input-tag-onsubmit-without-using-onchange-in-react-js-ty