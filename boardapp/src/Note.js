import React from 'react';
import ReactDraggable from 'react-draggable'


class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    
    componentWillMount = () => {
        this.style = { 
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(0, window.innerHeight - 150, 'px')
        }
    }

    randomBetween = (x, y, s) => {
        // between x, y and s is a random number
        return(x+ Math.ceil(Math.random() * (y-x))) + s
    }

    edit = () => {
        this.setState({editing: true});
    }

    save = () => {
        this.props.onChange(this.refs.newText.value, this.props.id);
        this.setState({editing: false});
    }

    delete = () => {
        this.props.onRemove(this.props.id);
    }

    renderForm = () => {
        // save the text area in the ref
        return (
            <div className="note" style={this.style}>
                <textarea ref="newText"></textarea>
                <button onClick = {this.save}>Save</button>
            </div>
            
        )
    }

    renderDisplay = () => {
        return (
            <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}>Edit</button> 
                    <button onClick={this.delete}>X</button>
                </span>
            </div>)
    }
    // Assign the events to the button
    render() { 
        return ( <ReactDraggable>{
            (this.state.editing) ? this.renderForm(): this.renderDisplay()
        }</ReactDraggable>)
    }
}

export default Note;