import { Box } from '@mui/material';
import { Typography, Grid, TextField  } from '@material-ui/core';
import { ChangeEvent } from 'react';

import './Contato.css'

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
}

function Contato() {

    return (


        <Grid container className="contato">
            <Grid item xs={12} sm={12} className='container-cad' >
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Box className='cardForm' >
                    <form onSubmit={onSubmit} className='all'>
                    <Typography  variant='h3' align='center' className='text'> Entre em contato com a gente! </Typography>
                            <Box className='form' alignItems={'center'}>
                            <TextField id="nome" label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField  type="email" id="email" label='Email' variant='outlined' name='email' margin='normal' fullWidth />
                            <TextField  type="tel" id="telefone" label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
                            <TextField  type="message" id="mensagem" label='Mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth />
                            </Box>
                            <button className='but' type="submit">Enviar</button>
                            <Typography className='info'>Para mais informações, dúvidas ou sugestões, visite nossos canais disponíveis.</Typography>       
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>


    );
}

export default Contato;