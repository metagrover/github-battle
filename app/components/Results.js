var React = require('react');
var PropTypes = React.PropTypes;

function Results(props) {
    return (
        <p>Results are shown here</p>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;