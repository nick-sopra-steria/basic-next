// src/app/about/[name]/page.tsx
import { FC } from "react";

interface ownProps { name: string }

const AboutName: FC<ownProps> = ({ name }) => {
    return <div>
        <h1>Om {name}</h1>
        <p>Dette er en side med masse info om {name}</p>
    </div >;
};

export default AboutName;