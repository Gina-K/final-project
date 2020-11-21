import React, {useState} from "react";
import {
    Col,
    Card,
    CardHeader,
    CardImg,
    CardBody,
    Button
} from "reactstrap";

function PokemonCard({pokemon}) {
    let img = pokemon.id <= 720 ? (process.env.PUBLIC_URL + `pokemons/${pokemon.id}.png`) : (process.env.PUBLIC_URL + "pokemons/confused_travolta.png");
    const [hovered, setHovered] = useState(false);
    const hoverEffect = hovered && "primary";

    return (
        <Col xs="12" sm="6" md="4" lg="3">
            <Card className="mt-4"
                  outline
                  color={hoverEffect}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
            >
                <CardHeader tag="h5" className="text-capitalize text-center">
                    {pokemon.name}
                </CardHeader>
                <CardBody>
                    <CardImg width="100%" src={img} alt={pokemon.name} className="mb-2"/>
                    <Button color="success">Catch!</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PokemonCard;