/* eslint-disable */
module.exports = (clean = false) => {
return `const {
  JSMidi,
  JSMidiProject,
  JSMidiInstrument
} = require('jsmidi');
${ clean ? '' : `
/**
 * This is our Project file where we setup our project, create
 * instruments, add tracks and configure our loop.
 *
 * Every time this file is saved we rebuild the project. If the loop
 * is playing it will stop so changes are reflected.
 *
 * NOTE: If you are tired of seeing these comments just use
 * the --clean flag when creating a new project with jsmidi-cli.
*/`
}
class Project extends JSMidiProject {
  setup() {${ clean ? '' : `
    // Here we can modify or loop properties like changing its
    // bars and beats, adding parts or setting the repeat property.`
    }
    JSMidi.loop.update({ bars: 2, beats: 12 });
    ${ clean ? '' : `
    // Here we create a new instrument called 'piano'.
    // Note that the default midi channel is 0.`
    }
    const piano = new JSMidiInstrument('piano');
    ${ clean ? '' : `
    // Then we need to add that instrument to JSMidi tracks
    // so we can grab it in the Live file`
    }
    JSMidi.addTrack(piano);
  }
}
${ clean ? '' : `
// Since we evaluate this file we need to return
// it back to the Atom plugin.`
}
return Project;
`;
};
