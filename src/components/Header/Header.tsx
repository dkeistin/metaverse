import { Box, IconButton, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop: '30px',
        paddingBottom: '30px',
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
      '.MuiTypography-root': {
        fontFamiliy: 'Molot'
      },
    },
    descriptionPhoto: {
        borderRadius: '12px'
    },
    button: {
        fontFamily: 'Molot',
        padding: '0 !important',
        color: '#EF38FF !important',
        gap: 20,
    },
    Logo: {
        transform: 'translate(-200px)'
    },
    playBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 12,
        background: 'url("images/description.png")'
    },
    playButton: {
        width: 52,
        height: 52,
        background: 'linear-gradient(298.62deg, #741EE2 -13.65%, #EF38FF 61.86%)',
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white !important',
    },
    descriptionContent: {
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 20
    }
}));

const Header = (props: any) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={clsx(classes.descriptionCard, 'glass')}>
                <Box className={classes.playBox}>
                    <Link className={classes.playButton} href='#'>
                        <PlayArrow fontSize='large'/>
                    </Link>
                </Box>
                <Box className={classes.descriptionContent}>
                    <Typography>
                        Be the first to know sign up now
                    </Typography>
                    <IconButton className={classes.button}>
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