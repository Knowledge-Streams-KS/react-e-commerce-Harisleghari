import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/index.jsx"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom"

const Products = () => {
    const [productDetail, setProductDetail] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    const { categoriesId } = useParams()


    const fetchPorducts = async () => {
        if (categoriesId) {
            try {
                await axios.get(`https://fakestoreapi.com/products/category/${categoriesId}`)
                    .then((productRes) => {
                        setProductDetail(productRes.data)
                        console.log(productRes.data)
                    })
                    .catch((e) => {
                        console.log("Error", e)
                    })

            } catch (error) {
                console.log(error);
            }
        }
        else {
            try {
                await axios.get('https://fakestoreapi.com/products')
                    .then((productRes) => {
                        setProductDetail(productRes.data)
                        console.log(productRes.data)
                    })
                    .catch((e) => {
                        console.log("Error", e)
                    })

            } catch (error) {
                console.log(error);
            }

        }

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

    const clickHandler = (cardId) => {
        navigate(`/product-details/${cardId}`)
    }

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
                    <Grid onClick={() => { clickHandler(items.id) }} item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard items={items} />
                    </Grid>

                ))}
            </Grid>

        </>
    )
}

export default Products;