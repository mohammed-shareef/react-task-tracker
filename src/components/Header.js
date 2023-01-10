
import PropTypes from 'prop-types'
import Button from './Button'

//CSS in JS
// const headingStyle = {
//      color:'lightblue',
//      backgroundColor:'gray'
// };

// const Header = (props) => {
const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
    {
      /* Using a style in line */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      {/* using the props above as the base class which holds all properties */}
      {/* <h1>{props.title}</h1> */}

      <h1>{title}</h1>

      {/* This will be moved to a button component */}
      {/* <button className='btn'>Add</button> */}
      <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>

    </header>
  )
}

Header.defaultProps = {
title : 'Task Tracker',
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Header
