// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const product_page = () => (
    <MainCard title="Product Card">
        <Typography variant="body2">
        In marketing, a product is an object or system made available for consumer use; 
        it is anything that can be offered to a market to satisfy the desire or need of a customer
        A product is the item offered for sale. 
        A product can be a service or an item. It can be physical or in virtual or cyber form
        </Typography>
    </MainCard>
);

export default product_page;