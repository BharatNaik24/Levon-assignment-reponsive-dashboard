# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

open two terminal

first terminal

npm install >> npm run dev

//run this below code in second teminal to start the API server that is manually created for this project

second terminal

json-server --watch --port 4000 ./api/info.json

make sure you run both the terminals without Api server running you cannot see data

graphs charts pies are manually entered data as i could not find any APIs that provide this type of data

messages, notifications in the header are fetched from open source API

user profiles keep chages after every refresh as there are no fixed API that can match the profile of this project.

finding a proper Api for the project was more more challanging and making alot of charts all together in one main was a bit challanging but i enjoyed it
