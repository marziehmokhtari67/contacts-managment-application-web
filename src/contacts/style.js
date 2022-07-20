import styled from 'styled-components'
export const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


h3{

    color:#BCA7F7;
}
`
export const Foorm =styled.form`
display:flex;
flex-direction:column;
gap:10px;
input{
    width:100%;
    border-radius:5px;
    width:100%;
    font-size:0.9rem;
}
.error{
    color:red;
    font-size:0.8rem;
}
button{
    font-size:1rem;
    border-radius:5px;
    backgrondcolor:blue;
    width:100%;
}

`
export const CardsBody=styled.div`
display:flex;
margin-top:30px;

padding:10px 30px;
width:100%;
gap:20px;
@media (max-width: 768px){
    
    flex-direction:column
    
    }
.card{
    border-radius:5px;
    padding:5px 5px;
    background-color:#BCA7F7;
    color:white;
    font-size:0.9rem;
}
    
    button{
        color:white;
        background-color:transparent;
        border:none;
    }

}
`
