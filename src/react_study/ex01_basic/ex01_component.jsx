export const MyComponent = () => {
  return <h2>컴포넌트1</h2>
}


export default function MyComponent2()  {
  return <h2>컴포넌트2</h2>
}

export function Child(props) {
  // const props= {
  //   name:'물렁이',
  //   childStyle:{fontSize:'20px'}
  // }
  const {name, childStyle} = props;
  return <h1 style={childStyle}>Hello, {name}</h1>
}

export function Child2({name='Guest', style={fontSize:"25px", color:"red", border:"2px solid"}}) {
  return <h1 style={style}>Hello, {name}</h1>
}

const obj = {a:1, b:2}