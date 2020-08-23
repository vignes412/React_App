var React=require("react");

var NoteMenu = React.createClass({
	add: function () {
		var newVal = this.refs.newNoteText.value;
		if (newVal) {
			this.props.addNote(newVal);
			this.refs.newNoteText.value = "";
		}
	},
	handleKeyPress: function (e) {
		if (e.key === 'Enter') {
			this.add();
		}
	},
	render: function () {
		return (
			<div id="note-menu" className="input-group">
				<input type="text" className="form-control" placeholder="Add note here" ref="newNoteText" onKeyPress={this.handleKeyPress}/>
				<span className="input-group-btn">
					<button className="btn btn-default btn-success" type="button" onClick={this.add}>+</button>
				</span>
			</div>

		)
	}
});

module.exports=NoteMenu