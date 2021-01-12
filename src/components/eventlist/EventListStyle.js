import styled from "styled-components/macro";

export const ItemSegment = styled.div`
    display: flex;
    flex-direction: column;
    background: teal;
    margin-bottom: 10px;
    width: 600px;
    border-radius: 2px;
    box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);

`
export const ItemGroup = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid darkgray;
    padding: 10px;
`
export const ItemImage = styled.div`
    
    img{
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 50%
    }
`
export const ItemContent = styled.div`
    margin-left: 13px;
    h1{
        margin: -15px 0 0;
        font-size: 15px;
        color: #fff;
    }
    p{
        margin: 0;
        color: #fff;
        font-size: 13px;
        letter-spacing: 1px
    }
`
export const DateItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid darkgray;

    span {
        display: flex;
        align-items: center;
    }
`
export const Segment = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid darkgray;

    :nth-last-of-type(1){
        background-color: blueviolet;
        justify-content: space-between;
        color: #fff;
        border-bottom: none;
    }

    button{
        color: #fff;
        background: black;
        border: 1px solid #e0e1e2;
        border-radius: 5px;
        outline: 0;
        cursor: pointer;
        padding: 5px 13px;
        margin: 15px 0px;
    }
`
export const Item = styled.div`
    margin: 0 5px 0 0;
    img{
        width: 30px;
        height: 30px;
        object-fit: contain;
        border-radius: 50%
    }
`
