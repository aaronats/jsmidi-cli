/* eslint-disable */
module.exports = (clean = false) => {
return `const {
  JSMidi,
  JSMidiProject,
  JSMidiInstrument
} = require('@jsmidi/core');
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
    // Here we can modify our loop properties like changing its
    // bars and beats, adding parts or enabling repeat.`
    }
    JSMidi.loop.update({ bars: 2, beats: 12 });
    ${ clean ? '' : `
    // Here we create a new instrument called 'piano'
    // on MIDI channel 0 (default).`
    }
    const piano = new JSMidiInstrument('piano', { channel: 0 });
    ${ clean ? '' : `
    // Then we need to add our instrument(s) to JSMidi tracks
    // so we can grab it in the Live.js file.`
    }
    JSMidi.addTracks([piano]);
  }
}
${ clean ? '' : `
// Since we evaluate this file we need to return
// it back to the Atom plugin.`
}
return Project;
`;
};
