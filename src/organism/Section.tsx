import React from "react";

class Section extends React.Component{
  public testName : string;

  constructor(testName : string){
    super(testName);
    this.testName = testName;
  }
  
  render(){
    return(
      <React.Fragment>
        <div>Please Be My Section...</div>
      </React.Fragment>
    )
  }
}
export default Section;