import { Box, Link, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Molot !important',
        fontSize: '60px !important',
        textShadow: '0px 8px 0px #203273',
        textTransform: 'uppercase'
    },
    subTitle: {
        fontFamily: 'Molot !important',
        color: 'white !important',
        background: 'linear-gradient(298.62deg, #741EE2 -13.65%, #EF38FF 61.86%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textFillColor: 'transparent',
        textDecoration: 'none !important'
    },
    eventBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 24,
    },
    eventCard: {
        borderRadius: 20,
        padding: 36,
        '& img': {
            width: '100%'
        },
        '& .eventTitle': {
            marginTop: 24,
            fontFamily: 'Molot',
            fontWeight: 600,
            color: 'white !important',
            fontSize: '14px !important'
        },
        '& .eventContext':{
            marginTop: 12,
            fontFamily: 'Molot',
            fontWeight: 600,
            color: '#A19DAF !important',
            fontSize: '14px !important'
        },
        '& .link': {
            marginTop: 50,
            color: '#EF38FF !important',
            background: 'linear-gradient(229.53deg, #D90EE8 2.72%, #1B7DAB 130.73%);',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textFillColor: 'transparent',
            textDecoration: 'none !important',
            display: 'flex',
            alignItems: 'center'
        }
    }
}));

const Event = () => {
    const classes = useStyles();
    
    const data: any = [
        {
            img: 'images/events/event_1.png',
            title: 'Parties take over the Hamptons for Fourth of July weekend',
            context: 'Over the Fourth of July holiday weekend, hospitality guru Richie Akiva and Ronnie Madra threw a bash at Kissaki in Water Mill.'
        },
        {
            img: 'images/events/event_2.png',
            title: 'AP Photos Diplo Hamptons Party',
            context: 'Enjoy all the photos by AP images of our latest metamansion takeover.'
        },
        {
            img: 'images/events/event_3.png',
            title: 'Enter MTRX: You Don’t Have To Be There, To Be There',
            context: 'Imagine a world where access to your favorite live experiences were always available and you were no longer bound by physical or financial limitations?'
        },
    ]

    return (
        <Box className={clsx(classes.root, 'container')}>
            <Box className={classes.titleBox}>
                <Typography className={classes.title}>Irl Events</Typography>
                <Link href='#' className={classes.subTitle}>view all</Link>
            </Box>
            <Box className={classes.eventBox}>
                {data.map((item: any)=>{
                    return(
                        <Box className={clsx(classes.eventCard, 'glass col-lg-3')}>
                            <img src={item.img}/>
                            <Typography className='eventTitle'>{item.title}</Typography>
                            <Typography className='eventContext'>{item.context}</Typography>
                            <Link href='#' className='link'>
                                Read more
                                <ArrowForward/>
                            </Link>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Event;