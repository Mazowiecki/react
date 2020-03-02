import React from 'react';
import styles from './testC.module.scss';

class testC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 1
        }
    }

    handleClick = () => {
        this.setState({
            text: this.state.text += 1,
        })
    };



    render() {
        return (
            <div className={styles.testC}>
                <h1>{this.state.text}</h1> <br/>
                <button onClick={this.handleClick}>fdsfds</button>
            </div>
        )
    }
}

export default testC;
