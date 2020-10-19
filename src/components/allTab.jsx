import React, { Component } from 'react';
import * as actions  from '../redux/actions';
// import {useDispatch, useSelector} from 'react-redux';
import { connect } from "react-redux";
import {retrieveZeroPage} from '../redux/actions';
import PropTypes from 'prop-types';


class AllTab extends Component {
    state = {         
        end =0,
        records = 5,
        unsubscribe: null   

    }
    componentDidMount(){
        this.props.retrieveZeroPage();
        // store.dispatch(actions.retrieveZeroPage());
        // const list = useSelector(state=> state.list);
        // this.setState({list});

    }
    flipPageForwardFunction()
     {
        // store.dispatch(actions.flipPageForward());

     }
     flipPageBackwardFunction()
     {
        // store.dispatch(actions.flipPageBackward());
     }
     trLoop()
     {
         return(  
            this.props.records.map(item => 
            <tr key={item.id}>
                <th scope="row">{item.id}</th>

                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{item.major}</td>
            </tr>
            )
        );
     }
    render() { 
        return ( 
        <div >
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                <ul className="pagination justify-content-center">
                    <li className="mr-4 page-item">
                        <p className="page-link anchor_unpressable text-dark">
                            1-5 of 5
                        </p>
                    </li>
                    {/* disabled */}
                    <li className="page-item">
                        <button 
                            className="page-link" 
                            onClick={this.flipPageBackwardFunction}> {"<"} </button>
                    </li>
                    <li className="page-item">
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
    retrieveZeroPage: PropTypes.func.isRequired,
    records: PropTypes.array.isRequired
}



const mapDispatchToProps =(state)=> ({
  records: state.records

});
export default connect(
    mapDispatchToProps,
    { retrieveZeroPage }
  )(AllTab);
  
