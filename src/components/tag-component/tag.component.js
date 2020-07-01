import React from 'react';
import './tag.component.scss';

const colors = {
    headlines: '#ec5252',
    author: '#3bbd99',
    source: '#0F8CFF'
}

var TagComponent = (props) => {
    if (props.data === null) {
        return(
            <div></div>
        )
    }
    return (
        <div className="tag" style={{backgroundColor: colors[props.type]}}>
             <p className="tag-data">{props.name ? props.name + " : " : null}{props.data}</p>
        </div>
    )
}

export default TagComponent;