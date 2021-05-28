import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// cmd + d 다중선택 동일한 코드 동시 편집하기 ] 

class App extends React.Component {
   // render Method 를 가지고 있음 클래스는 return을 가지지않음 함수가 아니기 때문에
   /*
   react 에서 유일하게 사용하는 함수 render() {}
   render 전에 실행되는 함수들이 존재함 생명주기 
   mounting 생성 
   updating 일반적인 업데이트
   unmounting 컴포넌트 죽음 화면 이동 시  state, 
   */
  componentDidUpdate() {
    console.log("update component");
  }
  componentWillUnmount() {
    console.log("Good bye~~~");
  }
  
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const api_url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
    const { data: { data : { movies } }} = await axios.get(api_url); // axios 가 끝날때까지 기다린다...
    this.setState({ isLoading: false , movies : movies});
  }
  
  componentDidMount() {
    console.log("first component rendered");
    // didMount 에서 data 를 fetch 한다... 
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 6000);
    this.getMovies();
  }

  render() {
    console.log("render start");
    const { isLoading , movies } = this.state;
    return (
      <section className="container">
        {isLoading ?
          (
          <div className="loader">
            <span className="loader__text">Loading...</span> 
          </div>
          ) : (
          <div className="movies">
              {
                movies.map(movie => {
                  return <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                })
              }
          </div>
          )}
      </section>
    );
  }
}


export default App;



/*
// function maptest(array1) {
  //   array1.map(function (value) {
    //     return value;
    //   });
    // }
    
    function Food({ name , picture , rating }) {  // {fav} object 안에서 fav만을 가져온다.
      return (<div>
        <h1>I like {name}</h1>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
        </div>);
      }
      const foodILike = [{ id: 1, name: "kimchi", image: "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d4a4d6b735bd0ad3194a5bdbaebb7f4dfece3954e96826f08374a2933b4b72d962a7f3332a90bc4e8434e0f5eae5a1ecf", rating : 5 },
      {
        id: 2, name: "snacks", image: "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d4a4d6b735bd0ad3194a5bdbaebb7f4dfece3954e96826f08374a2933b4b72d962a7f3332a90bc4e8434e0f5eae5a1ecf", rating: 4.3  }];
        
        function renderFood(dish) {
          return < Food key={dish.id} name={dish.name} picture={ dish.image } rating={dish.rating} />
        }
        
        Food.propTypes = {
          name: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          rating : PropTypes.number.isRequired
        }
        state = {
          count: 0
        };
        
        // setState 함수로 state를 변경해야 render를 재호출해 리로드된다...
        add = () => {
          this.setState(current => ({ count: current.count + 1 }));
        };
        minus = () => {
          this.setState(current => ({ count: current.count - 1 }));
        };
       <h1>the number is : {this.state.count}</h1>
       <button onClick={ this.add }>Add</button>
       <button onClick={ this.minus }>Minus</button>
        */