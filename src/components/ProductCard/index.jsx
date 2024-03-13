import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = (props) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.items.image}
                    title="fakeAPI images"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.items.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.items.description}
                    </Typography>
                    <Typography variant="body2">
                        Price ${props.items.price}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard