# Weather Win

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contributing](#contributing)
- [Status](#status)
- [Reflection](#reflection)
- [Credits](#credits)
- [License](#license)

## About The App

Weather Win is an app that displays the current weather and the forecast for any location in the world.

## Technologies

This app takes advantage of the following technologies:

- JavaScript
- React
- CSS
- React Router
- Google Maps

## Setup

- make sure you have [Node](https://nodejs.dev/learn/how-to-install-nodejs) installed on your machine
- download or clone the [repository](https://gitlab.com/PatriciaSaraiva/fe-assignment-PatriciaSaraiva.git)
- run `npm install`
- Rename the `.env.sample` file to `.env` and add your own API keys
- run `npm start`

## Contributing

### Step 1

- **Option 1**

  - 🍴 Fork this [repo](https://gitlab.com/PatriciaSaraiva/fe-assignment-PatriciaSaraiva.git)!

- **Option 2**
  - 👊 Clone this [repo](https://gitlab.com/PatriciaSaraiva/fe-assignment-PatriciaSaraiva.git) to your local machine

### Step 2

- 🔨 Write code you feel is going to add something to the project

### Step 3

- 🔃 Create a new pull request

## Status

This project is currently in development.

Users can add or remove locations and learn about the weather on those locations.

In the roadmap:

- Write unit tests
- Add linting tools
- Provide the option to change between Celsius and Fahrenheit
- Move the locations cards around like a canvas
- Provide more relevant information such as weather warnings

## Reflection

- This is a side project which goal is to develop my knowledge and skills upon completion of the [Wild Code School](https://www.wildcodeschool.com/en-GB/courses/web-development-course-full-time) Web development Full stack course.
- It will be also important to learn technologies/procedures not taught at the course such as:

  - Testing (Jest, Testing Library, Cypress)
  - CSS-in-JS (Styled Components, Emotion)
  - Containerization (Docker) and Orchestration (Kubernetes)
  - Static site generators (Next.js, Gatsby)
  - TypeScript

- So far this project has been a great learning experience and helped me to put some learned tools in one place while creating a very useful app.
- There were some obstacles such as:

  - Deciding about going for a global state management solution. I feel that I could have done this without Redux by choosing a more connected architecture and making use of the "lifting the state up" pattern. But as a learning project, it's also important to practice state management from various perspectives (global and local).
  - Couldn't make use of virtualizing/containerizing due to time constraints
  - The [OpenWeather](https://openweathermap.org/api) api accepts longitude and latitude as mandatory inputs to obtain the weather but does not allow to use the location name. Therefore I had to find another API ([GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/)) in order to get all possible locations and their latitude/longitude.
  - Persisting the cities that I added by the user could have been achieved with a backend/db but since there were no other requirements for a backend service, I decided to make use of Redux and save the relevant state in the users LocalStorage.

## Credits

List of contributors:

- [Patricia Saraiva](patricia.t.saraiva@gmail.com)

## License

MIT license @ [Patricia Saraiva](patricia.t.saraiva@gmail.com)
