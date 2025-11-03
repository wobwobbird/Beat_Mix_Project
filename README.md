# Beat Mix - Drum Machine (Code Academy Project)

A drum machine application built as part of a backend development course. This project implements the core logic for managing drum patterns and presets.

## Project Overview

This task focused on building the logic for a drum machine app. The main objectives were to:
- Create and manage four drum arrays (kicks, snares, hi-hats, ride cymbals)
- Write functions to toggle, clear, and invert drum steps
- Creating a middlewear server function that recives GET and PUT requests, checks, and sends a response with status codes
- Run tests on the functions and passed all tests (38/38) ✅

## Implementation

### `script.js` - Core Drum Logic

Contains the essential functions for managing drum patterns:

- **`toggleDrum(drumType, id)`**: Toggles a drum step at a specific index (0-15) in the specified drum array. Includes validation for missing arguments, out-of-range indices, and invalid drum types.

- **`clear(drumType)`**: Sets all values in a drum array to `false`. Validates the drum type before clearing.

- **`invert(drumType)`**: Flips all boolean values in a drum array. Validates the drum type before inverting.

Each function includes proper error handling to prevent mutations when called with invalid arguments.

### `presetHandler.js` - Preset Management

The `presetHandler` function manages saving and loading drum machine presets on the server:

- **GET requests**: Retrieves a preset at a given index
- **PUT requests**: Updates/saves a preset at a given index with a new drum array
- Returns appropriate HTTP status codes:
  - `200` for successful operations
  - `400` for invalid request methods
  - `404` for out-of-range indices

## Testing

Run the test suite with:
```bash
npm test
```

All 38 tests pass, covering:
- Drum array initialization and uniqueness
- Function validation and edge cases
- Error handling for invalid inputs
- Preset GET/PUT operations with proper status codes

## Getting Started

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open `index.html` in a browser

## Technologies

- JavaScript (ES6+)
- Node.js / Express
- Mocha / Chai (testing)
