import React, {  useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  // { id: 'id', label: 'Product Id', minWidth: 100, align: 'left' },
  { id: 'end_year', label: 'End Year', minWidth: 100, align: 'left' },
  {id:'start_year',label:"Start Year",minWidth:100,align:'left'},
  {id:'sector',label:'Sector', minWidth:100,align:'left'},
  {id:'pestle',label:"PEST",minWidth:100,align:'left'},
  {id:'topic',label:"Topic",minWidth:100,align:'left'},
  {id:'country',label:"Country",minWidth:100,align:'left'},
  {id:'region',label:"Region",minWidth:100,align:'left'},
  {id:'title',label:"title",minWidth:100,align:'left'},
  {id:'intensity',label:"Intensity",minWidth:100,align:'left'},
  {id:'source',label:"Source",minWidth:100,align:'left'},
  {id:'relevance',label:"Relevance",minWidth:100,align:'left'},
];


const ProductTable = ({ tableData, setallproducts, setShowModal, setrowid }) => {
  // console.log("length",rows.length)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper mt={10} sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {/* <TableRow> */}

            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {
              tableData
                .slice((page * rowsPerPage), page * rowsPerPage + rowsPerPage)

                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                      {columns.map((column) => {
                        // {/* console.log(column.id) */ }
                        const value = row[column.id];
                        {/* console.log("value",value) */ }

                        return (
                          <>
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          </>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ProductTable;