# AmateurPanda92 Asset Server

## Development

### Prerequisites

You’ll need to install the following dependencies and ensure they’re available on the path:

1. [Node.js](https://www.nodejs.org/)
2. [npm](https://www.npmjs.com/)

### Running

To run the server locally, open a terminal instance and issue the command `npm start` to start the server on the specified port.

### Configuration

If you need to override any of the default environment variables defined in `.env.defaults`, you can do so by creating a `.env` file (which will be ignored by Git). Default env vars will be read from `.env.defaults` _unless_ a corresponding override can be found in `.env`. Only the env vars specified in `.env` will be overridden — the rest will be loaded from `.env.defaults`.
