import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;  
    .content{
        width:100%;
        padding: 95px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    svg{
        margin-right: 10px;
    }
    .content section{
        width: 100%;
        max-width: 380px;
    }
    .content section h1{
        margin: 64px 0 32px;
        font-size: 32px;
    }
    .content section p {
        font-size: 18px;
        line-height: 32px;
    }
    .button{
        width: 100%;
        height: 60px;
        background: #6FB911;
        border:0;
        border-radius: 8px;
        color: #fff;
        font-weight: 800px;
        margin-top: 16px;
        display: inline-block;
        font-size: 22px;
        line-height: 60px;
        transition: filter 0.2s;
    }
    .button:hover{
        filter: brightness(90%);
    }
    a{
        display: flex;
        align-items: center;
        margin-top:40px;
        color : #414141;
        text-decoration:none;
        font-weight: 500px;
        font-size: 20px;
    }
    form{
        width: 100%;
        max-width: 450px;
    }
    input{
        margin-top: 8px;
    }
`;
