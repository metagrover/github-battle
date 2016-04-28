var React = require('react');
var ReactRouter = require('react-router');

var MainContainer = require('../containers/MainContainer');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function ConfirmBattle(props) {
    return props.isLoading == true
        ? <p>Loading</p>
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                
                <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>

            <div className='col-sm-8 col-sm-offset-2' style={{'marginTop': 25 + 'px'}}>
                <div className='col-sm-12'>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div><br/>

                <div className='col-sm-12' style={{'marginTop': 15 + 'px'}}>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;