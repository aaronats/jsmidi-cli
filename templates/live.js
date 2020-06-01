/* eslint-disable */
module.exports = (clean = false) => {
return `const { JSMidi } = require('jsmidi');
${ clean ? '' : `
/**
 * This is our Live file where we do our live coding :)
 *
 * Every time the file is saved we look for changes and re-evaluate
 * the file. If there are no errors our changes are reflected
 * on the next beat. If there is an error we fall back to our last
 * clean source code and our song plays on until we fix the error
 * and save again.
 *
 * NOTE: If you are tired of seeing these comments just use
 * the --clean flag when creating a new project with jsmidi-cli.
 *
*/`
}
class Live {
  static reload() {${ clean ? '' : `
    // When we make changes to the live file we need
    // to flush the previous events so our changes
    // are reflected. This is REQUIRED at the very
    // top of this function.`
    }
    JSMidi.resetTracks();
    ${ clean ? '' : `
    // Although 120 BPM is the default and this
    // is not required here, this is where you would
    // control the tempo.`
    }
    JSMidi.setTempo(120);
    ${ clean ? '' : `
    // Grab any instrument(s) that you have defined and
    // added to JSMidi tracks in your project file.`
    }
    const { piano } = JSMidi.tracks;
    ${ clean ? '' : `
    // Finally play note C4 at every first beat and hold
    // for 1/2 a note.`
    }
    piano.play('*:*:1', { notes: 'C4', hold: 0.5 });
  }
}
${ clean ? '' : `
// Since we evaluate this file we need to return
// it back to the Atom plugin.`
}
return Live;
`;
};
