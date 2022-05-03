import Link from 'next/link'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const HeaderRight = () => {
    const authenticated = false
    return (
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <>
            {authenticated ? (
                <ButtonGroup variant="text">
                <Link href={'/auth/login'} >
                    <Button variant="outlined">Login</Button>
                </Link>
                <Link href={'/auth/register'} >
                    <Button variant="outlined">Register</Button>
                </Link>
            </ButtonGroup>
            ):(
                <ButtonGroup variant="text">
                    <Link href={'/auth/login'} >
                        <Button variant="outlined">Login</Button>
                    </Link>
                    <Link href={'/auth/register'} >
                        <Button variant="outlined">Register</Button>
                    </Link>
                </ButtonGroup>
            )}
            </>
        </div >
    );
}

export default HeaderRight;