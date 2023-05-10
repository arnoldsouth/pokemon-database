# Pokemon Database

This repository contains a web application for viewing information about all currently released Pokemon. The application is built using React and relies on data from the [PokeAPI](https://pokeapi.co/).

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `client` directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000/`.

To run the server locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `server` directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm run dev` to start the server.
5. The server will be available at `http://localhost:5000/`.

## Endpoints

The server provides the following endpoints:

- `/api/pokemon` - Returns a list of all Pokemon, with basic information such as name and ID number.
- `/api/pokemon/:id` - Returns detailed information about a specific Pokemon. Replace `:id` with the ID number of the Pokemon.

Both endpoints return data in JSON format.

## Usage

Once the application and server are running, you can browse Pokemon by name or ID number using the search bar at the top of the page. Clicking on a Pokemon's name or image will take you to a detailed view of that Pokemon, which includes information such as its type, stats, and abilities.

### Contributing

If you find a bug or would like to suggest a new feature, please open an issue on the GitHub repository. Pull requests are also welcome.

### Credits

This application and server were created by Arnold Southammavong using React, Node.js, Express, and the PokeAPI.
