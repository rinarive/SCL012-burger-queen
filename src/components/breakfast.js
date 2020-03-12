import React, { Component } from 'react';
import db from './confg/firebase';


class Breackfast extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuA: []
      }
    }
    
    componentDidMount(){
      db.collection('MenuDesayuno').get().then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuA:data
        })
      
        console.log("STATE:", this.state);
      })
          
    }
    render(){
      return (      
        <div className="App-header">
          
          {this.state.menuA.map((item, key) =>{
              return (
                  <div>
                <div key={key}>
                <button><img alt="foto" src={item.img}></img><p>{item.Name}</p><p>{item.Precio} </p></button>
                 
                </div>
                </div>
              ) 
            })          
          }      
        </div>
      )
      }
    }
  
export default Breackfast