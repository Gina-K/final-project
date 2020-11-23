import React, {useContext, useEffect} from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    Row,
    Container,
    Col
} from "reactstrap";

import {Context} from "../Context";

function PokemonDetails() {
    const {buttonRender, getPokemonFromAddressBar, currentPokemon} = useContext(Context);

    useEffect(getPokemonFromAddressBar, []);

    const imgSrc = currentPokemon.id <= 720 ? (process.env.PUBLIC_URL + `../pokemons/${currentPokemon.id}.png`) : (process.env.PUBLIC_URL + "../pokemons/confused_travolta.jpg");
    const status = currentPokemon.isCaught ? `Was caught on ${currentPokemon.captureDate}` : "Not caught yet";

    return (
        <Container>
            <Row>
                <Col>
                    <Card className="mt-2 mt-lg-5 ml-auto mr-auto" style={{maxWidth: "70vh"}}>
                        <CardBody>
                            <CardTitle tag="h4" className="text-capitalize">{currentPokemon.name} </CardTitle>
                            <CardSubtitle>ID: {currentPokemon.id}</CardSubtitle>
                            <CardImg width="100%" src={imgSrc} alt={currentPokemon.name}/>
                            <CardText>{status}</CardText>
                            {buttonRender(currentPokemon)}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PokemonDetails;