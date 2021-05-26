import React from "react";

// cmd + d 다중선택 동일한 코드 동시 편집하기 ]

function Food({ fav , picture }) {  // {fav} object 안에서 fav만을 가져온다.
  return (<div>
    <h1>I like {fav}</h1>
    <img src={picture} alt={fav} />
  </div>);
  
}

// function maptest(array1) {
//   array1.map(function (value) {
//     return value;
//   });
// }

const foodILike = [{ id:1,name: "kimchi", image: "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d4a4d6b735bd0ad3194a5bdbaebb7f4dfece3954e96826f08374a2933b4b72d962a7f3332a90bc4e8434e0f5eae5a1ecf" },
  {id:2,name : "snacks", image : "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d4a4d6b735bd0ad3194a5bdbaebb7f4dfece3954e96826f08374a2933b4b72d962a7f3332a90bc4e8434e0f5eae5a1ecf" }];

function renderFood(dish) {
  return < Food key={dish.id}fav={dish.name} picture={ dish.image } />
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map( renderFood ) }
      {/* {foodILike.map( dish => <Food fav={dish.name} picture = {dish.image} /> ) }*/}
      {/* 컴포넌트 불러오기 
          props 는 컴포넌트에 data를 넘길 수 있다.
          props 를 오브젝트로 String, boolean, array등 여러 타입을 넘겨줄 수 있다...
          <Food fav="ramen" />
       */}
    </div>
  );
}

export default App;
