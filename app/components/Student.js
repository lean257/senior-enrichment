import React from 'react';

export default function Student (props) {

  const student = props.student
  return (
    <ul>
      <li>
        <div>
          <img className="media-object" src={student.image} alt="image" height="92" width="92"/> <br />
          { student.name } <br />
        { student.email }
        </div>
      </li>
    </ul>
  )
}
