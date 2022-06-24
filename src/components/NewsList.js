import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import { getIds } from '../state/news/news.actions';

function NewsList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [resultList, setResultList] = useState([]);
    const { loading, list } = useSelector(state => state.news);

    useEffect(() => {
        dispatch(getIds());
    }, []);

    useEffect(() => {
        const formattedList = list.filter((item, index) => index >= currentPage * rowsPerPage && index < currentPage * rowsPerPage + rowsPerPage)
        setResultList(formattedList);
    }, [list, currentPage, rowsPerPage]);

    const handlePage = (e, page) => {
        setCurrentPage(page);
    };

    const handleRowsPerPage = (e, values) => {
        setCurrentPage(0);
        setRowsPerPage(values.props.value);
    };

    if (loading) 
        return <CircularProgress />

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">By</TableCell>
                    <TableCell align="left">Type</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {resultList.map((row) => (
                <TableRow key={row.id}>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.by}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            <TablePagination page={currentPage} count={list.length} rowsPerPage={rowsPerPage} onPageChange={handlePage} onRowsPerPageChange={handleRowsPerPage} />
        </TableContainer>
    );
}

export default NewsList;
