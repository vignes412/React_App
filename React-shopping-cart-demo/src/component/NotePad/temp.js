/*var notepad = {
    notes: [],
    selectedId: null
};

var nextNodeId = 1;

var onAddNote = function onAddNote() {
    var note = {id: nextNodeId, content: ''};
    nextNodeId++;
    notepad.notes.push(note);
    notepad.selectedId = note.id;
    onChange();
};
*/
var onChangeNote = function (id, value) {
    var note = _.find(notepad.notes, function (note) {
        return note.id === id;
    });
    if (note) {
        note.content = value;
    }
    onChange();
};

var onDeleteNote = function (id) {
    var note = _.find(notepad.notes, function (note) {
        return note.id === id;
    });
    if (note) {
        notepad.notes = notepad.notes.filter(function (note) {
            return note.id !== id;
        });
    }
    if (notepad.selectedId === id) {
        notepad.selectedId = null;
    }
    onChange();
};

var onSelectNote = function (id) {
    notepad.selectedId = id;
    onChange();
};

var NoteSummary = React.createClass({
    render: function () {
        var note = this.props.note;
        var title = note.content;
        if (title.indexOf('\n') > 0) {
            title = note.content.substring(0, note.content.indexOf('\n'));
        }
        if (!title) {
            title = 'Untitled';
        }

        return (
            <div className="note-summary">{title}</div>
        );
    }
});

var NotesList = React.createClass({
    render: function () {
        var notepad = this.props.notepad;
        var notes = notepad.notes;

        return (
            <div className="note-list">
                {
                    notes.map(function (note) {
                        return (
                            <div key={note.id} className={notepad.selectedId === note.id ? 'note-selected' : ''}>
                                <a href="#" onClick={this.props.onSelectNote.bind(null, note.id)}>
                                    <NoteSummary note={note}/>
                                </a>
                            </div>
                        );
                    }.bind(this))
                }
            </div>
        );
    }
});

var Pulse = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.5) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },

    render: function () {
        return (
            <span style={{opacity: this.state.opacity}}>
            {this.props.children}
            </span>
        );
    }
});

var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            isConfirming: false
        };
    },

    onChange: function (event) {
        this.props.onChange(this.props.note.id, event.target.value);
    },

    onDelete: function () {
        if (this.state.isConfirming) {
            this.props.onDelete(this.props.note.id);
            this.setState({isConfirming: false});
        } else {
            this.setState({isConfirming: true});
        }
    },

    onCancelDelete: function () {
        this.setState({isConfirming: false});
    },

    render: function () {
        return (
            <div>
                <div>
                    <textarea rows={5} cols={40} value={this.props.note.content} onChange={this.onChange}/>
                </div>
                {
                    this.state.isConfirming ?
                        <div>
                            <Pulse><button style={{color: 'red'}} onClick={this.onDelete}>Confirm</button></Pulse>
                            <button onClick={this.onCancelDelete}>Cancel</button>
                        </div> :
                        <button onClick={this.onDelete}>Delete note</button>

                }
            </div>
        );
    }
});

var Notepad = React.createClass({
    render: function () {
        var notepad = this.props.notepad;
        var editor = null;
        var selectedNote = _.find(notepad.notes, function (note) {
            return note.id === notepad.selectedId;
        });

        if (selectedNote) {
            editor = <NoteEditor key={selectedNote.id} note={selectedNote} onChange={this.props.onChangeNote} onDelete={this.props.onDeleteNote}/>
        }

        return (
            <div id="notepad">
                <NotesList notepad={notepad} onSelectNote={this.props.onSelectNote}/>
                <div><button onClick={this.props.onAddNote}>Add note</button></div>
                {editor}
            </div>
        );
    }
});

var onChange = function () {
    React.render(
        <Notepad notepad={notepad} onAddNote={onAddNote} onSelectNote={onSelectNote} onDeleteNote={onDeleteNote} onChangeNote={onChangeNote}/>,
        document.body
    );
};

onChange();
