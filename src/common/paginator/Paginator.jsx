import Style from './Paginator.module.css';
export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil((totalUsersCount / pageSize) / 100);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
      <div >
        {pages.map(page => {
          return (
            <span className={currentPage === page ? Style.selectPage : Style.page}
              onClick={event => onPageChanged(page)}>
              {page}
            </span>
          )
        })
        }
      </div>
  )
}