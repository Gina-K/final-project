import React, {useState, useContext} from "react";
import {
    Col,
    Card,
    CardHeader,
    CardImg,
    CardBody,
    CardText,
    Button
} from "reactstrap";
import {Link} from "react-router-dom";

import {Context} from "../Context";

function PokemonCard({pokemon}) {
    let imgSrc = pokemon.id <= 720 ? (process.env.PUBLIC_URL + `pokemons/${pokemon.id}.png`) : (process.env.PUBLIC_URL + "pokemons/confused_travolta.jpg");
    const [hovered, setHovered] = useState(false);
    const hoverEffect = hovered ? "primary" : "none";
    const {buttonRender, cardClickHandler} = useContext(Context);

    return (
        <Col xs="12" sm="6" md="4" lg="3">
            <Link to={`/details/${pokemon.name}`}>
                <Card className="mt-4"
                      outline
                      color={hoverEffect}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={() => cardClickHandler(pokemon)}
                >
                    <CardHeader tag="h5" className="text-capitalize text-center">
                        {pokemon.name}
                    </CardHeader>
                    <CardBody>
                        <CardImg width="100%" src={imgSrc} alt={pokemon.name} className="mb-2"/>
                        <CardText>{pokemon.isCaught ? "caught" : "not caught"}</CardText>
                        <CardText>Captured: {pokemon.captureDate}</CardText>
                        {buttonRender(pokemon)}
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}

export default PokemonCard;