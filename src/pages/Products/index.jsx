import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/index.jsx"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Products = () => {
    const [productDetail, setProductDetail] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPorducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((productRes) => {
                setProductDetail(productRes.data)
                console.log(productRes.data)
            })
            .catch((e) => {
                console.log("Error", e)
            })

    }
    useEffect(() => {
        fetchPorducts();
    }, [])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productDetail.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <TextField
                label="Search products"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px' }}
            />
            <Grid container spacing={2}>
                {filteredProducts.map((items, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard items={items} />
                    </Grid>
                ))}
            </Grid>

        </>
    )
}

export default Products;