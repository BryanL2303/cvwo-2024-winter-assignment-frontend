# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learning Journey
22 Dec 2023
I have attempted the winter assignment for last years CVWO. I was not offered an interview however, and I can tell that the end product that I created last year is definitely not satisfactory. I have tried to pick up software engineering by myself and have struggled alot through the process with nothing much to show for it. Through this whole process I have been working alone and I do not really know if I am doing the right thing or even on the right track.

I am attempting this again one year later, hoping that this time I can do much better than the last. I have been trying to create a useful website as a volunteer for a seperate organisation and I do wish to deliver something useful and I really do want to get better at this. I think that having an opportunity to work as part of a team will really allow me to see for myself how things really should be done and give me a standard to pursue. That is the reason why I decided to try out for CVWO again this year.

# The standard

When viewing the winter assignment I saw the github page of Xiaoyun. Through the github page I first noticed the personal website that he has created for himself. I was really impressed and also shocked to find out that he is also a year 2 student and last year he also attempted the same winter assignment that I did. I was really disappointed in myself after seeing what he was able to do with no prior coding experience while at the same time I did such a horrible job. I noted some points from seeing what he has done and I will be noting those below to make sure that there are no suspicions of plagiarism.
The points below can be seen as my reflection from last years winter assignment, I am doing so as both years assignment happens to be a web forum.

1. I first noticed TailwindCSS being used on his personal website. I have never seen this before and hence read more about it. Xiaoyun also notes down his choice to use TailwindCSS during his winter assignment last year. I went to TailwindCSS website to learn more about it. I personally have alot of problems with design, it is not one of my strong suits, I will be trying to learn and use TailwindCSS for this assignment and first aim to make it look as similar to Telegrams bug and suggestions platform.
2. I noticed that Xiaoyun has 2 seperate github repositories for last years winter assignment, one for frontend and one for backend. This is different from what I did last year. I had both frontend and backend together on the same repository and uploaded them on to Heroku. After reading this years winter assignment, I have decided to do the same this year, to properly segment the frontend and backend will make things easier for myself and less confusing with too many folders while working.
3. I did not use typescript for last years assignment, I coded react elements in JSX directly and rendered them. This year since typescript is necessary I will of course be switching it up.
4. In general I have run into many problems with error handling. I usually tackle problems as I see them, this time I will consider creating a system with my own status and error codes on the frontend so that in the event of errors the user can see the appropriate response on the frontend rather than the app crashing, on hindsight this should have been the standard all along.
5. Another issue I run into very commonly over the pass year is my own documentation of my work and learning process. I remember having alot of difficulties writing the final write up and preparing for submissions last year. Hence this year I will be documenting and updating this document step by step.

# Typescript and React, TailwindCSS

I watched this series on Youtube to help me get started on typescript:
https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK

For now I will focus on learning typescript and TailwindCSS to try and recreate the looks of Telegram bugs and suggestions platform as much as possible.

I initialized TailwindCSS using the guide from the link below:
https://tailwindcss.com/docs/installation

End of entry 22 Dec 2023

23 Dec 2023
# Building the frontend
Refering to the video below I started creating the frontend of the website:
https://www.youtube.com/watch?v=ymGB1lqP1CM&t=2154s

Setting up TailwindCSS:
https://blog.devgenius.io/set-up-a-react-app-with-typescript-and-tailwind-b9c0a61bbd64

The video goes through cva and tailwind merge functions to create flexibility for components styling so that the same component can be used for different areas. 

Today specifically the first 30 minutes of the video was used as reference to help create the Button class as well as start on the SearchBar and NavBar.

Having some difficulties understanding the rem/px and how they work in Tailwind.

Refered to the video below to code the SearchBar searching function:
https://www.youtube.com/watch?v=E1cklb4aeXA

End of entry 23 Dec 2023

24 Dec 2023
Refered to react-cookie:
https://www.npmjs.com/package/react-cookie

cookies will be used to store JWT generated by the backend to keep users logged in.

It will also be used for certain functions temporarily to keep certain settings, for example after checking a specific post when going back to the list of posts the previous filters and search functions performed will be retained.

Created Routers using react-router-dom to link to other pages.

Error with typescript reading form values fixed with a function from below query:
https://stackoverflow.com/questions/71598967/how-to-get-the-value-of-input-tag-onsubmit-without-using-onchange-in-react-js-ty

25 - 26 Dec 2023
Initialized backend and test connection with backend on Heroku.

Connected successfully, difficulty with types in frontend to receive data from backend.

Also trying to fix searchbar and scroll smoothly, will try to custom css utilities in tailwind to make the sizes consistent
Realised that sticky is a thing and i wasted several hours of my life, but its fixed now.

28 Dec 2023
Update database to make labels and posts has_and_belongs_to_many.

Created context to use for categories searching and filtering, cookies are also used
On render of page check cookies, if no cookies make post request to retrieve categories

Fixed context issues with ReactNode as type:
https://dev.to/elhamnajeebullah/react-typescript-what-is-reactnode-and-when-to-use-it-3660

29 Dec 2023
Fixed issues with has_many through: relations
Able to get labels and posts interchangably and hence fixed functions to filter through category filters
Created context to store posts that are currently loaded