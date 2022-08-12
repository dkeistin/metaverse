import { ArrowForward, LinkedIn } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    teamContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 20,
    },
    teamCard: {
        marginTop: 60,
        borderRadius: 20,
        '& .header': {
            padding : '0px 36px 26px 36px',
            '& img': {
                borderRadius: '50%',
                transform: 'translateY(-50%)'
            },
            '& .profile': {
                marginTop: '-40px'
            }
        },
        '& .footer': {
            padding: '26px 36px',
            borderRadius: '0px 0px 20px 20px',
            background: 'rgba(255, 255, 255, 0.04)',
            display: 'flex',
            justifyContent: 'space-between',
        }
    }
}))

const Team = () => {
    const classes = useStyles();

    const data = [
        {
            img: 'images/team/1.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/2.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/3.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/4.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/2.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/3.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/4.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        },
        {
            img: 'images/team/4.png',
            name: 'Nick Forward',
            role: 'Project - manager'
        }
    ]
    return (
        <Box className='container'>
           <Typography>Our Team</Typography>
           <Box className={classes.teamContainer}>
                {data.map((item) => {
                    return (
                        <Box className={clsx(classes.teamCard, 'glass col-lg-4')}>
                            <Box className='header'>
                                <img src={item.img}/>
                                <Box className='profile'>
                                    <Typography>{item.name}</Typography>
                                    <Typography>{item.role}</Typography>
                                </Box>
                                <Link>
                                    More
                                    <ArrowForward/>
                                </Link>
                            </Box>
                            <Box className='footer'>
                                <Typography>Contact</Typography>
                                <Link href='#'>
                                    <img src='images/icon_linkedin.png'/>
                                </Link>
                            </Box>
                        </Box>
                    )
                })}
            </Box> 
        </Box>
    )
}

export default Team;