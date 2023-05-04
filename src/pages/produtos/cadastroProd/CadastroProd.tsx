import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroProd.css';
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroProd() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            tipo: '',
            descricao: ''
        });


    const [produto, setProduto] = useState<Produto>({

        id: 0,
        nome: '',
        preco: 0,
        foto: '',
        estoque: 0,
        categoria: null
    });

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
    }, [token]);


    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria

        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id]);

    async function getCategorias() {
        await busca(`/categorias`, setCategorias, {
            headers: {
                'Authorization': token,
            }
        });
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token,
            },
        });
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                await put(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token,
                    },
                });

                toast.success('Produto atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {

                toast.error('Erro ao cadastrar, por favor verifique a quantidade mínima de caracteres!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {

            try {
                console.log(produto)
                await post(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token,
                    },

                });

                toast.success('Produto cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
            catch (error) {
                toast.error('Erro ao cadastrar, por favor verifique a quantidade mínima de caracteres!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }

        back();
    }

    function back() {
        navigate('/produtos');

    }


    return (
        <Container maxWidth="sm" className="topoprod">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" className='tituloProd' component="h1" align="center" >Formulário de cadastro de produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preço" name="preco" variant="outlined" margin="normal" fullWidth />

                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.estoque} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="estoque" label="estoque" name="estoque" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText className='formcatg'>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" className='btnprod'>
                        Cadastrar
                    </Button>
                </FormControl>
            </form>
        </Container>

    )
}

export default CadastroProd;