import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import TabProdutos from "../produtos/tabprodutos/TabProdutos";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TokenState } from "../../store/tokens/tokensReducer";
import Search from "../../componentes/search/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setMostrarBotao(true);
      } else {
        setMostrarBotao(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleVoltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Grid
        item
        xs={12}
        className="caixa-titulo-home"
        container
        direction="row"
      >
        <Box justifyContent="start" className=" sub-inicial">
          <img
            src="https://i.imgur.com/I4QBNwT.png"
            height="125"
            width="125"
            alt=""
            className="icone"
          />
        </Box>
        <Box className="search">
          <Search />
        </Box>
        <Typography align="center" className="sub-titulo">
          Venha para o eco mais perto de você
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        className="box-carrosel"
        justifyContent="center"
      >
        <Grid item>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            className="swiper-container"
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide className="slide-item">
              <img src="https://i.imgur.com/Wdyssq6.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <img src="https://i.imgur.com/01ZBaZu.gif" alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <img src="https://i.imgur.com/L3dU6TK.gif" alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <img src="https://i.imgur.com/fzi2NJm.gif" alt="" />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        className="caixa-titulo"
        container
        direction="row"
      ></Grid>
      <TabProdutos />

      {mostrarBotao && (
        <button
          onClick={handleVoltarAoTopo}
          className="botao-voltar-topo"
        ></button>
      )}
    </>
  );
}

export default Home;
