import {Gauge} from '@ant-design/plots';

// Styles
// import "./style/semi_circle_chart.scss";


const App = ({chartTitle = '', percent, color = '', gradientColors = () => {}, canBeUnfilled = false}) => {
  const rangeColor = () => {
    if (!color) {
      return `l(1) 0:${percent === 0 ? 'rgb(210, 202, 224)' : '#E84362'} 1:${gradientColors(percent)}`;
    } else {
      return `l(1) 0:${percent === 0 ? 'rgb(210, 202, 224)' : color} 1:${percent === 0 ? 'rgb(210, 202, 224)' : color}`;
    }
  };

  const config = {
    percent: percent/100,
    range: {
      color: rangeColor(),
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '1.455vw',
          color: !color ? '#4B535E' : color,
        },
        formatter: () => `${percent ? `${percent}%` : canBeUnfilled ? 'N/A' : '0%'}`,
      },
      content: {
        style: {
          fontSize: '0.8vw',
          width: 'min-content',
          color: '#655D96',
          whiteSpace: 'initial',
        },
        formatter: () => chartTitle,
      },
    },
  };

  return (
      <div className="chart_sect semi_circle_chart">
        <Gauge {...config} />
      </div>
  );
};

export default App;
