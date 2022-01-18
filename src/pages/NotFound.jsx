import styled from "styled-components"

 
const Container = styled.div`
height:100vh;
background-color:#fbeff5;
display:flex;
align-items:center;
justify-content:center;
`;

const NotFound = () => {
    return (  
            <Container>
                <h1>Oops! Page Not Found</h1>
            </Container>
    )
}

export default NotFound
