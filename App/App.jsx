import React from 'react';
import app from '../css/App.css';
import ItemBox from './ItemBox.jsx';

class App extends React.Component {
   render() {
      return (
		  <div>
			  <ProfitBox/>
			  <ItemBox/>
		  </div>
      );
   }
}
var ProfitBox=React.createClass({
	getInitialState:function(){
		return{
			_expectRate : '-',
			_firstStartAmount : '',
			_prodTerm:''
		}
	},
	componentDidMount:function(){
		$.get('./secum_response.json',function(data){
			var d=data;
			this.setState({
				_expectRate:d.info.expectRate,
				_firstStartAmount:d.info.firstStartAmount,
				_prodTerm:d.info.prodTerm
			});
		}.bind(this));
	},
	render:function(){
		return(
			<div className={app.flex}>
				<div className={app.col}>
					<p className={app.font}>{this.state._expectRate}<span>%</span></p>
					<p>预期年化收益率</p>
				</div>
				<div  className={app.row}>
					<div className={app.itemSize}>
						<p>{this.state._firstStartAmount}</p>
						<p>首次起投金额(元)</p>
					</div>
					<div className={app.borderLeft}>
						<p>{this.state._prodTerm}</p>
						<p>项目周期</p>
					</div>
				</div>
			</div>
		)
	}
});
export default App;