function counterReducer(state, action) {
  // To Do : switch로 INCREMENT, DECREMENT, RESET 구현해보기
}

export default function ReducerCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h2>카운트: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>리셋</button>
    </div>
  );
}