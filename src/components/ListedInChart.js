import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledBarChart'

function ListedInChart(props) {

    const listedInNames = props.data === null ? [] : Object.keys(props.data);
    let listedInHeaders = [
      ['Listed In', 'Number of Titles', { role: 'annotation' }]
    ];
    const listedInData = listedInHeaders.concat(listedInNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      listedInData === null ? <p>Loading...</p> : 
        <StyledChart 
        title='Top 10 Categories titles are listed in'
        data={listedInData}  
        height={'60vh'}
        axisTitle='Listed In'
      />
    );
  }

export default ListedInChart;