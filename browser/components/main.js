import axios from 'axios';
import React from 'react';


export default class Main extends React.Component {
  constructor(){
    super ()
    this.state ={
      students: [],
      singleStudent: {}
    }
  }

  async componentDidMount(){
    const { data } = await axios.get('/student')
    this.setState({students: data})
  }

  render(){
    return (
      <div>
        <h1>The coolest kids!</h1>
           <ul>
           {this.state.students.map(stud => {
           return <li key={stud.id}> {stud.fullName}</li>
           })}
           </ul>
      </div>

    )
  }


}
