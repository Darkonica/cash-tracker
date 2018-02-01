import React from 'react';
import { parseString } from 'xml2js';

export class CurrencyWidget extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: {},
				isLoading: false
			};
		};

		getData(){
      return fetch('https://api.fixer.io/latest?base=USD')
	      .then((response) => response.json())
	      .then(data => this.setState({ data: data.rates, isLoading: false }))
	      .catch((error) => {
	        console.error(error);
	      });
    }

    componentDidMount() {
    	this.setState({ isLoading: true });
      this.getData();
    };
		
		render() {
			return (
				<div className="currency-widget">
					<h1>Exchange rates</h1>

					<div className="flex-cont pure-u-sm-1-2">
						<div className="block">
							<div className="icon"></div>
						</div>
						<div className="block">
							<h3>EUR</h3>
							<span className="rate">{this.state.data.EUR && this.state.data.EUR}$</span>
						</div>
						<div className="block">
							<h3>GBP</h3>
							<span className="rate">{this.state.data.GBP && this.state.data.GBP}$</span>
						</div>
					</div>
					
				</div>
			);
		}
};

export default CurrencyWidget;