import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:none;
border-radius: .25rem;
color:var(--onsurface);
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all .2s ease-in-out;
&:hover{
    background: var(--hover);
}
:focus{
    outline:none;
}
`; 