import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    section.form{
        width:100%;
        max-width:350px;
        margin: 30px;
    }

    section.form form{
        margin-top: 100px;
    }
    section.form form h1{
        font-size: 32px;
        margin-bottom: 32px;
    }
    section.form form a{
        display: flex;
        align-items: center;
        margin-top:40px;
        color : #414141;
        text-decoration:none;
        font-weight: 500px;
        font-size: 20px;
    }
    section.form form a svg{
        margin-right: 10px;
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
`;