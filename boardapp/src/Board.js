import './Board.css';
import React from 'react';
import Note from './Note'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {id: 0, note: 'Have a nice day!'},
                {id: 1, note: "Make prototype"},
                {id: 2, note: "submit project"}
            ]
        }
        this.uniqueId = this.state.notes.length;
    }

    nextId = () => {
        this.uniqueId = this.uniqueId+1;
        return this.uniqueId;
    }

    add = (text) => {
        let notes = [
            ...this.state.notes,
            {
                id: this.nextId(),
                note: text
            }
        ]
        this.setState({notes});
    }

    // Fixed by removing the curly parenthesis? 
    update = (newText, id) =>  {
        let notes = this.state.notes.map(
            (note) => (note.id !== id) ? 
                note:
                {
                    ...note, 
                    note: newText
                }
            );
        this.setState({notes});
    }

    remove = (id) => {
        let notes = this.state.notes.filter( note => note.id!== id )
        this.setState({notes});
    }

    eachNote = ( note ) => { 
        return (<Note key={note.id} 
        id={note.id} 
        onChange={this.update} 
        onRemove={this.remove}>{note.note}</Note>)
    }
    render() {
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={() => this.add()}>Add</button>
            </div>
        );
    }
}

export default Board;