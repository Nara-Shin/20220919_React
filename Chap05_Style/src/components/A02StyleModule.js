import React from "react";

// XXX.module.css => import를 JavaScript module과 같은 방식으로 로드
// 선언된 CSS는 선언한 변수명 one, two 이름으로 참조한다.
import one from './css/A02Style1.module.css';
import two from './css/A02Style2.module.css';

function A02StyleModule() {
  return (
    <div>
      <h3 className={one.title}>A02 Style <span className={one.innerColor}>Module</span> Component</h3>
      <h3 className={one.title}>A02 Style <span className="globalColor">Module</span> Component</h3>
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
    </div>
  );
}

export default A02StyleModule;
