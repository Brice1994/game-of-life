import React from 'react';
import {CELL_SIZE} from "./Game";
export default class Cell extends React.Component<any, any> {
    render() {
        const { x, y } = this.props;
        let cellStyle = {left: `${CELL_SIZE * x + 1}px`,top: `${CELL_SIZE * y + 1}px`,width: `${CELL_SIZE - 1}px`,height: `${CELL_SIZE - 1}px`      }
        return (
            <div className="Cell" style={cellStyle} />
        );
    }
}
