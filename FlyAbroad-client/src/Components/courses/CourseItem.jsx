import React from 'react';

const CourseItem = ({ course, onSelect }) => {
  return (
    <div
      className="course-item"
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0'
      }}
    >
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      {course.duration && <p>Duration: {course.duration}</p>}
      {course.price && <p>Price: ${course.price}</p>}

      <button onClick={() => onSelect(course.id)}>
        Select Course
      </button>
    </div>
  );
};

export default CourseItem;
