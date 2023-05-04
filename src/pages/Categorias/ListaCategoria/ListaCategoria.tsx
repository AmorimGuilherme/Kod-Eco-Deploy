import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Button, Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import Categoria from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import "./ListaCategoria.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
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

  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
  },

    [categorias.length]);

  return (
    <>  

    <Grid container direction='row'> 
      {
        categorias.map((categoria) => (
          <Box m={2} className="container-listcateg" >
            <Card variant="outlined" className="card-categ">
              <CardContent >
                <Typography variant="h6" className='fonte'>
                  Categoria: <b />
                  {categoria.tipo}
                </Typography>
                <Typography component="h2" className='desc'>
                  Descrição: <b />
                  {categoria.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to={`/formularioCategoria/${categoria.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1} >
                      <Button
                        variant="contained"
                        className="marginLeft button-atucateg"
                        size="small">
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`}
                    className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size="small" className="button-delcateg">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
        </Grid>
    </>
  );
}

export default ListaCategoria;
