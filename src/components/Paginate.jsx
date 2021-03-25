import React from 'react';


const Paginate = ({ page, paginate }) => {
    return (
        <div className="d-flex mb-1 flex-row-reverse">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={paginate}><a className="page-link" href="#" role="button">Previous</a></li>
                    <li className={`page-item ${page === 1 ? "active": null}`} onClick={() => paginate(1)}><a className="page-link" href="#" role="button">1</a></li>
                    <li className={`page-item ${page === 2 ? "active": null}`} onClick={() => paginate(2)}><a className="page-link" href="#" role="button">2</a></li>
                    <li className="page-item" onClick={paginate}><a className="page-link" href="#" role="button">Next</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Paginate;