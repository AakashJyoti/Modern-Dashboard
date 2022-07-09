import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";
import { useStateCotext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const ColorMapping = () => {
  const { currentMode } = useStateCotext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mapping Chart" />
      <ChartComponent
        id="colormapping-chart"
        legendSettings={{ mode: "Range", background: "white" }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
