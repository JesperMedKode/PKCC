import React, {Component} from "react";


class CoinFetcher extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            coins: [],
            search: 'bitcoin'
        };
    }

//    static fetchCoin(){
  //      const {search} = this.state
    //    this.setState({search})
//}
    componentDidMount() {
        const url ='https://api.coingecko.com/api/v3/coins/';
        const {search} = this.state
        fetch(url + search)
            .then(res => res.json())
            .then(
                (result)=> {
                    console.log(result)
                    this.setState({
                        isLoaded:true,
                        coins: result
                    })
                },
                (error) =>{
                    console.log(error)
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const{error, isLoaded, coins}=this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <ul>
                    <p>
                        name: {coins.id} <br/>
                        price: {coins.market_data.current_price.dkk} dkk<br/>
                        ticker: {coins.tickers[0].last}
                    </p>
                </ul>
            );
        }
    }

}


export default CoinFetcher
