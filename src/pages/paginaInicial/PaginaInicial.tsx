import { Typography, Grid, Button, } from '@material-ui/core';
import { Box } from '@mui/material';
import './PaginaInicial.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabProdutosInicial from '../tabProdutosInicial/TabProdutosInicial';
import Search from '../../componentes/search/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PaginaInicial() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {

            navigate("/homeinicial")

        }
    },

        [token])

    return (
        <>

            <Grid item xs={12} className='caixa-titulo' container direction='row'>
                <Box justifyContent="start" className=' sub-inicial' >
                    <img src="https://i.imgur.com/NrIpTKz.png" height='125' width='125' alt="" className='icone' />
                </Box>
                <Box className='search'>
                    <Search />
                </Box>
                <Typography align="center" className='sub-titulo'>Venha para o eco mais perto de você</Typography>
                <Link to="/login">
                    <Button
                        className="btn-inicial"
                        size='small'> Fazer Login
                    </Button> </Link>
            </Grid>

            <Grid alignItems="center" className='box-carrosel' justifyContent='center'>
                <Grid item>
                    <Swiper modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }} className='swiper-container' >
                        <SwiperSlide className='slide-item'>
                            <img src="https://i.imgur.com/bYd4tFo.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slide-item'>
                            <img src="https://i.imgur.com/nUPkiWD.gif" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slide-item'>
                            <img src="https://i.imgur.com/lPk89HX.gif" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slide-item'>
                            <img src="https://i.imgur.com/tAs6nyA.gif" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </Grid>
            </Grid>

            <Grid item xs={12} className='caixa-titulo' container direction='row'>
            </Grid>
            <TabProdutosInicial />

            <Box className='box-comentarios'>
                <Typography variant='h5' className='comentarios'>O que nossos clientes falam da gente? </Typography>
            </Box>

            <Grid container direction='row'>
                <Swiper slidesPerView={4} autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={5}
                    centeredSlides={true}
                    className="mySwiper"
                    >

                    <SwiperSlide className='slide-item'>
                        <img src="https://i.imgur.com/ZZXOwBO.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="https://i.imgur.com/eFwvJ0f.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="https://i.imgur.com/j6LBpYz.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide-item'>
                        <img src="https://i.imgur.com/kC0gUZX.png" alt="" />
                    </SwiperSlide></Swiper>
            </Grid>
        </>
    );
}

export default PaginaInicial;