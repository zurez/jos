import React from "react";
import TopActionBar from "../TopActionBar";
import TopTabNavigationBar from "../TopTabNavigationBar/topnavigationbar";

export default class MainView extends React.PureComponent{
    
    constructor(props:any) {
      super(props);
      this.state = {};

    }

    render(){
        return(
            <div>
                <TopActionBar/>
                <TopTabNavigationBar/>
            </div>
            
        );
    }

}