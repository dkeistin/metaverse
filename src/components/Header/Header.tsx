import { Box, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    descriptionCard: {
      height: 'fit-content',
      padding: 8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      gap: 28,
      '.MuiTypography-root': {
        fontFamiliy: 'Molot'
      },
    },
    descriptionPhoto: {
        borderRadius: '12px'
    },
    button: {
        fontSize: 14,
        fontFamily: 'Molot',
        color: '#EF38FF !important'
    },
    Logo: {
        transform: 'translate(-200px)'
    }
}));

const Header = (props: any) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={clsx(classes.descriptionCard, 'glass')}>
                <img  className={clsx(classes.descriptionPhoto, 'glass')} src="images/description.png" alt='Desciprion'/>
                <Box className=''>
                    <Typography>
                        Be the first to know sign up now
                    </Typography>
                    <IconButton className={classes.button} color='secondary'>
                        Sign up 
                        <ArrowForward/>
                    </IconButton>
                </Box>
            </Box>
            <img className={classes.Logo} src="Logo.png" alt='Logo'/>
            <img src="images/icon_menu.svg" alt='Menu'/>
        </Box>
    )
}

export default Header;