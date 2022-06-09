import Card from "@/common/components/atoms/Card/Card";
import { CSSObject } from "@emotion/react";
import { useState, useEffect } from "react";

type currentWeatherTypes = {
    location: string,
    weather: string,
    temperature: number,
    pm100: number,
    pm25: number,
    maximumTemp: number,
    minimumTemp: number,

};

const currentWeatherStyle: CSSObject = {

};

export default () => {

    const [currentData, setCurrentData] = useState({
        location: 'seoul',
        weather: '',
        temperature: 0,
        pm100: 0,
        pm25: 0,
        maximumTemp: 0,
        minimumTemp: 0
    });

    return <main><Card css={{ ...currentWeatherStyle }}><h1></h1><div></div></Card></main>;
}