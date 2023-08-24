import { useState } from 'react';
import Style from './Paginator.module.css';
export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const PortionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div >
      {
        portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
      }
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map(page => {
          return (
            <span className={currentPage === page ? Style.selectPage : Style.page}
              onClick={event => onPageChanged(page)}
              key={page}
            >
              {page}
            </span>
          )
        })
      }
      {
        PortionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
      }
    </div>
  )
}