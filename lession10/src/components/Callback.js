import React,{memo} from 'react'

function Callback({ onIncrease }) {
  return (
    <div>
      <div>chào cả nhà</div>
      <button onClick={onIncrease}> click me</button>
    </div>
  );
}

export default memo(Callback)
