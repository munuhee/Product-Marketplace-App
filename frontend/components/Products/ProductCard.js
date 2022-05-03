import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ProductCard() {
    const loading = false;
  return (
    <Card sx={{ maxWidth: 345 }} className="mb-5 p-2">
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
                <CardMedia
                    component="img"
                    height="194"
                    image="https://res.cloudinary.com/murste/image/upload/v1619359682/ecom_xrzgmm.jpg"
                    alt="Paella dish"/>
                <CardContent>
                    <div className='p-1'>
                        <div className='float-left'>
                            <h6>Product Name</h6>
                        </div>
                        <div className='float-right'>
                        <Stack direction="row" spacing={1}>
                            {/* <Chip label="primary" color="primary" /> */}
                            <Chip label="free" color="success" size="small" />
                        </Stack>
                        </div>
                    </div>
                </CardContent>
                </>
            )}
        </Card>
  )
}

export default ProductCard