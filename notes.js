console.log("starting notes.js");
const fs = require("fs");
const { title } = require("process");
var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.txt"))
    } catch (error) {
        return [];
    }

}
var addingNote = (title,body) =>{
    var notes = fetchNotes();
 

    
    var note ={
        title,
        body,
    };
    var double = notes.filter((note)=>note.title === title)
    if (double.length === 0) {
        notes.push(note);
        fs.writeFileSync("notes.txt",JSON.stringify(notes))
        logNote(note);
    }
    else{
        console.log("title existe");
        
    }
    
    
}
var removeNote = (title) => {
    var notes = fetchNotes();
    var filtredNotes = notes.filter((note) =>note.title  !== title)
    fs.writeFileSync("notes.txt",JSON.stringify(filtredNotes))
}
var readingNote = (title) => {
    var notes = fetchNotes();
    var filtredNotes = notes.filter((note) =>note.title  === title)
    logNote(filtredNotes[0]);
    
}
var getAll = () => {
    var notes = fetchNotes();
   
    notes.forEach((note)=>logNote(note) );
    
}
var logNote =(note) =>{
    console.log("****************************************");
    console.log(`title: ${note.title} body: ${note.body}`);
    
    
}
module.exports = {
    addingNote,
    removeNote,
    readingNote,
    getAll,
}