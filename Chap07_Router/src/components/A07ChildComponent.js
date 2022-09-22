import React from "react";
import { Link, Outlet } from "react-router-dom";

function A07ChildComponent() {
  return (
    <div>
      <h5>Children Component</h5>
      <div>This is Children Component</div>
      <br />

      <div>
        {/* 상위 컴퍼넌트의 하위 컴퍼넌트는 상위 패스에 상대 또는 절대 패스로 지정한 값을 이어서 지정한다 */}
        <Link to="/A07Child">ONE</Link> | {' '}
        <Link to="/A07Child/two"> TWO</Link> |{' '}
        <Link to="/A07Child/three"> THREE</Link>
      </div>

      <hr />
      {/* 자식 컴퍼넌트가 이 위치에 표시된다. */}
      <Outlet></Outlet>
    </div>
  );
};
export default A07ChildComponent;
