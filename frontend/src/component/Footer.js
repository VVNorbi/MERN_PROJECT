import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: 'orange',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='span' sx={{ color: 'white' }}>PROJECTS IT</Box>

            </Box>
        </>
    )
}

export default Footer