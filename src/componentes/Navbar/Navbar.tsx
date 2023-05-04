import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { addToken } from '../../store/tokens/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/homeinicial')
    }

    var navbarComponent;

    if (token !== "") {

        navbarComponent = <AppBar className='nv-menu' >
            <Toolbar className='container-menu' variant="dense">
                <Link to='/home' className='text-none'>
                    <Typography variant="h6" className='nav-titulo'>
                        Kod-Eco
                    </Typography>
                </Link>

                <Link to='/home' className='text-none' >
                    <Typography variant="h6" className='nav-titulo' >
                        Home
                    </Typography>
                </Link>

                <Link to='/formularioCategoria' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Cadastrar Categoria
                    </Typography>
                </Link>
                <Link to='/formularioProduto' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Cadastrar Produto
                    </Typography>
                </Link>

                <Link to='/categorias' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Categorias
                    </Typography>
                </Link>

                <Link to='/produtos' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Produtos
                    </Typography>
                </Link>

                <Link to='/contato' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Contato
                    </Typography>
                </Link>

                <Link to='/carrinho' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        <ShoppingCartIcon style={{ fontSize: 30, color: "white" }} />
                    </Typography>
                </Link>

                <Box className='text-none' onClick={goLogout}>
                    <Typography variant="h6" className='nav-titulo'>
                        logout
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    }

    return (

        <> {navbarComponent}</>


    );



}

export default Navbar;

