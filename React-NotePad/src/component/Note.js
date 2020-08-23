var React=require("react");

var Note = React.createClass({
	getInitialState: function () {
		return { isEditing: false }
	},
	delete: function () {
		this.props.deleteNote(this.props.noteId);
	},
	save: function () {
		var newText = this.refs.newText.value;
		this.props.saveNote(newText, this.props.noteId);
		this.toggleEdit();
	},
	toggleEdit: function () {
		this.setState({ isEditing: !this.state.isEditing });
	},
	renderForm: function () {
		return (
			<div>
				<li key={this.props.noteId} noteId={this.props.noteId} className="list-group-item list-group-item-info">
					<span className="note">{this.props.desc}</span>
					<br/>
					<div className="btn-group" role="group">
						<button className="btn btn-default btn-primary" onClick={this.toggleEdit}>Edit</button>
						<button className="btn btn-default btn-danger" onClick={this.delete}>X</button>
					</div>
				</li>
			</div>)
	},
	renderEditForm: function () {
		return (
			<div>
				<li key={this.props.noteId} className="list-group-item list-group-item-info">
					<textarea ref="newText" className="note">{this.props.desc}</textarea>
					<br/>
					<div className="btn-group" role="group">
						<button className="btn btn-default btn-success" onClick={this.save}>Save</button>
						<button className="btn btn-default btn-danger" onClick={this.toggleEdit}>Cancel</button>
					</div>
				</li>
			</div>)
	},
	render: function () {
		if (this.state.isEditing === false) {
			return this.renderForm();
		} else {
			return this.renderEditForm();
		}
	}
});

module.exports=Note;