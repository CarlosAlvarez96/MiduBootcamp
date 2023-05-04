const Note = ({id, content, date}) => {
    return (
    <div>
      <p key={id}>
        {content}
      </p>
    </div>
    )
  }
export default Note