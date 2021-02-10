import React, {Component} from 'react';
import SearchField from "./components/SearchField.js";
import History from "./components/History";
import CoinFetcher from "./components/CoinFetcher";

class Main extends Component{

    state = {
        characters: [],
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
 //       CoinFetcher.setState({search:this.state.characters})
    }

    render(){
        const searching = this.state
        const { characters } = this.state


        if (searching){
            return(
                <div>
                    <table>
                        <tr>
                            <td>
                                <SearchField handleSubmit={this.handleSubmit}/>
                            </td>
                            <td>
                                <History
                                    characterData={characters}/>
                            </td>
                        </tr>
                    </table>
                <CoinFetcher coin={characters}/>
            </div>
            )
        }
    }
}

export default Main;