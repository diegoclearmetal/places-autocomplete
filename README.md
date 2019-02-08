# ClearMetal Autosuggest Challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It also includes a simple Node API with a countries lookup endpoint to provide you with something to integrate your UI with.

## Getting Started
- Clone this repo onto your local machine
- `cd` to the repo directory on your machine
- run `yarn install` to install dependencies
- run `yarn start` to run the API & Client concurrently

## The Challenge
You have an API that allows you to look up countries based on partial names located at `/api/countries?q=<your+input>`. Use this endpoint to implement a text input with autocomplete functionality.

The solution should meet the minimum following requirements:
- As user enters text into the input, a lookup is performed and suggested results are presented, covering any content below.
- If user selects an option from the results list, the text input's value is then set to that country's name.
- The app should also have another component that displays the currently selected country.

### Bonus Challenges
- Can we make it look nicer? Show off your CSS chops with some better styling.
- What are some ways we can optimize the component for performance and reduce load on the server?