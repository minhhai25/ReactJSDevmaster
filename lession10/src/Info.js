import React, { useContext } from 'react'
import { ThemeContext } from './App'

function Info() {
   const theme = useContext (ThemeContext);
  return (
    <div>
      <p className={theme}>
        Xúc động trước hình ảnh thầy hiệu trưởng bơi vào sân trường ngập nước vì
        lo cho đồ đạc và 1,5 tấn gạo bị nhấn chìm. Hai mạnh thường quân đã tặng
        trường Tiểu học Quang Vinh 1,8 tấn gạo ăn bán trú.
      </p>
    </div>
  );
}

export default Info
