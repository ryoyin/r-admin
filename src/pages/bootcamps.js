import { useState, useEffect } from 'react';
import Layout from '../component/layout'
import axios from 'axios';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link,
    FormControl,
    FormLabel,
    // Checkbox,
    Typography,
    Breadcrumbs,
    Paper,
    NativeSelect    
} from '@mui/material';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';

const Bootcamp = () => {
    const [bootcamps, setBootcamps] = useState([])
    const [pageSize, setPageSize] = useState(25)

    useEffect(() => { 
        // make request for bootcamps
        async function getBootcamps() {
            await axios.get('http://localhost:9000/api/v1/bootcamps')
                .then(function (response) {
                    // handle success
                    let bootcamps = response.data.data
                    
                    setBootcamps(bootcamps)
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

    const pageSizeStyle = {
        margin: "0 0 0 10px",
        padding: "0 0 0 10px"
    }

    const pageSizeSelect = (event) => {
        console.log(event.target.value)
    }

    const navBtnClicked = (event) => {
        console.log('clicked')
    }

    const paginationBtnStyle = {
        verticalAlign: "middle"
    }

    const pageInfoStyle = {
        margin: "0 30px"
    }

    const tableToolbarStyle = {
        display: "flex",
        width: "100%"
    }

    const tableToolbarItemStyle = {
        flexGrow: "1",
    }

    const onCheckboxChange = (checkboxes) => {
        console.log(checkboxes);
    }  

    return (
        <Layout>
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: '24px'}}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography color="text.primary">Bootcamps</Typography>
            </Breadcrumbs>

            <form id="bootcamp">
            <CheckboxGroup onChange={onCheckboxChange}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan="6">
                                    <div style={tableToolbarStyle}>
                                        <div style={tableToolbarItemStyle}><FilterListIcon style={verticalAlign} /></div>
                                        <div style={tableToolbarItemStyle} align="right"><MoreVertIcon style={verticalAlign} /></div>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <AllCheckerCheckbox />
                                </TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell style={nowrap} align="right">Average Cost</TableCell>
                                <TableCell>Created At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                            {bootcamps.map((bootcamp, idx) => (
                                <TableRow
                                    key={bootcamp.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" style={verticalAlign}>
                                        <Checkbox id={bootcamp._id} value={bootcamp._id} />
                                    </TableCell>
                                    <TableCell align="left" style={verticalAlign}>{bootcamp.name}</TableCell>
                                    <TableCell align="left" style={phoneStyle}>{bootcamp.phone}</TableCell>
                                    <TableCell align="left" style={verticalAlign}><a href="mailto:{bootcamp.email}">{bootcamp.email}</a></TableCell>
                                    <TableCell align="right" style={verticalAlign}>${bootcamp.averageCost.toFixed(2)}</TableCell>
                                    <TableCell align="left" style={verticalAlign}>{bootcamp.createdAt}</TableCell>
                                </TableRow>
                            ))}
                            

                            <TableRow>
                                <TableCell align="right" colSpan="5">
                                    <FormLabel>Rows per page</FormLabel> 
                                    <NativeSelect
                                        defaultValue={25}
                                        inputProps={{
                                            name: 'pageSize',
                                            id: 'pageSize',
                                        }}
                                        onChange={pageSizeSelect}
                                        style={pageSizeStyle}
                                    >
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </NativeSelect>
                                    <FormLabel style={pageInfoStyle}>1 - 24 of 234</FormLabel>
                                    <FirstPageIcon style={paginationBtnStyle} onClick={navBtnClicked} />
                                    <NavigateBeforeIcon style={paginationBtnStyle} />
                                    <NavigateNextIcon style={paginationBtnStyle} />
                                    <LastPageIcon style={paginationBtnStyle} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </CheckboxGroup>
            </form>
        </Layout>
    )
}

export default Bootcamp