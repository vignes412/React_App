var React = require('react');
var PropTypes = React.PropTypes;
const ProjectListComponent = require('../components/ProjectListComponent.js');
const ProjectDetailComponent = require('../components/ProjectDetailComponent.js');
const AppStore = require('../store/AppStore.js');
var style = require('../styles/style.scss');



var ProjectListContainer = React.createClass({
  getInitialState: function() {
    return {
      data:this.props.updatedData,
    ProjectId:0
  };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({data:nextProps.updatedData});
  },
  onclick:function (v) {
  this.setState({
    ProjectId:v
  });
},
  render: function() {
    return (
        <div className={style.listcontainer}>
          <ProjectListComponent data={this.state.data}  HandleOnClick={this.onclick} ProjectId={this.state.ProjectId}/>
          <ProjectDetailComponent ProjectId={this.state.ProjectId} data={this.state.data} />
        </div>
    );
  }
});

module.exports = ProjectListContainer;
