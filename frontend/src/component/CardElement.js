import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const CardElement = ({ jobTitle, description, category, location, id }) => {
    const { palette } = useTheme();
    
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {jobTitle}
                </Typography>
                <Typography sx={{ fontSize: 14, color: palette.text.secondary, display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ fontSize: 16, mr: 0.5 }} />
                    {location}
                </Typography>
                <Typography sx={{ mb: 2, color: palette.text.secondary }}>
                    Category: {category}
                </Typography>
                <Typography variant="body2" sx={{ color: palette.text.primary }}>
                    {description}
                </Typography>
            </CardContent>
            <Button
                disableElevation
                variant='contained'
                size="small"
                startIcon={<AddIcon />}
                component={Link}
                to={`/job/${id}`}
                sx={{ borderTop: '1px solid #ccc', borderRadius: '0 0 8px 8px', backgroundColor:'orange'}}
            >
                More Details
            </Button>
        </Card>
    );
}

export default CardElement;