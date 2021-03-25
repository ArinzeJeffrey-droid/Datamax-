import React from 'react';
import TableRow from '../table-row/TableRow';
import Loader from "../loader/Loader"


const TableContainer = ({ loading, books }) => {
    return (
        <div className="table-responsive-md">
            <table className="table table-bordered table-striped ">
                { loading ? (<Loader/>) : (
                    <>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">ISBN</th>
                            <th scope="col">Author</th>
                            <th scope="col">Number of Pages </th>
                            <th scope="col">Country</th>
                            <th scope="col">Released</th>
                        </tr>
                    </thead>
                    <tbody>
                        { books.map((book, index) => (
                            <TableRow key={index} book={book}/>
                        ))}
                    </tbody>
                    </>
                )}
            </table>
        </div>
    );
}

export default TableContainer;