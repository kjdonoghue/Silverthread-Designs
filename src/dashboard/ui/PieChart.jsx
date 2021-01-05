import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryChart, VictoryLegend, VictoryLabel , VictoryContainer} from 'victory';

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 3 }
  ];
  const legendData = [{ name: "Necklaces" }, { name: "Bracelets" }, { name: "Rings" }];


const PieChart = () => {
    return (
        // <h1>Silverthread Products Sold</h1>
        <svg width={500} height={400} style={{ border: "1px solid #ccc", backgroundColor: "white" }}>
          <VictoryLegend
            standalone={false}
            colorScale={["#78bfb5", "#f06292", "#b71c1c"]}
            x={20}
            y={40}
            gutter={20}
            title="Legend"
            centerTitle
            style={{ border: { stroke: "black" } }}
            data={legendData}
          />
          <VictoryPie
            standalone={false}
            width={400}
            height={300}
            padding={{
              left: 200,
              bottom: 20,
              top: 100
            }}
            colorScale={["#78bfb5", "#f06292", "#b71c1c"]}
            data={data}
            labels={() => null}
          />
          </svg>
    //   <div>
    //     <h1>Silverthread Products Sold</h1>
    //     <svg width={500} height={400} style={{ border: "1px solid #ccc", backgroundColor: "white" }}>
    //     {/* <h1>Silverthread Prodcuts Sold</h1> */}
    //     {/* <div> */}
    //     {/* <p>Silverthread Prodcuts Sold</p> */}
    //       <VictoryLegend
    //         standalone={false}
    //         colorScale={["#78bfb5", "#f06292", "#b71c1c"]}
    //         x={20}
    //         y={40}
    //         gutter={20}
    //         title="Legend"
    //         centerTitle
    //         style={{ border: { stroke: "black" } }}
    //         data={legendData}
    //       />
    //       <VictoryPie
    //     //   titleComponent={"Silverthread Prodcuts Sold"}
    //         // title="Silverthread Prodcuts Sold"
    //         // name="Silverthread Prodcuts Sold"
    //         standalone={false}
    //         width={400}
    //         height={300}
    //         padding={{
    //           left: 200,
    //           bottom: 20,
    //           top: 100
    //         }}
    //         colorScale={["#78bfb5", "#f06292", "#b71c1c"]}
    //         data={data}
    //         labels={() => null}
    //       />
    //       {/* </div> */}
    //     </svg>
    //     </div>
      );
//     return (
//         <div>
// <VictoryChart>
// <VictoryPie
//   data={[
//     { x: "Necklaces", y: 35, yourAttribute: "#78bfb5" },
//     { x: "Bracelets", y: 40, yourAttribute: "#f06292" },
//     { x: "Earrings", y: 55, yourAttribute: "#b71c1c" }
//   ]}
//   style={{
//     data: {
//       fill: (d) => d.slice.data.yourAttribute
//     }
//   }}
// />
// </VictoryChart>
            {/* <VictoryPie
  colorScale={["#78bfb5", "#f06292", "#01579b", "#b71c1c", "navy" ]}
  data={[
    { x: "Earrings", y: 20 },
    { x: "Necklaces", y: 22 },
    { x: "Bracelets", y: 15 },
    { x: "Rings", y: 10 },
    { x: "Other", y: 20 },
    { x: "Mezuzzahs", y: 2 },
    { x: "Brooches", y: 1 },
    { x: "Chains", y: 10 }
  ]}
/> */}
    //     </div>
    // )
}

export default PieChart


// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
// } from '@devexpress/dx-react-chart-material-ui';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import FormControl from '@material-ui/core/FormControl';
// import {
//   schemeCategory10,
//   schemeAccent,
//   schemeDark2,
//   schemePaired,
//   schemePastel1,
//   schemePastel2,
//   schemeSet1,
//   schemeSet2,
//   schemeSet3,
// } from 'd3-scale-chromatic';

// import { Palette } from '@devexpress/dx-react-chart';

// const schemeCollection = [
//   schemeCategory10,
//   schemeAccent,
//   schemeDark2,
//   schemePaired,
//   schemePastel1,
//   schemePastel2,
//   schemeSet1,
//   schemeSet2,
//   schemeSet3,
// ];

// const demoStyles = theme => ({
//   typography: {
//     marginTop: 0,
//     marginBottom: theme.spacing(1),
//   },
//   div: {
//     width: '200px',
//     marginLeft: '50px',
//     paddingBottom: '30px',
//   },
//   item: {
//     width: '40px',
//     height: '40px',
//   },
//   schemeConteiner: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: theme.spacing(1),
//   },
// });

// const data = [];
// for (let i = 0; i < 15; i += 1) {
//   data.push({ category: `item${i}`, val: 1 });
// }

// class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//       scheme: schemeCollection[0],
//     };

//     this.changeScheme = this.changeScheme.bind(this);
//   }

//   changeScheme(e) {
//     this.setState({ scheme: schemeCollection[e.target.value] });
//   }

//   render() {
//     const { data: chartData, scheme } = this.state;
//     const { classes } = this.props;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <Palette scheme={scheme} />
//           <PieSeries
//             valueField="val"
//             argumentField="category"
//           />
//         </Chart>
//         <div className={classes.schemeConteiner}>
//           {scheme.map(color => (
//             <div
//               key={color}
//               className={classes.item}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>
//         <div className={classes.div}>
//           <Typography component="h5" variant="h5" className={classes.typography}>Scheme</Typography>
//           <FormControl>
//             <NativeSelect onChange={this.changeScheme} defaultValue={0}>
//               <option value={0}>schemeCategory10</option>
//               <option value={1}>schemeAccent</option>
//               <option value={2}>schemeDark2</option>
//               <option value={3}>schemePaired</option>
//               <option value={4}>schemePastel1</option>
//               <option value={5}>schemePastel2</option>
//               <option value={6}>schemeSet1</option>
//               <option value={7}>schemeSet2</option>
//               <option value={8}>schemeSet3</option>
//             </NativeSelect>
//           </FormControl>
//         </div>
//       </Paper>
//     );
//   }
// }

// export default withStyles(demoStyles, { name: 'Demo' })(Demo);


// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Palette } from '@devexpress/dx-react-chart';
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";


// const theme = createMuiTheme({
//     palette: {
//       background: {
//         paper: "#FFFFFF"
//         // paper: "#bdbdbd"
//         // paper: "#616161" // gray
//       },
//        primary: {
//         //  main: "#4db6ac" //turquoise
//          main: "#78bfb5", //other turquoise
//          contrastText: "#FFFFFF"
//         //  main: "#f06292" //pink
//                  },
//        secondary: {
//          main: "#f06292" //pink
//           // main: "#01579b" //blue
//           // main: "#b71c1c" //red
//           // main: "#f50057" //dark pink
//                   },
//              },
//   // fontFamily: font // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
//   });

// const data = [
//   { country: 'Necklaces', area: 12 },
//   { country: 'Rings', area: 7 },
//   { country: 'Earrings', area: 7 },
//   { country: 'Bracelettes', area: 7 },
//   { country: 'Brazil', area: 6 },
//   { country: 'Australia', area: 5 },
//   { country: 'India', area: 2 },
//   { country: 'Others', area: 55 },
// ];
// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (
//         <ThemeProvider theme={theme}>
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <PieSeries
//             valueField="area"
//             argumentField="country"
//           />
//         </Chart>
//       </Paper>
//       </ThemeProvider>
//     );
//   }
// }