# Random Quote Machine

This is a simple "Random Quote Machine" web application built using React. The app displays a random quote fetched from a JSON file and allows users to get a new random quote by clicking a button. Additionally, the app provides a link to the GitHub repository where the code for this project is hosted.

## How to Use

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to view the app.

## Features

- Displays a random quote along with its author.
- Clicking the "New" button fetches a new random quote from the JSON file.
- GitHub link provided in the app to access the repository.

## Code Explanation

- The app imports required modules and sets up state using the `useState` hook to store the random quote.
- The `useEffect` hook is used to fetch the quotes from the JSON file when the component mounts.
- The `quoteSelect` function fetches the quotes and selects a random quote to display.
- When the "New" button is clicked (`handleChangeQuote` function), a new random quote is fetched and displayed.
- The app renders the quote and author along with the "New" button and GitHub link.

## Dependencies

- React: `^17.0.2`
- react-icons: `^4.3.1`

## Live Demo

You can try out the Random Quote Machine [here](https://random-quote-machine-danilo.netlify.app).

Feel free to explore the code and contribute to the project if you'd like!
