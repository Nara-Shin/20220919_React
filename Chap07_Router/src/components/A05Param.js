import React from "react";
import { useLocation, useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A05MatchParam() {
  // path base로 넘어오는 값을 참조하기 위한 Hook
  const params = useParams();
  // console.log(params);

  // 주소줄 query를 참조하기 위한 Hook
  const location = useLocation();
  // console.log(location);

  // id는 배열이라 배열의 인덱스가 된다 
  const product = data[Number(params.id) - 1];

  return (
    <div>
      <h5>Parameter Component</h5>
      <div>This is Parameter Component</div>
      <br />

      <div>
        Id: {params.id}<br />
        Name: {params.name}<br />
        Location: {location.pathname}
      </div>
      <br />

      <div>
        Id: {product.id}<br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A05MatchParam;
