import React from 'react'
 
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
  }
  //   setupPet = ()=>{
//     for (const p of this.props.pets){
//       <Pet pet={p} />
//     }
//   }
//   render() {
//     return (
//     <div className="ui cards">
//          {this.setupPet} 
//     </div>)
//   }
}

export default PetBrowser;
