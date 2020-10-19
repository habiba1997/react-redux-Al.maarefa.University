import React, { Component } from 'react';
import { connect } from "react-redux";
import {retrieveRecords} from '../fakeStudentsService/actions';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa'

class AllTab extends Component {
    state = {         
        end :0,
        numRecordPage : 5,
        records: [],
        currentRecords:[],
        length: 0

    }
    
    constructor(props)
    {
        super(props);
        props.retrieveRecords();
    }
    componentWillReceiveProps(nextProps)
    {
        let arr = nextProps.records.data;
        this.setState({
            records : arr, 
            length  : nextProps.records.length,
            currentRecords: arr.slice(0,this.state.numRecordPage) 
        });
    }
     
    flipPageForwardFunction=()=>
     {
        let {end,numRecordPage,records,length} = this.state;
        if(end+numRecordPage < length )
		{
            let newEnd = end +numRecordPage;
            this.setState({
                currentRecords: records.slice(newEnd, newEnd+numRecordPage),
                end : newEnd
            });
            return;

		}	
     }
     flipPageBackwardFunction=()=>
     {
        let {end,numRecordPage,records} = this.state;
		let indexBack = end;
		if(indexBack-numRecordPage >=0)
		{	
			let newEnd = indexBack-numRecordPage;
			this.setState(
                {
                    currentRecords: records.slice(newEnd,indexBack),
                    end: newEnd
                }
            );
            return;
        }  
       
     }
     trLoop=()=>
     {
         return(  
            this.state.currentRecords.map(item => 
            <tr key={item.id}>
                {/* <th scope="row">{item.id}</th> */}
                
                <td><FaUser className="text-primary"/> 
                    <span className="m-3">
                     {item.email}
                    </span>
                </td>
                <td>{item.status}</td>
                <td>{item.major}</td>
            </tr>
            )
        );
     }
    flipForward()
    {
        let {end,numRecordPage,length} = this.state;
        let classes = "page-item ";
        return classes+= (end+numRecordPage>=length)? " disabled": "";
     }
    flipBackward()
    {
        let {end,numRecordPage} = this.state;
        let classes = "page-item ";
        return classes+= (end-numRecordPage<0)? " disabled": "";
    }
    pageStatus=()=>{
        let {end,numRecordPage,length} = this.state;
        return (1+end)+"-"+ ((end+numRecordPage > length)? length : end+numRecordPage) + " of " + length;
    }
    render() { 
        
        return ( 
        <div >
            <table className="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">{this.props.t('all_tab.1')}</th>
                            <th scope="col">{this.props.t('all_tab.2')}</th>
                            <th scope="col">{this.props.t('all_tab.3')}</th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.trLoop()}
                    </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end">
                    <li className="mr-4 page-item">
                        <p className="page-link anchor_unpressable text-dark">
                            {this.pageStatus()}
                        </p>
                    </li>
                    {/* disabled */}
                    <li className={this.flipBackward()}>
                        <button 
                            className="page-link" 
                            onClick={this.flipPageBackwardFunction}> {"<"} </button>
                    </li>
                    <li className={this.flipForward()}>
                        <button 
                            className="page-link" 
                            onClick={this.flipPageForwardFunction}> {">"}  </button>
                    </li>
                 </ul>
            </nav>
        </div> );
    }
}
AllTab.propTypes = {
    retrieveRecords: PropTypes.func.isRequired,
    records: PropTypes.object.isRequired
}



const mapDispatchToProps =(state)=> {
    return ({
        records: state.records
      });
};
export default connect(mapDispatchToProps,{ retrieveRecords })(AllTab);
  

  