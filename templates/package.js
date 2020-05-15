/* eslint-disable */
module.exports = (name = 'jsmid-song') => {
return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "Project.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "license": "ISC",
  "dependencies": {
    "jsmidi": "file:~/projects/jsmidi"
  }
}
`;
};
