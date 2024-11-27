console.log("starting app.js");
const fs = require('fs');
fs.appendFileSync("greeting.txt","Hello World!");
const yargs = require("yargs")
const notes = require('./notes.js');
const argv = yargs.argv;
var title = yargs.argv.title;
var body = yargs.argv.body;
var command =yargs.argv._[0];
if (command === "add") {
    console.log("adding note");
    notes.addingNote(title,body);
}
else if (command === "remove") {
    console.log("removing note");
    notes.removeNote(title);
}
else if (command === "read") {
    console.log("reading note");
    notes.readingNote(title);
}
else if (command === "list") {
    console.log("listing all notes");
    notes.getAll();
}
else{
    console.log("unkown command was used");
    
}
