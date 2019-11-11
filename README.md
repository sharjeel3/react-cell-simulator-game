# Cell Simulator Game with React

**What is it?**
> The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Cell Simulator by creating an initial configuration and observing how it evolves.
 
It is built with following:

* React 16.11.0 and React Hooks
* TypeScript
* Styled Components
* Jest / Enzyme

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Let me start the game!

This game is deployed on Netlify for you to view and play. Visit this URL https://react-cell-simulator-game.netlify.com/ <br />

If you would like to run it locally, follow these instructions:
1. You will need Node.js and npm installed on your machine. I have built and tested the application using Node.js version 10.16.3 and npm version 6.9.0. Download link is here https://nodejs.org/download/release/v10.16.3/.
2. Open a terminal and switch to project directory
3. Install dependencies using `npm install`
4. Run `npm start` and go to http://localhost:3000 in browser
5. Run `npm test` and press `a` to see test results

Further details about available scripts and tests are mentioned below.

## Available Scripts
 
In the project directory, you can run:

### `npm install`

You should run this first to install project dependencies using npm.

### `npm start`

Runs the app in the development mode.<br />
Your browser should start automatically by default. If it doesn't, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Press `a` to run all tests. You should see the output of the tests from there.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
Polyfills for IE11 are not currently included. Please use latest version of Google Chrome, Mozilla Firefox or Microsoft Edge browsers.

## What has been done
* You can click on cells and make them alive
* You can trigger next generation as per following rules:
    - When the next generation is running:
        - A Cell with fewer than two live neighbours dies of under-population.
        - A Cell with 2 or 3 live neighbours lives on to the next generation.
        - A Cell with more than 3 live neighbours dies of overcrowding.
        - An empty Cell with exactly 3 live neighbours "comes to life".
        - A Cell who "comes to life" outside the board should wrap at the other side of the board.
* You can reset the game and start again
* Have added a custom React hook to manage the state of alive cells and future generations
* Board view 'uses' custom hook to render the UI
* Have added some unit tests to test essential logic for custom hook

## Approach
* The solution relies on React Hooks to provide the props and callbacks the views can 'use'. This is done specifically to improve code composition and follow better functional programming pattern while avoiding classes.
* I have added a UI library for base level user interface components.
* My focus was to showcase building business logic in React using Hooks
* TypeScript is used for types validation
* Code styling and formatting options can be seen in eslint and prettier config
* Have used simple constants for colours instead of theme (Not required for this simple app) 

## What's there for future
* Have not done much work on styling. Can do more there
* Can improve unit tests throughout the app
* Animations can be added as required
* Fonts can be locally hosted
* Accessibility can be improved
