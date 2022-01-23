import Layout from '../../component/layout'
import { useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { 
    Link,
    Typography,
    Breadcrumbs
} from '@mui/material';

const Detail = () => {

    const [bootcamp, setBootcamp] = useState([])

    const { id } = useParams()

    async function getBootcamp() {
        await axios.get(`http://localhost:9000/api/v1/bootcamps/${id}`)
        .then(function (response) {
            // handle success
            let bootcamp = response.data.data
            
            setBootcamp(bootcamp)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    useEffect(() => { 
        // make request for bootcamps

        getBootcamp()
    }, []);
    
    return (
        <Layout>
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: '24px'}}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="/bootcamps">
                    Bootcamps
                </Link>
                <Typography color="text.primary">{bootcamp.name}</Typography>
            </Breadcrumbs>
            <Typography variant="h4" gutterBottom component="div">
                { bootcamp.name }
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Description
            </Typography>
            <Typography variant="body1" gutterBottom>
                {bootcamp.description}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Website
            </Typography>
            <Typography variant="body1" gutterBottom>
                {bootcamp.website}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Phone
            </Typography>
            <Typography variant="body1" gutterBottom>
                {bootcamp.phone}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Email
            </Typography>
            <Typography variant="body1" gutterBottom>
                {bootcamp.email}
            </Typography>
        </Layout>
    )
}

export default Detail