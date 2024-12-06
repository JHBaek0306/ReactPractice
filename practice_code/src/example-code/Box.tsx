import React, { useEffect, useState } from "react";

type BoxStyle = {
    backgroundColor: string;
    width: string;
    height: string;
};

type BoxProps = {
    createBoxStyle: () => BoxStyle;
};

const Box = ({ createBoxStyle }: BoxProps) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('Box size up');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div style={style}></div>
}

export default Box;