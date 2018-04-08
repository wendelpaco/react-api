import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 5,
};

const RaisedButtonComponent = ({ printConsole, history }) => {
    // const handleSubmit = (e) => {
    // e.preventDefault()
    // printConsole()
    return (
        <div>
            <RaisedButton
                label="Primary"
                primary={true} style={style}
                type="submit"
            />
        </div>
    )
}

export default RaisedButtonComponent;