import React from "react";

interface TestProps{
   name : string
}
interface TestState{
    count : number
}

class Header extends React.Component<TestProps, TestState>{
  public testName : string;

  constructor(props : TestProps){
    super(props);
    this.testName = "Header!!";
  }
  
  render(){
    const { name } = this.props;
    return(
      <React.Fragment>
        <div>Please Be My {name}...</div>
      </React.Fragment>
    )
  }
}
export default Header;