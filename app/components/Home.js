var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>Github Battle</h1>
                <p>May the odds be ever in your favor</p><br/>
                <Link to="/playerOne">
                    <button className="btn btn-success">Get Started</button>
                </Link>
            </div>
        );
    }
});

module.exports = Home;