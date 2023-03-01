import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Chip from '@material-ui/core/Chip';
import Stack from '@material-ui/core/Stack';

function ProductCard({loading,data}) {
    return (
    <Card style={{ maxWidth: 345 }} className="mb-5 p-2">
        {loading ? (
            <>
            <CardMedia>
                <Skeleton animation="wave" variant="rectangular" height={194} />
            </CardMedia>
            <div className='p-2'>
                <Typography variant="h6" color="textSecondary">
                    <Skeleton animation="wave" variant="text" />
                </Typography>
            </div>
            </>
          ) : (
              <>
                <CardMedia
                    component="img"
                    height={194}
                    image={data.productImage}
                    alt="Paella dish"/>
                <CardContent>
                    <div className='p-1'>
                        <div className='float-left'>
                            <h6>{data.productName}</h6>
                        </div>
                        <div className='float-right'>
                        <Stack direction="row" spacing={1}>
                            {/* <Chip label="primary" color="primary" /> */}
                            <Chip label={data.productType} color="success" size="small" />
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
