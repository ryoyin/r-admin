import { useState, useEffect } from 'react';
import Layout from '../component/layout'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Bootcamp = () => {
    const [bootcamps, setBootcamps] = useState({
        count: null,
        data: []
    })

    useEffect(() => { 
        // make request for bootcamps
        async function getBootcamps() {
            await axios.get('http://localhost:9000/api/v1/bootcamps')
                .then(function (response) {
                    // handle success
                    console.log(response.data)
                    setBootcamps(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        getBootcamps()
    }, []);

    const phoneStyle = {
        whiteSpace: 'nowrap',
        verticalAlign: 'top'
    };

    const verticalAlign = {
        verticalAlign: 'top'
    }

    const nowrap = {
        whiteSpace: 'nowrap'
    }

    return (
        <Layout>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell style={nowrap}>Average Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bootcamps.data.map((bootcamp) => (
                            <TableRow
                                key={bootcamp.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" style={verticalAlign}>{bootcamp.name}</TableCell>
                            <TableCell align="left" style={verticalAlign}>{bootcamp.description}</TableCell>
                            <TableCell align="left" style={phoneStyle}>{bootcamp.phone}</TableCell>
                            <TableCell align="left" style={verticalAlign}><a href="mailto:{bootcamp.email}">{bootcamp.email}</a></TableCell>
                            <TableCell align="right" style={verticalAlign}>${bootcamp.averageCost.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default Bootcamp