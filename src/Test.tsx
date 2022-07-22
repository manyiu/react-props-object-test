import React from "react";

interface TestProps {
  testObject: {
    testName: string;
  };
}

const Test: React.FC<TestProps> = (props) => {
  return (
    <div>
      <h1>{props.testObject.testName}</h1>
    </div>
  );
};

export default React.memo(Test);
