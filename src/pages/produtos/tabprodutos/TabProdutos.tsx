import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProdutos.css';
import ListaProduto from '../listaProdutos/ListaProdutos';

function TabProdutos() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="relative">
                    <Tabs centered className='tabs' onChange={handleChange}>
                        <Tab label="Nossos Produtos" value="1" className='text-label' />
                        <Tab label="Nossa Cultura" value="2" className='text-label' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaProduto />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="body1" gutterBottom align="justify" className='fontText'>
                        <div className='flex-container'>
                            <div>

                            
                        <p>A Kod-Eco é uma empresa de e-commerce especializada em
                        oferecer produtos biodegradáveis e ecológicos para indivíduos conscientes e comprometidos com a preservação do meio ambiente. Nosso objetivo é promover um estilo de vida sustentável e responsável, por meio da oferta de uma ampla variedade de produtos que apresentam alternativas ecológicas aos produtos convencionais.
                        Em nossa loja virtual, os clientes têm acesso a uma ampla gama de produtos, desde artigos de cuidados pessoais, como shampoos e sabonetes, até produtos para o lar, incluindo sacolas biodegradáveis, talheres reutilizáveis, entre outros. Todos os nossos produtos são selecionados cuidadosamente, com base em critérios de qualidade, eficácia e impacto ambiental.
                        </p>
                        </div>
                        <div>
                            <p>
                        Além da oferta de produtos ecológicos, estamos empenhados em fornecer informações úteis e orientações aos nossos clientes, a fim de que possam tomar decisões mais conscientes acerca de suas escolhas de consumo. Ademais, oferecemos opções de envio sustentáveis, utilizando embalagens biodegradáveis e evitando o uso de plásticos desnecessários.
                        Na Kod-Eco, assumimos um compromisso sério com a sustentabilidade e trabalhamos arduamente para garantir que nossos clientes tenham acesso aos melhores produtos e serviços possíveis.
                        Junte-se a nós em nossa missão de construir um futuro mais sustentável e responsável para o nosso planeta.
                        </p>
                        </div>
                        </div>
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabProdutos;
