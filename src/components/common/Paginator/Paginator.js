import React, {useState} from "react";
import './paginator.css';



const Paginator = (props) => {
    const {totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10} = props;
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionBorder = (portionNumber - 1) * pageSize + 1;
    const rightPortionBorder = portionNumber  * pageSize;
    return (
        <div className="pagination">
            {portionNumber > 1 && <button className="pagination__btn pagination__btn--prev" onClick={() => {setPortionNumber(portionNumber - 1)}}>&larr; prev</button>}
            <div className="pagination__pages-number">{pages
                .filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                .map(p => {
                    return (
                        <span onClick={(we) => {
                            onPageChanged(p)
                        }} className={`pagination__btn" ${currentPage === p ? "active-page" : ""}`}>{p}</span>
                    )
                })}</div>
            {portionCount > portionNumber && <button className="pagination__btn pagination__btn--next" onClick={() => {setPortionNumber(portionNumber + 1)}}>next &rarr;</button>}
        </div>
    )
}

export default Paginator;