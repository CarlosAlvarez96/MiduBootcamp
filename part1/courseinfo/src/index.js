import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  const {course} = props
  return <h1>{course.name}</h1>
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}


const Total = (props) => {
  return <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
      </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))