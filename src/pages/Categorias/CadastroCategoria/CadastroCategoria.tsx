import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import "./CadastroCategoria.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>({

    id: 0,
    tipo: '',
    descricao: "",
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
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token,
          },
        });

        toast.success('Categoria atualizada com sucesso', {
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

        toast.error('Error, por favor verifique a quantidade mínima de caracteres!', {
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
        await post(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token,
          },
        });

        toast.success('Categoria cadastrada com sucesso', {
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

        toast.error('Error, por favor verifique a quantidade mínima de caracteres!', {
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
    navigate('/categorias');
  }

  return (
    <Container maxWidth="sm" className="topo"  >
      <form onSubmit={onSubmit}  >
        <Typography
          variant="h3"
          className="titulocategoria"
          component="h1"
          align="center"
        >
          Cadastro de Categoria
        </Typography>
        <TextField
          value={categoria.tipo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="tipo"
          label="tipo"
          variant="outlined"
          name="tipo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" className="btncategoria">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
