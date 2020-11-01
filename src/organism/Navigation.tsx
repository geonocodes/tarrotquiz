import React from "react";

class Navigation extends React.Component{
  public testName : string;

  constructor(testName : string){
    super(testName);
    this.testName = testName;
  }
  
  render(){
    return(
      <React.Fragment>
        <div>Please Be My Navigation...</div>
      </React.Fragment>
    )
  }
}
export default Navigation;