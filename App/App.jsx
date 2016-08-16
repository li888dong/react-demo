import React from 'react';
import app from '../css/App.css';
import ItemBox from './ItemBox.jsx';

class App extends React.Component {
   render() {
      return (
		  <div>
         	<header className={app.flex}>
				<ExpectIncome/>
				<DealInfo/>
			</header>
			  <ItemBox/>
		  </div>
      );
   }
}
var ExpectIncome=React.createClass({
	getInitialState:function(){
		return {
			_expectRate : ''
		}
	},
	componentDidMount: function() {
		$.get('./secum_response.json', function(data) {
			var d=data;
			this.setState({
				_expectRate:d.info.expectRate
			});
		}.bind(this));
	},
	render:function(){
		return(
		<div className={app.col}>
			<p className={app.font}>{this.state._expectRate}<span>%</span></p>
			<p>预期年化收益率</p>
		</div>
		)
	}
});

var DealInfo=React.createClass({
	getInitialState:function(){
		return {
			_firstStartAmount : '',
			_prodTerm:''
		}
	},
	componentDidMount: function() {
		$.get('./secum_response.json', function(data) {
			var d=data;
			this.setState({
				_firstStartAmount:d.info.firstStartAmount,
				_prodTerm:d.info.prodTerm
			});
		}.bind(this));
	},
	render:function(){
		return(
			<div  className={app.row}>
				<FirstStartAmount firstStartAmount={this.state._firstStartAmount}/>
				<ProdTerm prodTerm={this.state._prodTerm}/>
			</div>
		)
	}
});
var FirstStartAmount=React.createClass({
	/*getInitialState:function(){
		return {
			_firstStartAmount : ''
		}
	},
	componentDidMount: function() {
		$.get('./secum_response.json', function(data) {
			var d=data;
			this.setState({
				_firstStartAmount:d.info.firstStartAmount
			});
		}.bind(this));
	},*/
	render:function(){
		return(
			<div className={app.itemSize}>
				<p>{this.props._firstStartAmount}</p>
				<p>首次起投金额(元)</p>
			</div>
		)
	}
});
var ProdTerm=React.createClass({
	/*getInitialState:function(){
		return {
			_prodTerm:'',
		}
	},
	componentDidMount: function() {
		$.get('./secum_response.json', function(data) {
			var d=data;
			this.setState({
				_prodTerm : d.info.prodTerm,
			});
		}.bind(this));
	},*/
	render:function(){
		return(
			<div className={app.borderLeft}>
				<p>{this.props._prodTerm}</p>
				<p>项目周期</p>
			</div>
		)
	}
});
export default App;