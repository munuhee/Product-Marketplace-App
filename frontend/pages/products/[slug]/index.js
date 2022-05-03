import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CardMedia, Rating, Typography, Chip, Avatar } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import Head from 'next/head';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const API_URL = process.env.NEXT_PUPLIC_API_URL || 'http://127.0.0.1:8000/api';
export default function Product({ product }) {
    const handleClick = () => {
        console.info('You clicked the Category Chip.');
      };
    return (
        <>
        <Head>
            <title>
                {product.title}
            </title>
        </Head>
        <div className="container p-5">
        <div className="row p-5 ">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <CardMedia
                    component="img"
                    height="10"
                    image="https://res.cloudinary.com/murste/image/upload/v1619361983/slide1_b1yp1k.jpg"
                    alt="ecorder"
                />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Typography variant="h4"  mt={1}>
                    {product.title}
                </Typography>
                <div className='pb-4'>
                    <div className='float-left'>
                        <Typography variant="small">
                            {product.category.name}
                        </Typography>
                    </div>
                    <div className='float-right'>
                        <Typography variant="small">
                            <Chip label={product.pricing} variant="filled" color="primary" onClick={handleClick} />
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography variant="h5" mt={2}>
                        <Chip
                        avatar={<Avatar alt="Adobe Photoshop" src="https://res.cloudinary.com/murste/image/upload/v1650804120/psd_wnsfzf.png" />}
                        label="PSD Format"
                        variant="outlined"
                        />
                    </Typography>
                    <Typography variant="h5" mt={1}>
                        $ {product.regular_price}
                    </Typography>
                    <Rating name="read-only" value={3.5} readOnly />
                    <Typography variant="p"
                        dangerouslySetInnerHTML={{__html:product.description}}
                    />
                    <div className="text-center">
                        <Button variant="outlined" color="success" className="w-full" startIcon={<DownloadIcon/>}>
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/products/${slug}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}