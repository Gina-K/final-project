import React, {useContext} from "react";
import {Button} from "reactstrap";

import {Context} from "../Context";

function LoadMoreBtn() {
    const {loadMore} = useContext(Context);
    return (
        <Button style={{position: "fixed", bottom: "1%", left:"1%", zIndex: 99}}
                color="primary"
                onClick={() => loadMore()}>Load more</Button>
    )
}

export default LoadMoreBtn;