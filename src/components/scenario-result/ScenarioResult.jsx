import './ScenarioResult.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const ScenarioResult = () => {
  const location = useLocation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data } = location.state || { data: [] };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const headers = data[0]?.headers || [];
  const rows = data.slice(1);
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const saveReport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');

    const headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FEFEFE' }, name: 'Arial' };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '23B27C' },
      };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });

    rows.forEach((row) => {
      const rowData = headers.map((header) => row[header]);
      worksheet.addRow(rowData);
    });

    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        if (rowNumber !== 1) {
          cell.font = { name: 'Arial' };
        }
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, `report_${Date.now()}.xlsx`);
  };

  return (
    <div className='scenario-result'>
      <h1>Scenario executed successfully!</h1>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={
                      index !== 0
                        ? {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: '16px',
                            color: '#FEFEFE',
                            backgroundColor: '#93867F',
                            borderLeft: '1px solid #FEFEFE',
                          }
                        : {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: '16px',
                            color: '#FEFEFE',
                            backgroundColor: '#93867F',
                          }
                    }
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {headers.map((header, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      sx={
                        cellIndex !== 0
                          ? {
                              fontSize: '14px',
                              color: '#93867F',
                              borderLeft: '1px solid rgb(224, 224, 224)',
                            }
                          : { fontSize: '14px', color: '#93867F' }
                      }
                    >
                      {row[header]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component='div'
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 2 }}>
        <Button
          variant='outlined'
          color='primary'
          size={'extraLarge'}
          onClick={saveReport}
        >
          Save report
        </Button>
      </Box>
    </div>
  );
};

export default ScenarioResult;
