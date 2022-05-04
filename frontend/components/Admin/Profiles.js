import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
function Profiles() {
  return (
    <>
        <table class="table-auto">
            <thead className='text-center'>
                <tr>
                <th>Username</th>
                <th>Email Address</th>
                <th>Subscription</th>
                <th>Staff Status</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                <td>Stephen</td>
                <td>murichustephen@gmail.com</td>
                <td>PRO</td>
                <td><VerifiedIcon color="secondary"/></td>
                </tr>
                <tr>
                <td>Mary</td>
                <td>marywamuyu@gmail.com</td>
                <td>FREE</td>
                <td><CancelIcon color="warning"/></td>
                </tr>
                <tr>
                <td>Agnes</td>
                <td>wamaithagnes234@gmail.com</td>
                <td>FREE</td>
                <td><CancelIcon color="warning"/></td>
                </tr>
            </tbody>
            </table>
    </>
  )
}

export default Profiles