## JSMidi CLI

The `jsmidi-cli` is a command line tool for creating new JSMidi Projects. It creates
the files and configurations needed to work with
[JSMidi](https://github.com/aaronats/jsmidi) and the
[JSMidi Atom Plugin](https://github.com/aaronats/jsmidi-atom).

### Installation

Globally install `jsmidi-cli` using the [npm](https://www.npmjs.com/) package manager.

```
$ npm install -g jsmidi-cli
```

#### Usage

To create a new JSMidi Project run the following command where "myproject" is whatever
you would like to name your project.

```
$ jsmidi new myproject
```

You should see the following output...

```
./myproject/jsmidi.config.json created
./myproject/.eslintrc.json created
./myproject/Live.js created
./myproject/.gitignore created
./myproject/Project.js created
./myproject/package.json created
```

Once your new project is created we need to install our dependencies.

```
$ cd myproject && npm install
```

NOTE: Creating a new project will include instructional comments in the `Project.js`
and `Live.js` files. To create a new project without those comments use the `--clean`
flag.

```
$ jsmidi new myproject --clean
```


### Project Structure

Below is a breakdown of the project structure when you create a new project.

```
|-- lib
|-- .gitignore
|-- .eslintrc.json
|-- jsmidi.config.json
|-- package.json
|-- Project.js
|-- Live.js
```

#### Project.js

The `Project.js` file is where we setup the loop, tempo, define instruments and add those
instruments to JSMidi tracks.

#### Live.js

The `Live.js` file is where we "play" our instruments and live code.

#### Lib Folder

The `lib` folder is where we can require additional files in our project. For example
since you can extend JSMidi Instruments you may want to create a drum and add your
own functions like a fill, symbol crash, etc. You can add those files to the
`lib` folder and require them __without__ relative paths.

```javascript
// Notice there is no relative path.
const drums = require('lib/drums');
```

#### Config File

The `jsmidi.config.json` file is where we store information we need when building
a JSMidi Project. If for some reason you would like to change the name of the
`Project.js` file, the `Live.js` file or the `lib` folder you can make those changes
in the `jsmidi.config.json` file.

This file is also __required__ for the
[JSMidi Atom Plugin](https://github.com/aaronats/jsmidi-atom) to work.

```json
{
  "live": "Live.js",
  "project": "Project.js",
  "lib": "lib"
}
```
