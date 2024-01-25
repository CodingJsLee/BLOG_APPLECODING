import './App.css';
import React, { useState } from 'react';

function App() {

  const [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  const [title,setTitle] = useState(0);
  const [goodJob,setGoodJob] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(0);
  const [inputValue,setInputVlaue] = useState(''); // 입력값 변경
  
  function 따봉함수변경(i){
    let copy따봉 = [...goodJob];
    copy따봉[i] = copy따봉[i] + 1;
    setGoodJob(copy따봉);
  }

  function 여자코트(){
    // 글제목[0] = '여자 코트 추천';
    // 글제목[1] = "역삼 우동 맛집"
    let copy = 글제목;
    // let copy = [...글제목];
    // copy[0]  ='여자 코트 추천';
    copy[0]  ='여자 코트 추천';
    글제목변경([...copy]);

    
    // 글제목변경([...글제목]);
    // 원본을 보존하는게 좋음

    // state 변경따봉함수변경 특징
    // 조건을 따짐 기존 state 신규 state 같은 경우 변경 안해줌
    // 그냥 일종에 에너지 절약


    // arr/obj 특징
    // let arr = [1,2,3];
    // arr은



  }

  function 정렬(){
    let sortArr = [...글제목];
    let completeArr = sortArr.sort();
    글제목변경(completeArr);
  }

  function switching(i){
    if(modal && status === i){
      setModal(false);
    } else {
      setModal(true);
      setStatus(i);
      setTitle(i);
    }
  }

  function addItem(){
    const tmp = [...글제목];
    tmp.unshift(inputValue);
    글제목변경(tmp);
    
    const goobJobTmp = [...goodJob];
    goobJobTmp.unshift(0);
    setGoodJob(goobJobTmp);

  }

  function delItem(idx, ){
    console.log(idx);
    let tmp글제목 = [...글제목];
    tmp글제목.splice(idx - 1 ,1);
    console.log(tmp글제목);
    글제목변경(tmp글제목);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'16px'}}>ReactBlog</h4>
      </div>
      <button onClick={정렬}>가나다</button>
      <button onClick={여자코트}>버튼</button>
      
      {
        글제목.map((e, i)=>{
          
          return (
            <div className='list' key={i}>
              <div style={{display:'flex', margin: '10px 0 10px 0'}}>
                <h4 onClick={ ()=> {switching(i); setTitle(i);} }>{글제목[i]}</h4>
                <span onClick={()=>{따봉함수변경(i)}}>👍</span> {goodJob[i]} 
              </div>
              <div style={{display:'flex',  }} >
                <div style={{margin: '0px 0 0 0',flex: '0 0 95%', }}  >
                  <p >2월 17일 발행</p>
                </div>
                <div style={{ flex: '0 0 43px',justifyContent: 'flex-end',}}>
                  <button  onClick={ ()=> { delItem(i); } }>삭제</button>
                </div>
              </div>
            </div>
          
          )
        })
      }
      {
        modal === true 
        ? <Modal title={title} color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} />
        : null // null은 ''로 대체 가능
      }
      
      <input onChange={ (e)=>{ setInputVlaue( e.target.value ); console.log(inputValue) } }  />
      <button onClick={(e) => { addItem() } }>추가</button>
      <Modal2 />
    </div>

  );
}

function Modal(props){

  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.글제목변경['여자 코트 추천','강남 우동맛집','파이썬독학'] }>수정</button>
    </div>
  )
}


class Modal2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안녕 {this.state.age} 
        <button onClick={ () =>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

// ㄱㄱ
// 따라만 하기 싫어서 -> mui 기반 + typeScript 기반으로 변환 작업
//  컴포넌트 파일 A : 화면에서 호출담당 (B+C) PROPS로 B , C) + (I,O,S,J,0) 줘야함  export type block : 'I|O|S|J|0' 
// , 파일 B : 테트리스 블럭 구조 + 색 정의 typeScript(ts)  props type block : 'I|O|S|J|0' import {block} from 파일A 
// , 파일 C : SYTLESHEET (동기처리 A 테트리스 블럭 (I,O,S,J,0) 그거에 맞는 스타일 출력 )

export default App;
