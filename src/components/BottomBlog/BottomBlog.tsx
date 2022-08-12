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
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
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
        marginTop: '20px',
        width: 'fit-content',
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
const BottomBlog = () => {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.root, 'container')}>
            <Box className={classes.imageContainer}>
                {/* <img src='images/asset_1.png'/> */}
            </Box>
            <Box className={classes.textContainer}>
                <Typography className={classes.title}>Powered by klaytin</Typography>
                <Typography className={classes.context}>
                    Klaytn is a public blockchain focused on the metaverse, gamefi, and the creator economy. Developed by internet giant Kakao Corp, Klaytn is the dominant blockchain platform  and is undergoing global growth from its international base in Singapore.
                </Typography>
                <Typography className={classes.context}>
                    To empower all who wish to build, work, or play in the metaverse, the Klaytn Foundation provides support to developers, entrepreneurs, and content creators via the Klaytn Growth Fund.
                </Typography>
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

export default BottomBlog;