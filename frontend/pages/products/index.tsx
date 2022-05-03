import SideBar from '../../components/Navbar/SideBar'
import SideBarTwo from '../../components/Navbar/SideBarTwo'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import Image from 'next/image'
import Bookmark from '../../components/Alerts/Bookmark';
import Head from 'next/head';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const API_URL = process.env.NEXT_PUPLIC_API_URL || 'http://127.0.0.1:8000/api';
export default function ProductList({ products }) {
  const [open, setOpen] = React.useState(false);

  const handleBookmark = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const origin = "https://res.cloudinary.com/murste/"
  const getProductImages = ({ product_image, title }) => {
    if (!product_image.length) return (
      <h4>{title}</h4>
    )
    return <Image src={origin + product_image[0].image} alt={title} height="150" width="200" />
  }

  const loading = false;
  return (
    <>
    <Head>
      <title>
        Ecorder | Icons, PSDs & Photos
      </title>
    </Head>
    <div className='m-5'>
      <div className="row pt-5">
        <div className='col'>
          <SideBar/>
        </div>
        <div className='col-8'>
          {/* PRODUCT LIST */}
          <div className="container">
            <div className='row'>
                {/* PRODUCT CARD */}
                  {products.map(product => (
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <Card sx={{ maxWidth: 345 }} className="mb-5 p-1">
                        {loading ? (
                            <>
                            <CardMedia>
                                <Skeleton animation="wave" variant="rectangular" height={194} />
                            </CardMedia>
                            <div className='p-2'>
                                <Typography variant="h1" color="text.secondary">
                                    <Skeleton animation="wave" variant="text" />
                                </Typography>
                            </div>
                            </>
                          ) : (
                              <>
                              <div>
                                {getProductImages(product)}
                              </div>
                                <CardContent>
                                    <div className='p-1'>
                                        <div className='float-left'>
                                            <h6>
                                              <Link href={`/products/${product.slug}`}>
                                                {product.title}
                                              </Link>
                                            </h6>
                                        </div>
                                        <div className='float-right'>
                                        <Stack direction="row" spacing={1}>
                                            {product.pricing = "PRO" ?
                                            (<Chip label="free" color="success" size="small" />)
                                            :
                                            (<Chip label="free" color="success" size="small" />)}
                                        </Stack>
                                        </div>
                                        <br/>
                                        <>
                                        <IconButton aria-label="delete">
                                          <FavoriteBorder />
                                        </IconButton>
                                        <IconButton
                                          aria-label="delete"
                                          onClick={handleBookmark}
                                          >
                                          <BookmarkAddedOutlinedIcon/>
                                          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                              Added to favorites
                                            </Alert>
                                          </Snackbar>
                                        </IconButton>
                                        </>
                                    </div>
                                </CardContent>
                                </>
                            )}
                    </Card>
                  </div>
                  ))}

                {/* END PRODUCT CARD */}
                <div className='align-items-center'>
                  <Pagination count={10} color="primary" />
                </div>
            </div>
          {/* END PRODUCT LIST */}
          </div>
        </div>
        <div className='col'>
          <SideBarTwo/>
        </div>
      </div>
    </div>
    </>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`)
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}
