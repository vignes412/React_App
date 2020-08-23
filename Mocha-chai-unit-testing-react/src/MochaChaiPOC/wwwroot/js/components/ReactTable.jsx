var React = require('react');
var axios = require('axios');

var ReactTable = React.createClass({
    getInitialState: function () {
       
        return{
            data:[]
        }
      
    },
    componentDidMount: function () {
        var _this = this;
        this.serverRequest = axios.get('http://localhost:59847/api/values')
    .then((result) =>{
        this.setState({ data: result.data });
    });
       
    },
 
    render: function () {
     //   var row = console.log(this.state.data);
        var row = this.state.data.map(
            function (item) {
                return 
               <tr> <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td></tr>
                
            }.bind(this)
            );
        return (
          <div>
              <table>
             <thead>
                 <tr>
                    <th>
                        id
                    </th>
                    <th>
                        first Name
                    </th>
                    <th>
                        lastName
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        gender
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    {row}
                  </tbody>
              </table>
              </div>
        );
    }

});

module.exports = ReactTable ;