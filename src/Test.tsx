import React from "react";

interface TestProps {
  testObject: {
    testName: string;
    // testAge: number;
  };
}

const Test: React.FC<TestProps> = (props) => {
  return (
    <div>
      <h1>{props.testObject.testName}</h1>
      {/* <p>{props.testObject.testAge}</p> */}
    </div>
  );
};

export default React.memo(Test);
