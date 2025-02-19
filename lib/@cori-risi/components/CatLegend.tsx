import React, { useState, useEffect } from 'react';

import InfoTooltip from "./InfoTooltip";

import style from "./styles/CatLegend.module.css"

export default function CatLegend ({legend_dict, legend_labels, info_dict}: {legend_dict: any, legend_labels: any, info_dict: any}) {

    const rows = [];
    let i = 0;
    for (let key in legend_dict) {
        if (key !== "default" && legend_dict.hasOwnProperty(key)) {
            rows.push(
                <div key={i} className={style["entry"]}>
                    <div className={style["key"]} style={{
                        backgroundColor: legend_dict[key],
                        border: "10px solid " + legend_dict[key],
                    }}>
                    </div>
                    <p>
                        {!!legend_labels && !!legend_labels[key]? legend_labels[key] : key}
                        {!!info_dict && !!info_dict[key]? <InfoTooltip text={info_dict[key]} /> : ""}
                    </p>
                </div>
            );
        }
        i++;

    }

    return (
        <div className={style["legend"]}>
            {rows}
        </div>
    );
}
