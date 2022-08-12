import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Twitter, Facebook, Instagram, YouTube } from "@mui/icons-material";
import clsx from "clsx";

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingTop: 40,
        paddingBottom: 40,
        gap: 50,
        background: 'rgba(3, 0, 4, 0.2)'
    },
    content:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    author: {
        display: 'flex',
        alignItems: 'center'
    },
    linkBox: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40
    },
    linkItem: {
        color: 'white !important',
        border: 'none !important',
        textDecoration: 'none !important',
        fontSize: '16px',
        letterSpacing: '4px'
    },
    socialBox: {
        display: 'flex',
        gap: 16
    },
    socialItem: {
        padding: 10,
        borderRadius: '50%',
        color: '#A19DAF !important',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(36px)',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, 'container')}>
            <Box className={classes.content}>
                <img src='Logo_small.png'/>
                <Box className={classes.linkBox}>
                    <Link href='#' className={classes.linkItem}>Metaverse</Link>
                    <Link href='#' className={classes.linkItem}>RoadMap</Link>
                    <Link href='#' className={classes.linkItem}>Our Team</Link>
                    <Link href='#' className={classes.linkItem}>Irl Events</Link>
                </Box>
                <Box className={classes.socialBox}>
                    <Link href='#' className={classes.socialItem}><Twitter/></Link>
                    <Link href='#' className={classes.socialItem}><Facebook/></Link>
                    <Link href='#' className={classes.socialItem}><Instagram/></Link>
                    <Link href='#' className={classes.socialItem}><YouTube/></Link>
                </Box>
            </Box>
            <Box className={classes.bottom}>
                <Typography>© 2022 MTRXVerse. All rights reserved.</Typography>
                <Box className={classes.author}>
                    <Typography>Made by roobinium.io</Typography>
                    <img src="images/author.png"/>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;