import { ArrowForward, PlayArrow } from "@mui/icons-material";
import { Button, IconButton, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 60,
        paddingBottom: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 100
    },
    textContainer: {
        '& button':{
            marginTop: '50px !important'
        }
    },
    imageContainer: {
        background: 'url("images/asset_1.png"), url("images/back_1.png")',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'left top, right center',
        padding: 300,
    },
    title: {
        fontFamily: 'Molot !important',
        fontSize: '60px !important',
        textShadow: '0px 8px 0px #203273',
        textTransform: 'uppercase'
    },
    context: {
        fontFamily: 'IBM Plex Mono !important',
        fontSize: '24px !important',
        lineHeight: 32
    },
    button: {
        background: 'linear-gradient(298.62deg, #741EE2 -13.65%, #EF38FF 61.86%);',
        boxShadow: '0px 2px 0px #9425EA, 0px 9px 28px rgba(0, 0, 0, 0.28), 0px 30px 92px rgba(226, 30, 133, 0.56);',
        borderRadius: '12px !important',
        padding: '22px 62px !important',
        color: 'white !important'
    },
    descriptionCard: {
        height: 'fit-content',
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        transform: 'translate(127px, 267px)',
        '.MuiTypography-root': {
          fontFamiliy: 'Molot'
        },
      },
      descriptionPhoto: {
          borderRadius: '12px'
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
        gap: 20,
        width: 200,
    }
}))
const Blog = () => {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.root, 'container')}>
            <Box className={classes.textContainer}>
                <Typography className={classes.title}>It's your world</Typography>
                <Typography className={classes.title}>It's your stage</Typography>
                <Typography className={classes.context}>
                    Welcome to the MTRXVerse, the ultimate live entertainment metaverse built by actual industry professionals to help creators share THEIR world, with THE world; no matter the location. From fully customizable performances stages, to fashion airdrops, to brand sponsored immersive activations, to full on music festivals with custom effects: The MTRXVerse is the ultimate home for the next generation of creators to directly connect with their fans around the globe in a whole new way.
                </Typography>
                <Button className={classes.button}>Enter the MTRX</Button>
            </Box>
            <Box className={classes.imageContainer}>
                {/* <img src='images/asset_1.png'/> */}
                <Box className={clsx(classes.descriptionCard, 'glass')}>
                    <Box className={classes.playBox}>
                        <Link className={classes.playButton} href='#'>
                            <PlayArrow fontSize='large'/>
                        </Link>
                    </Box>
                    <Box className={classes.descriptionContent}>
                        <Typography>
                            You no longer have to “Be there” to “Be there”
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Blog;