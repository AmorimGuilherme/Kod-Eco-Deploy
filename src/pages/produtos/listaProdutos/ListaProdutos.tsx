import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProduto() {
    const [prods, setProds] = useState<Produto[]>([])
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
            navigate("/login")

        }
    }, [token])

    async function getProd() {
        await busca(`/produtos`, setProds, {
            headers: {
                'Authorization': token,
            },
        });
    }

    useEffect(() => {

        getProd()

    },
        [prods.length])

    return (
        <> <Grid container direction='row' >
            {
                prods.map(prod => (
                    <Box display="flex" flexWrap="wrap" m={3} className='container-listprod' >
                        <Card className='card-prod'>
                            <CardContent>
                                <Typography variant="h5" className='fonte'>
                                    {prod.nome}
                                </Typography>

                                <Typography variant="h6">
                                    <img src={prod.foto} />
                                </Typography>

                                <Typography variant="h5" className='fonte'>
                                    R${prod.preco}
                                </Typography>

                                <Typography variant="body2" component="p" className='desc'>
                        
                                    {prod.categoria?.descricao}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${prod.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button
                                                variant="contained"
                                                className="marginLeft button-atucateg"
                                                size='small'>atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${prod.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='button-delprod'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </Grid>
        </>
    )
}

export default ListaProduto;