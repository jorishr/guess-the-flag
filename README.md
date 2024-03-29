# Guess the flag

![Website](https://img.shields.io/website?url=https://guess-the-flag.liondigits.com)
![GitHub package.json version](https://img.shields.io/github/package-json/v/jorishr/guess-the-flag)
![node-current](https://img.shields.io/node/v/node-sass)

Simple game guess-the-flag game build with React. The user is presented with a flag and four options are given. Guess to which country the given flag belongs. The default game has 5 rounds but the user can choose in the welcome screen to extend the game up to 100 rounds. A final score is rendered at the end of the game, including a custom message based on the final score.

- [Guess the flag](#guess-the-flag)
  - [Developer notes](#developer-notes)
    - [React State Management](#react-state-management)
    - [Node.js support](#nodejs-support)

## Developer notes

### React State Management

State management for the following items:

- game rounds
- total score
- country list
- options list
- target answer
- user input answer

### Node.js support

This game was developed using Node.js v12 and depends on Node-sass v4. If you run into issues rebuild node-sass (`npm rebuild node-sass`). Higher versions of Node.js have not been tested and there is no plan or requirement to update or support them for this project.
