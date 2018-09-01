import React, {Component} from 'react'

class Pokemon extends Component {
    constructor(props){
        super(props)
        this.state = { attributes: [] }
    }

    componentDidMount() {
        const requestPokemonAwait = requestPokemonAwait = async () => {
            const response = await fetch(this.props.url)
            const pokemon_attrs = await response.json()
            this.setState({attributes: pokemon_attrs})
            requestPokemonAwait()
        }
    }

    render(){
        var imgURL = ''

        if (this.state.attributes.id !== undefined){
            imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png/`
        }
        return (
            <div className="card pokemon">
    <div className="card-image">
        <figure className="image is-128x128">
            <img src="" alt="pokemon" ></img>
        </figure>
     </div>
    
    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{this.state.attributes.nama}</p>
      </div>
      
      <table className="table is-narrow is-fullwidth">
        <tbody>
          <tr>
            <td className="has-text-bold">Weight</td>
            <td> </td>
          </tr>
    
          <tr>
            <td className="has-text-bold">Height</td>
            <td> </td>
          </tr>
    
          <tr>
            <td className="has-text-bold">Abilities</td>
            <td>  </td>
          </tr>
    
          <tr>
            <td className="has-text-bold">Moves</td>
            <td>  </td>
          </tr>
    
        </tbody>
      </table>
      
    </div>
        
    <footer className="card-footer">
      <button className="button is-primary" >
        Capture
      </button>
    </footer>
    </div>



        )
    }
    
}