import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index.js' ;

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return <div>Loading...</div>
        }
        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

//ownProps === props about to go into the component
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => ownProps.userId ) }
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);