var React = require('react');
var ReactDOM = require('react-dom');
var NoteMenu = require("./NoteMenu");
var NoteList = require("./NoteList");

var App = React.createClass({
	getInitialState: function () {
		return {
			notes: []
		}
	},
	add: function (newNoteText) {
		var newNote = this.state.notes;
		newNote.push({
			'desc': newNoteText
		});
		this.setState({
			notes: newNote
		});
	},
	delete: function (id) {
		var newNotes = this.state.notes;
		newNotes.splice(id, 1);
		this.setState({
			notes: newNotes
		});
	},
	save: function (newText, id) {
		var newNotes = this.state.notes;
		newNotes[id] = {
			'desc': newText
		};
		this.setState({
			notes: newNotes
		});
	},
	render: function () {
		return ( <div>
			<NoteMenu notes = {this.state.notes} addNote = {this.add}/> 
			<NoteList notes = {this.state.notes} deleteNote = {this.delete} saveNote = {this.save}/>
			 </div>
		)
	}
});





module.exports = App;