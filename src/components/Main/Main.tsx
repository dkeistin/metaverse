import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 30,
        paddingBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontFamily: 'Molot !important',
        fontSize: '140px !important',
        textShadow: '0px 8px 0px #203273',
        textTransform: 'uppercase'
    },
    subtitle: {
        fontSize: '20px !important',
        letterSpacing: '4px !important',
        textTransform: 'uppercase'
    },
    enterBox: {
        borderRadius: 12
    },
    box1: {
        border: '1px solid rgba(255, 255, 255, .04)',
        padding: '20px'
    },
    box2: {
        border: '1px solid rgba(255, 255, 255, .12)',
        padding: '19px 17px'
    },
    box3: {
        border: '1px solid rgba(255, 255, 255, .2)',
        padding: '15px 14px'
    },
    box4: {
        color: 'white !important',
        padding: '22px 62px !important',
        borderRadius: '12px !important',
        background: 'linear-gradient(298.62deg, #741EE2 -13.65%, #EF38FF 61.86%)',
        boxShadow: '0px 2px 0px #9425EA, 0px 9px 28px rgba(0, 0, 0, 0.28), 0px 30px 92px rgba(226, 30, 133, 0.56)'
    },
    countBox:{
        display: 'flex',
        gap: 20,
    },
    count: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countTitle: {
        fontSize: '60px !important',
        textShadow: '0px 8px 0px #203273',
        letterSpacing: '-0.02em'
    }
}));

const Main = (props: any) => {
    const classes = useStyles();
    const [counter, setCounter] = useState(0);

    const count = (minimum: any, maximum: any) => {
        for (let x = minimum; x <= maximum; x++) {
            setTimeout(() => {
                setCounter(x)
            }, 1000);
        }
    }
    
    // useEffect({
    //     // count(0, 75);
    // }, []);

    return (
        <Box className={classes.root}>
            <Typography className={classes.subtitle}>Made for the artist, by artists</Typography>
            <Typography className={classes.title}>Meta verse</Typography>
            <Typography className={classes.subtitle}>Start in</Typography>
            <Box className={clsx(classes.enterBox, classes.box1)}>
                <Box className={clsx(classes.enterBox, classes.box2)}>
                    <Box className={clsx(classes.enterBox, classes.box3)}>
                        <Button className={clsx(classes.enterBox, classes.box4)}>
                            <Typography>Enter the MTRX</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.countBox}>
                <Box className={classes.count}>
                    <Typography className={classes.countTitle}>12</Typography>
                    <Typography className={classes.subtitle}>days</Typography>
                </Box>
                <Box className={classes.count}>
                    <Typography className={classes.countTitle}>12</Typography>
                    <Typography className={classes.subtitle}>hours</Typography>
                </Box>
                <Box className={classes.count}>
                    <Typography className={classes.countTitle}>12</Typography>
                    <Typography className={classes.subtitle}>minutes</Typography>
                </Box>
                <Box className={classes.count}>
                    <Typography className={classes.countTitle}>12</Typography>
                    <Typography className={classes.subtitle}>seconds</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;