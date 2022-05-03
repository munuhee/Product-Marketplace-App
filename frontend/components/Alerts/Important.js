import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { Chip } from '@mui/material';
function Important() {
    const important = <><span className='text-success'><LockIcon fontSize="small"/>https</span><span>://accounts.ecorder.com/</span></>
  return (
    <div>
        <Alert severity="info">
            <div className='float-left p-2'>
            <AlertTitle>IMPORTANT!</AlertTitle>
            Please check that you are visiting<br/><strong>https://accounts.ecorder.com/</strong>
            </div>
            <div className='float-right p-2'>
                <Chip label={important} variant="outlined"/>
            </div>
        </Alert>
    </div>
  )
}

export default Important
