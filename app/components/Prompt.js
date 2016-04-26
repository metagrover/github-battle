var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var Prompt = function(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>       
            <h1>{props.header}</h1>
            <br/>

            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>   
                    <div class="form-group">
                        <input 
                            className="form-control" 
                            placeholder="Github Username"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            type="text" />
                    </div>
                    <br/>

                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">
                            Continue
                        </button>
                    </div> 
                </form>
            </div>
        </div>
    )
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired
};

module.exports = Prompt;