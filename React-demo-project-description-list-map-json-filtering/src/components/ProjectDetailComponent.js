var React = require('react');
var PropTypes = React.PropTypes;
var style= require('../styles/style.scss');

var ProjectDetailComponent = React.createClass({

  render: function() {
    var id=this.props.ProjectId;
    var item=this.props.data[id];
    try{
    return (
      <div   className={style.projDetail}>
        <h5>{item.projectName}</h5>
        <table>
          <tbody>
          <tr><td><pre>projectDesc        :</pre></td><td>{item.projectDesc}</td></tr>
          <tr><td><pre>ProjectTechnology  :</pre></td><td>{item.projectTech}</td></tr>
          <tr><td><pre>Date Of Intiation  :</pre></td><td>{item.doj}</td></tr>
          <tr><td><pre>Company name       :</pre></td><td>{item.company}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
  catch(e){
    return (  <div   className={style.projDetail}>
        <h5>No Data Found</h5>
      </div>
    );
  }
  }

});

module.exports = ProjectDetailComponent;
