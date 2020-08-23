var React= require("react");
var Note=require("./Note");

var NoteList = React.createClass({
	render: function () {
		return (
			<ul className="list-group">{this.props.notes.map((note, i) => <Note key={i} noteId={i} desc={note.desc} deleteNote={this.props.deleteNote} saveNote={this.props.saveNote}/>) }
			</ul>
		)
	}
});

module.exports=NoteList;