import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { api, login } from '../../service/Service';
import './Login.css'

function Login() {


    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )
        
    function updateModel (e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            // const resposta = await api.post('/usuarios/logar', userLogin)
            // setToken(resposta.data.token)

            await login(`usuarios/logar`, userLogin, setToken)

            alert('Usuario Logado com sucesso')
        }catch(error){
            alert('Dados do usuario inconsistentes, Erro ao logar!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box padding={20}>
                    <form onSubmit={onSubmit}>
                        <Typography>Entrar</Typography>
                        <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e) } label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e) } label='senha' variant='outlined' name='senha' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>Logar</Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='texto1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'></Grid>
        </Grid >
    );

}

export default Login;