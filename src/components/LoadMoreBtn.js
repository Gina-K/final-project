import React from "react";
import {Button} from "reactstrap";

function LoadMoreBtn({clickHandler}) {
    return (
        <Button style={{position: "fixed", bottom: "1%", left: "1%", zIndex: 99}}
                color="primary"
                onClick={clickHandler}
        >Load more</Button>
    )
}

export default LoadMoreBtn;