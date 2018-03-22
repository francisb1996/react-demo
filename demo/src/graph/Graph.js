import React, {Component} from 'react';
import './Graph.css';

import { GraphElement } from './models/GraphElement';
import { Path } from './models/Path';
import { DetailsBox } from './DetailsBox';

export class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            paths: [],
            activeNode: null
        };  
    }

    render() {
        return(
            <div className="conatiner">
                <h2>GRAPH</h2>
                <div className="graph">
                    {this.state.nodes.map(node => 
                        <div key={node.id} id={node.id} 
                                className={node.type} 
                                style={{top: (node.yPos - 15), left: (node.xPos - 15)}}
                                onClick={() => {
                                    this.setState({activeNode: node});
                                }}>
                            {node.id}
                        </div>
                    )}  
                    {this.state.paths.map(path =>
                        <svg className="path" key={`${path.topicX}${path.topicY}${path.nodeX}${path.nodeY}`} 
                                style={{top: path.yPos, left: path.xPos, width: path.width, height: path.height}}>
                            <line x1={0} y1={0} x2={path.width} y2={path.height}/>
                        </svg>
                    )}
                    <DetailsBox activeNode={this.state.activeNode} />   
                </div>
                <br />
                <button onClick={() => this.loadGraph()}>Load Graph</button>
            </div>
        );     
    }

    loadGraph() {
        const newNodes = [
            new GraphElement('T 1', 50, 50, 'topic'), 
            new GraphElement('R 1', 300, 300, 'reader'),
            new GraphElement('W 1', 400, 160, 'writer')
        ], 
        newPaths = [
            new Path(50, 50, 300, 300),
            new Path(50, 50, 400, 160)
        ];

        this.setState({nodes: newNodes, paths: newPaths})
    }
}