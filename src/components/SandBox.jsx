function SandBox(props){  
  //스타일 적용할 객체
  // Box 컴포넌트에서 전해준 너비, 높이를 스타일 객체에 적용합니다.
  const boxstyle = {
     width: `${props.width}px`,
     height: `${props.height}px`,
     left: `${props.left}px`,
     top: `${props.top}px`,
     position:'absolute',
     background: 'yellow'
  }

  return (
    <div style={boxstyle}>

    </div>
  )
}

export default Box;