import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {

        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center" className='container-footer'>
                <Grid alignItems="center" item xs={12} >
                    <Box style={{ backgroundColor: "#285B00", height: "100px" }} >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="subtitle1" align="center" gutterBottom style={{ color: "#E0F2CE" }}>Nossas Redes sociais </Typography>
                        </Box>
                        <Box className='container-footer' display="flex" alignItems="center" justifyContent="center">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }

    return (
        <>
            {footerComponent}

        </>
    )
}

export default Footer;
