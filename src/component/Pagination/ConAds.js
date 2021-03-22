import React, {useState} from 'react';
import './Pagination.css'


let Pagination = (props) => {
  let pagesCount = Math.ceil(1084 / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let portionSize = 10;

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (

    <div className='padding'>
      {portionNumber > 1 &&
      <button className='leftButton' onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>Prev</button>}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
            return <span
              className={props.currentPage === p ? "current-page" : "page"}
              key={p}
              onClick={(e) => {
                props.onPageChange(p)
              }}> {p}
            </span>
          }
        )}
      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}> NEXT</button>}
    </div>
  )
}

export default Pagination;
