// Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const maxButtons = 10; // Maximum number of buttons to display
    const halfMaxButtons = Math.floor(maxButtons / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

    if (currentPage <= halfMaxButtons) {
        endPage = Math.min(totalPages, maxButtons);
    } else if (currentPage + halfMaxButtons >= totalPages) {
        startPage = Math.max(1, totalPages - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="d-flex gap-2 pagination">
            <li>
                <a
                    href="#"
                    className={currentPage === 1 ? "inactive" : ""}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    <i className="rt-chevron-left"></i>
                </a>
            </li>
            {startPage > 1 && (
                <>
                    <li>
                        <a href="#" onClick={() => onPageChange(1)}>1</a>
                    </li>
                    {startPage > 2 && <li>...</li>}
                </>
            )}
            {pageNumbers.map(page => (
                <li key={page}>
                    <a
                        href="#"
                        className={currentPage === page ? "active" : ""}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </a>
                </li>
            ))}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <li>...</li>}
                    <li>
                        <a href="#" onClick={() => onPageChange(totalPages)}>{totalPages}</a>
                    </li>
                </>
            )}
            <li>
                <a
                    href="#"
                    className={currentPage === totalPages ? "inactive" : ""}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    <i className="rt-chevron-right"></i>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;