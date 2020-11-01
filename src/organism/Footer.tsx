import React from "react";

class Footer extends React.Component{
  public testName : string;

  constructor(testName : string){
    super(testName);
    this.testName = testName;
  }
  
  render(){
    return(
      <React.Fragment>
        <div>Please Be My Footer...</div>
      </React.Fragment>
    )
  }
}
export default Footer;