import React from 'react';


const TableRow = ({book}) => {
    return (
        <tr>
            <th scope="row">{book.name}</th>
            <td>{book.isbn}</td>
            <td>{book.authors.join()}</td>
            <td>{book.numberOfPages}</td>
            <td>{book.country}</td>
            <td>{new Date(book.released).toISOString().slice(0,10)}</td>
        </tr>
    );
}

export default TableRow;