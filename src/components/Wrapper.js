import React from "react";
import Particles from "react-tsparticles";
import { light, dark } from "../utils/themeConfig";

export default function Wrapper({ theme }) {

    if (theme === true) {
        return <Particles id="tsparticles" options={light} />
    } else {
        return <Particles id="tsparticles" options={dark} />
    }

}