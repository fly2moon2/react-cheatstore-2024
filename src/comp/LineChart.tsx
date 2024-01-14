import * as d3 from 'd3'; // we will need d3.js

type LineChartProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {
  // read the data
  // build the scales and axes
  // build the lines

  return (
    <div>
      <svg width={width} height={height}>
        <rect id="view-box" width="24" height="24" fill="none" />
        <path
          id="Shape"
          d="M15.791,19.5,10.262,16.6,4.732,19.5a.75.75,0,0,1-1.088-.79L4.7,12.557.228,8.2a.75.75,0,0,1,.415-1.28l6.182-.9L9.589.419a.75.75,0,0,1,1.345,0l2.764,5.6,6.182.9A.751.751,0,0,1,20.3,8.2l-4.473,4.36,1.056,6.157a.748.748,0,0,1-1.088.79Z"
          transform="translate(1.739 1.25)"
          fill="#141124"
        />
      </svg>
    </div>
  );
};
