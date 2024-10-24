import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

interface props {
    text: string;
    address: string;
    title: string;
    icon:any;
    redirecr_url:string;
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'space-between',
    border: '1px solid #00ffff8a',
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    '@media(max-width : 600px)':{
        width:'100%',
        margin:'0rem 0.5rem'
    }
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    fontWeight: 300
}));

const AddressCopy = ({ text, address, title,icon,redirecr_url }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>

            <StyledBox>
                <Link style={{display:'flex', alignItems:'center',gap:'5px', color:'#fff', textDecoration:'none'}} target="_blank" href={redirecr_url}>
                <Image src={icon} alt={""}/>
                <Typography fontSize={14} fontWeight={500} component={'span'}>{title} <StyledLink href={'#'}>
                    {address}
                </StyledLink>
                </Typography>
                </Link>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: '#C0C3C9', width: 18 }} />
                </Box>
                <Snackbar

                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                />
            </StyledBox>
        </>
    );
};

export default AddressCopy;