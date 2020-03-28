import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width:1920px;
  padding: 0 30px;
  margin: 32px auto;
  header{
      display: flex;
      align-items: center;
  }
  img{
      height: 64px;
  }
  form{
      margin: 0 50px 0 50px;
      width: 100%;
      
  }
  input{
      width: 100%;
      height: 42px;
      background-color:#f0f0f6;
  }
  .button{
        width: 100%;
        max-width: 200px;
        height: 42px;
        border:0;
        background-color:white;
        border: 2px solid #6FB911;
        color: black;
        border-radius: 8px;
        font-weight: 800px;
        display: inline-block;
        font-size: 22px;
        line-height: 40px;
        transition: background-color 0.2s;
    }
    .button:hover{
        background-color:#6FB911;
        color: white;
    }
    a{
        width: 100%;
        max-width: 200px;
        display: flex;
        align-items: center;
        margin: 0 10px;
        color : #414141;
        text-decoration:none;
        font-weight: 700px;
        font-size: 20px;
    }
`;
