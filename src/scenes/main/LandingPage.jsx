import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import NavBar from '../main/Navbar'
import Typography from '@mui/material/Typography'

import { Button, Grid } from '@mui/material'


function LandingPage() {


    return (
        <Box sx={{ background: 'linear-gradient(0deg, rgba(22,0,38,1) 6%, rgba(127,24,200,1) 45%, rgba(255,255,255,1) 87%)' }}>
            <NavBar />
            {/* hero section */}
            <Container>
                <Box sx={{ minHeight: '100vh' }}>
                    <Grid container sx={{ height: '100%', p: 2 }}>
                        <Grid item xs={12} md={7}>
                            <Box sx={{ minHeight: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>Learn Programming</Typography>
                                <Box sx={{ maxWidth: '30rem' }}>
                                    <Typography variant="subtitle1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reiciendis quasi illo omnis recusandae fugiat aliquam id culpa minima!</Typography>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Button variant="contained" color='primary' size="large">Get Started</Button>
                                </Box>  
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <div>
                                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_akio2kni.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '80%', height: '80%' }}></lottie-player>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* about section */}
            <Box sx={{ minHeight: '90vh' }}>
                <Container>
                    <Typography variant="h1" color="secondary">About Section</Typography>
                </Container>
            </Box>

            {/* contact section */}
            <Box sx={{ minHeight: '90vh' }}>
                <Container>
                    <Typography variant="h1" color="secondary">Contact Section</Typography>
                </Container>
            </Box>
        </Box >
    )
}

export default LandingPage