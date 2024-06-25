import React from "react";
import ReactMarkdown from "react-markdown";
import BarChart from "./BarChart.tsx";
import GroupedBarChart from "./GroupedBarChart.tsx";
import LineChart from "./LineChart.tsx";
import { toSnakeCase } from "../utils";

export function DataMetricPanel (props: {
    data: any,  chart_type: string, chart_width: number, metric: string, metadata: any,
    primary_element_name: string,  primary_geoid: string,
    title: string,  subtitle: string, primary_text: string, secondary_text: string
}) {

    return (
        <div className={"metric-section"} id={toSnakeCase(props.metric)} key={props.metric}>
            <h2>{props.title}</h2>
            <p><b>{props.subtitle}</b></p>
            <ReactMarkdown>{props.primary_text}</ReactMarkdown>

            {((props.chart_type === 'bar') ?
                    <BarChart
                        primary_geoid={props.primary_geoid}
                        metric={props.metric}
                        data={
                            props.data
                        }
                        metadata={props.metadata}
                        width={props.chart_width}
                        element_name={props.primary_element_name}
                    /> :

                    (props.chart_type === 'line') ?
                        <LineChart
                            primary_geoid={props.primary_geoid}
                            metric={props.metric}
                            data={
                                props.data
                            }
                            metadata={props.metadata}
                            width={props.chart_width}
                            height={250}
                            element_name={props.primary_element_name}
                        /> :

                        (props.chart_type === 'grouped bar') ?
                            <GroupedBarChart
                                primary_geoid={props.primary_geoid}
                                metric={props.metric}
                                data={
                                    props.data
                                }
                                metadata={props.metadata}
                                width={props.chart_width}
                                element_name={props.primary_element_name}
                            /> :

                            <></>
            )}

            <p><b>How to interpret this chart</b></p>
            <ReactMarkdown>{props.secondary_text}</ReactMarkdown>
        </div>
    );
}