const Todo = ({text, completed, onChange}) => {
  return (
    <ul>
        <input type = "radio" 
        onClick = {onChange}
        checked = {completed && true}
        />
        {text}
      </ul>
  )
}