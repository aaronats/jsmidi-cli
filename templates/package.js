/* eslint-disable */
module.exports = (name = 'jsmid-song') => {
return `{
  "name": "${name}",
  "version": "0.0.0",
  "description": "A JSMidi project",
  "main": "Project.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "license": "ISC",
  "dependencies": {
    "@jsmidi/core": "^0.0.2"
  }
}
`;
};
