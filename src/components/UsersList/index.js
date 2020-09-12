import React, {Component} from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

class Index extends Component {
    state = {
        users: [],
        search: ''
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/', {params: {gender: 'lego', results: 10}})
            .then(e => this.setState({users: e.data.results}))
    }

    search = ev => {
        this.setState({search: ev.target.value})
    }

    render() {
        return (
            <div className='users-list'>
                <input type='search' value={this.state.search} onChange={this.search}/>
                <div className='users-items'>
                    {this.state.users.map(e => {
                        let username = `${e.name.title} ${e.name.first} ${e.name.last}`;
                        return (username.toLowerCase().includes(this.state.search)) ? <div key={username}>
                            <div><img src={e.picture.medium}/></div>
                            <div>{username}</div>
                        </div> : null
                    })}
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;