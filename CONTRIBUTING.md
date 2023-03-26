## Prerequisites

1. Install node.js. For more information about how to install node.js, click [here](https://nodejs.dev/en/download/)
2. Clone the project: 
`git clone https://github.com/faizak1/DomainLogger.git`
3. Install development dependencies by running the following npm commands:
- `npm install`: install dependencies
- `npm run build`: compile the babel modules
4. Run the following commands prior to opening any PR
- `npm run eslint`: run static analysis with `eslint`
- `npm run prettier`: autoformat the code with `prettier`
- `npm run test`: run the test suite, written using `jest` 
5. Before opening any PR, please run the Chrome Extension output to ensure your new features and all existing features are working as expected. To run the output on Chrome:
    a. Go to chrome://extensions/
    b. Turn on the "Developer Mode" toggle on the top right corner
    c. Click on "load unpacked" and select the folder which has this extension
    d. Click on the "Extensions" gear on the top right corner of the chrome window
    e. Click on the "Domain Logger" Extension to see the list of domains you have open in that window along with the number of tabs associated with that domain
    f. Ensure all existing features work, along with any new feature you would like to contribute
6. Please add tests for any new features to maintain high code coverage
7. Maintain documentation and update README.md "feature" section for any new features
