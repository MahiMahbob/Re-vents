import styled from "styled-components";

export const FormContainer = styled.div`
    width: 450px;
    background: rgba(255,255,255,1);
    padding: 10px;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-shadow:  0px 0px 15px 0px rgba(0, 0, 0, .45);        
    box-shadow:  0px 0px 15px 0px rgba(0, 0, 0, .45);
`
export const Form = styled.form`

`

export const Input = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 3px;
    border: rgba(0,0,0,.3) 2px solid;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 20px;

    :focus{
        outline:none;
        border:rgba(24,149,215,1) 2px solid;
        color:rgba(24,149,215,1);
    }
`
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const Button = styled.button`
    border-radius: 3px;
    border: rgba(0,0,0,.3) 0px solid;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 2px;
    background: ${({cancel}) => cancel ? 'red' : 'black'};
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
    -webkit-transition: background .4s;
    transition: background .4s;
    cursor: pointer;

:focus {
    outline: none;
}
`
