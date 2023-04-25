import React, { useState } from "react";

const Course = ({ course }) => {
  const [total, setTotal] = useState(0);

  // Calcula el total de ejercicios al inicio
  useState(() => {
    const totalExercises = course.reduce((acc, cur) => {
      return acc + cur.parts.reduce((acc, cur) => {
        return acc + cur.exercises;
      }, 0);
    }, 0);
    setTotal(totalExercises);
  }, [course]);

  return (
    <div>
      {course.map((e, index) => {
        return (
          <div key={index}>
            <h1>{e.name}</h1>
            {e.parts.map((part, index) => {
              return (
                <div key={index}>
                  <p>{part.name} {part.exercises}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <br></br>
      <strong><p>Number of exercises: {total}</p></strong>
    </div>
  );
};

export default Course;
