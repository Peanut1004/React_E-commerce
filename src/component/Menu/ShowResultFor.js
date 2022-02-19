import React from 'react';

function ShowResultFor(props) {
  const { type, handleTitle } = props;

  const handleToggle = (title) => {
    handleTitle(title)
  }

  return (
    <div className="show-result-for">
      <ul>
        {type.map(type => (
          <li key={type.id}>
            <span onClick={() => handleToggle(type.title)}>{type.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowResultFor;
