import Layout from '../../component/layout'
import { useHistory, useParams } from 'react-router-dom'

import { 
    Link,
    Typography,
    Breadcrumbs
} from '@mui/material';

const Detail = () => {

    const { id } = useParams()
    
    return (
        <Layout>
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: '24px'}}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="/bootcamps">
                    Bootcamps
                </Link>
                <Typography color="text.primary">{id}</Typography>
            </Breadcrumbs>
            <Typography paragraph>
                Bootcamp - {id}
            </Typography>
        </Layout>
    )
}

export default Detail