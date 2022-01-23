import Layout from '../../component/layout'
import { useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { 
    Link,
    Typography,
    Breadcrumbs
} from '@mui/material';

import TextField from '@mui/material/TextField';
import { CollectionsOutlined } from '@material-ui/icons';

const Detail = () => {

    const [bootcamp, setBootcamp] = useState([])
    const [editable, setEditable] = useState(false)

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

    async function updateBootcamp() {
        await axios.put(`http://localhost:9000/api/v1/bootcamps/${id}`, bootcamp)
        .then(function (response) {
            // handle success
            window.location = `http://localhost:9000/api/v1/bootcamps/${id}`
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    function editBootcamp() {
        setEditable(true)
    }

    function cancelEditBootcamp() {
        setEditable(false)
    }

    function saveBootcamp() {
        console.log(bootcamp)
        updateBootcamp()
    }

    function handleChange(event) {
        console.log(event.target.id)
        console.log(event.target.value)
        bootcamp[event.target.id] = event.target.value
        setBootcamp(bootcamp)
    }

    async function removeBootcamp() {
        // {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
        await axios.delete(`http://localhost:9000/api/v1/bootcamps/${id}`)
        .then(function() {
            window.location = '/bootcamps'
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
            <div style={{display: 'flex'}}>
                <Typography variant="h4" gutterBottom component="div" style={{flexGrow: 1}}>
                    { bootcamp.name }
                </Typography>
                <Typography variant="button" gutterBottom component="div" style={{flexGrow: 1, textAlign: 'right'}}>
                    {
                        editable ? 
                        <>
                            <button style={{margin: '5px'}} onClick={saveBootcamp}>SAVE</button>
                            <button style={{margin: '5px'}} onClick={cancelEditBootcamp}>CANCEL</button>
                        </> 
                        :
                        <>
                            <button style={{margin: '5px'}} onClick={editBootcamp}>EDIT</button>
                            <button style={{margin: '5px'}} onClick={removeBootcamp}>REMOVE</button>
                        </>
                    }
                </Typography>
            </div>
            {
                editable ? 
                <>
                    <Typography variant="h6" gutterBottom component="div">
                        Description
                    </Typography>
                    <TextField
                        id="description"
                        // label="Description"
                        multiline
                        fullWidth = "true"
                        defaultValue={bootcamp.description}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <Typography variant="h6" gutterBottom component="div">
                        Website
                    </Typography>
                    <TextField
                        id="website"
                        // label="Website"
                        // multiline
                        fullWidth = "true"
                        defaultValue={bootcamp.website}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <Typography variant="h6" gutterBottom component="div">
                        Phone
                    </Typography>
                    <TextField
                        id="phone"
                        // label="Website"
                        // multiline
                        fullWidth = "true"
                        defaultValue={bootcamp.phone}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <Typography variant="h6" gutterBottom component="div">
                        Email
                    </Typography>
                    <TextField
                        id="email"
                        // label="Website"
                        // multiline
                        fullWidth = "true"
                        defaultValue={bootcamp.email}
                        variant="standard"
                        onChange={handleChange}
                    />
                </> 
                :
                <>
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
                </>
            }
            
        </Layout>
    )
}

export default Detail