import React, { Component } from 'react';
import AllTab from './allTab';
import OtherTabs from './otherTabs';





class Tabs extends Component {
    state = { 
        tabNumber:1
    }



    activeTab=(num)=>{
        let str = "buttonRemovedCss nav-item nav-link ";
        str += (this.state.tabNumber===num)? "active":"";
        return str;
     } 
    
     switchTab=(num)=>{
         this.setState({tabNumber:num});
     }
     otherTab(num)
     {
        let {t } = this.props;
        let str = t('otherTab.part1');
        switch(num)
        {
            case 1:
                str+=this.props.t('tabs.1');
                break;
            case 2:
                str+=this.props.t('tabs.2');
                break;
            case 3:
                str+=this.props.t('tabs.3');
                break;
            case 4:
                str+=this.props.t('tabs.4');
                break;   
            case 5:
                str+=this.props.t('tabs.5');
                break;
            default:
                str+=this.props.t('tabs.1');
                break;

            
            

        }
        return str+t('otherTab.part2');
     }
    render() {         
       
        return ( 
        
<section id="tabs" className="tabs project-tab">
       
                    <nav>
                        <div className="nav nav-tabs text-center center">
                            <button className={this.activeTab(1)} 
                            onClick={()=>this.switchTab(1)}><span className="ml-3 mr-3 text-center">{this.props.t('tabs.1')}</span></button>
                            <button className={this.activeTab(2)} 
                            onClick={()=>this.switchTab(2)}><span className="ml-3 mr-3 text-center">{this.props.t('tabs.2')}</span></button>
                            <button className={this.activeTab(3)} 
                            onClick={()=>this.switchTab(3)}><span className="ml-3 mr-5 text-center">{this.props.t('tabs.3')}</span> </button>
                            <button className={this.activeTab(4)} 
                            onClick={()=>this.switchTab(4)}><span className="ml-3 mr-3 text-center">{this.props.t('tabs.4')}</span> </button>
                            <button className={this.activeTab(5)} 
                            onClick={()=>this.switchTab(5)}><span className="ml-3 mr-3 text-center">{this.props.t('tabs.5')}</span> </button>
                   
                        
                        </div>
                    </nav>
                    <div className="tab-content">
                       {(this.state.tabNumber===1)? <AllTab t={this.props.t}/> : null}
                       {(this.state.tabNumber!==1)? <OtherTabs value={this.otherTab(this.state.tabNumber)}/> : null}

                    </div>                    
           
</section> 
);
    }
}
 
export default Tabs;