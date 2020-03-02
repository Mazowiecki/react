import React from 'react';
import styles from './testC.module.scss';

class testC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            text: '',
            arr: [1,2,3,4,5,6,7,8,9,10]
        }
    }

    handleClick = () => {
        this.setState({
            text: 'DUPA'
        })

    };

    inputValue = event => {
        this.setState({
            text: event.target.value
        })
    };



    render() {
        return (
            <>
                <div className={styles.testC}>
                    <h1>{this.state.number}</h1> <br/>
                    <button onClick={this.handleClick}>fdsfds</button>
                    <input type="text" onChange={(event)=>this.inputValue(event)}/>
                    <h1>{this.state.text}</h1>
                </div>
                <div>
                    <ul>
                        <ItemList items={this.state.arr}/>
                    </ul>
                </div>
            </>
        )
    }
}


const ItemList = props => {
    const list = [];
    for(let i = 0; i < props.items.length; i++) {
        list.push(<li>{props.items[i]}</li>);
        }
    return list;
};

export default testC;
