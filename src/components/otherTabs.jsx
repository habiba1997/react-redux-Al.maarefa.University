import React,{Component} from 'react';

class OtherTabs extends Component {

    render() { 
        return ( 
        <div className="container text-center">
                
                    <h1 className="mt-5">
                        {this.props.value}
                    </h1>
                
        </div> );
    }
}
 
export default OtherTabs;