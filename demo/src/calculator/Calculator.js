import React, {Component} from 'react';
import './Calculator.css';

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            history: []
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="screen">
                    <div className="history-container">
                        <button id="show-history-btn">▼</button>
                        <div className="history">
                            {this.state.history[this.state.history.length - 1]}
                        </div>
                    </div>
                    <div className="display">
                        {this.state.display}
                    </div>
                </div>
                <div className="controls">
                    <table>
                        <tbody>
                            <tr>
                                <td><button className="number-btn">7</button></td>
                                <td><button className="number-btn">8</button></td>
                                <td><button className="number-btn">9</button></td>
                                <td><button className="func-btn">÷</button></td>
                                <td><button className="func-btn">√</button></td>
                            </tr>
                            <tr>
                                <td><button className="number-btn">4</button></td>
                                <td><button className="number-btn">5</button></td>
                                <td><button className="number-btn">6</button></td>
                                <td><button className="func-btn">*</button></td>
                                <td><button className="func-btn">±</button></td>
                            </tr>
                            <tr>
                                <td><button className="number-btn">1</button></td>
                                <td><button className="number-btn">2</button></td>
                                <td><button className="number-btn">3</button></td>
                                <td><button className="func-btn">-</button></td>
                                <td rowSpan="2"><button className="eq-btn">=</button></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><button className="number-btn">0</button></td>
                                <td><button className="number-btn">.</button></td>
                                <td><button className="func-btn">+</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}