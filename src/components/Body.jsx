import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import Layout from './Layout'
import MiniCard from './MiniCard'
import VideoCameraSlash from '../assets/svg/videoCameraSlashIcon.svg'
import dashboardIcon from '../assets/svg/dashboardIcon.svg'
import babyIcon from '../assets/baby.png'
import Bolt from '../assets/svg/Bolt.svg'
import horlogeIcon from '../assets/svg/horlogeIcon.svg'
import waterIcon from '../assets/svg/water.svg'

export default function Body() {


  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  
  var data = generateDayWiseTimeSeries(new Date('11 Feb 2022').getTime(), 185, {
    min: 30,
    max: 90
  })

 const [chart, setChart] = useState({
  series: [{
    data: data
  }],
  options: {
    chart: {
      id: 'chart2',
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: true
      }
    },
    colors: ['#F0FFFF'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: '#F0FFDE',
      width: 2,
      dashArray: 1, 
    },
    grid: {
      borderColor: '#111',
      strokeDashArray: 7,
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 4,
    },
    markers: {
      size: 0.5
    },
    xaxis: {
      type: 'datetime',
      lines: {
        show: true
      }
    },
    
  },

  seriesLine: [{
    data: data
  }],
  optionsLine: {
    chart: {
      id: 'chart1',
      height: 130,
      type: 'area',
      brush:{
        target: 'chart2',
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date('19 Jun 2022').getTime(),
          max: new Date('14 Aug 2022').getTime()
        }
      },
    },
    colors: ['#008FFB'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
    
  },
 });

  const [param, setParam] = useState(
    [ 
      { id : 1,
        data: [
                { title: "T° int", parameter: "36.61 °C", color: "bg-amber-600" },
                { title: "H int", parameter: "45.61 %", color: "bg-green-600"  },
                { title: "T° ext", parameter: "32.61 °C", color: "bg-green-600" },
                { title: "H ext", parameter: "51.61 %", color: "bg-red-700" },
                { title: "T° bébé", parameter: "37.01 °C", color: "bg-green-600" },
                { title: "SATO", parameter: "65.01 %", color: "bg-amber-600" },
              ]
      },
      { id : 2,
        data: [
                { title: "T° int", parameter: "36.62 °C", color: "bg-amber-600" },
                { title: "H int", parameter: "45.62 %", color: "bg-green-600"  },
                { title: "T° ext", parameter: "32.62 °C", color: "bg-green-600" },
                { title: "H ext", parameter: "51.62 %", color: "bg-red-700" },
                { title: "T° bébé", parameter: "37.02 °C", color: "bg-green-600" },
                { title: "SATO", parameter: "65.02 %", color: "bg-amber-600" },
              ]
      }
    ]
  );

  
  const result = (param, content) => { 
    let filteredData = param.filter(content => content.id === 1);
    return filteredData.length!=1 ? content : filteredData;
  }
  

  const Content = [
    
        { title: "T° int", parameter: "36.60 °C", color: "bg-amber-600" },
        { title: "H int", parameter: "45.60 %", color: "bg-green-600"  },
        { title: "T° ext", parameter: "32.60 °C", color: "bg-green-600" },
        { title: "H ext", parameter: "51.60 %", color: "bg-red-700" },
        { title: "T° bébé", parameter: "37.01 °C", color: "bg-green-600" },
        { title: "SATO", parameter: "65.02 %", color: "bg-amber-600" },
    
  ];

  return (
    
    <div>
        <div class="flex  w-full justify-between">
            {/* Column 1 */}
            <div className='flex flex-col w-full'> 
             <div className='flex  w-full justify-between'> 
                <Layout margin="mt-6" width="w-full" heigth="h-36" headerText="Paramètres vitaux "> 
                  <div className="flex flex-row items-center w-full ">
                  {/*
                  {Content.map((datum) => {
                            return <MiniCard title={datum.title} parameter={datum.parameter} color={datum.color}/> 
                  })}
                  */}
                  
                     
                        {
                          //console.log(result(param, Content));
                          
                          Content.map((datum) => {
                            return <MiniCard title={datum.title} parameter={datum.parameter} color={datum.color}/> 
                          })  
                                              
                        }

                      {/*
                        <MiniCard className="basis-1/6" title="T° int" parameter="36.60 °C" color="bg-amber-600"/> 
                        <MiniCard className="basis-1/6" title="H int" parameter="45.60 %" color="bg-green-600"/>
                        <MiniCard className="basis-1/6" title="T° ext" parameter="32.60 °C" color="bg-green-600"/>
                        <MiniCard className="basis-1/6" title="H ext" parameter="51.60 %" color="bg-red-600"/>
                        <MiniCard className="basis-1/6" title="T° bébé" parameter="37.01 °C" color="bg-green-600"/>
                        <MiniCard className="basis-1/6" title="SATO" parameter="65.02 %" color="bg-amber-600"/> 
                      */}
                    
                  </div>                   
                </Layout>
              </div> 
              <div className='flex  w-full justify-between'> 
            
                <Layout margin="mt-1" width="w-full" heigth="h-44" headerText="Poids du bébé">
                    <p className='flex items-stretch md:items-center font-sans text-sm  py-1 px-[8rem]'>
                        <img src={babyIcon} alt="Icône bébé" className='w-[6rem]' />
                        <h2 className='text-8xl font-bold text-amber-600'>2.6</h2>
                        <h2 className='text-4xl font-bold text-amber-600'>Kg</h2>
                    </p>
                </Layout>
                <Layout margin="mt-1" width="w-full" heigth="h-44" headerText="Temps de sommeil par jour ">
                    <p className='flex items-stretch md:items-center font-sans text-sm  py-2 px-[8.5rem]'>
                        <img src={horlogeIcon} alt="Icône Bolt" className='w-[2rem] h-[2rem]' />
                        <h2 className='text-8xl font-bold text-green-600'>12</h2>
                        <h2 className='text-4xl font-bold text-green-600'>h</h2>
                    </p>
                </Layout>
              </div>

              <div class="flex items-center w-full justify-between">
                  <div className='flex items-center w-full justify-between'> 
                      <Layout margin="mt-1" width="w-[640px]" heigth="h-[480px]" headerText="Caméra">
                          <p className='flex items-center text-center font-sans text-sm py-36 px-52'>
                              <img src={VideoCameraSlash} alt="Vidéo camera slash" className='w-28'/>
                              <h2 className='text-2xl font-bold'>No Signal</h2>
                          </p>
                      </Layout>
                      <Layout margin="mt-1" width="w-[260px]" heigth="h-[480px]">
                        
                      </Layout>
                  </div>
                  
                  <div className='flex items-center w-full justify-between'>          
                  
                  </div> 
              </div>

            </div>
            
            {/* Column 2 */}
            <div className='flex flex-col w-full'> 
              <div className='flex w-full justify-between'>          
                <Layout margin="mt-6" width="w-full" heigth="h-36" headerText="Puissance consommée">
                      <p className='flex items-stretch md:items-center font-sans text-sm  py-1 px-[8rem]'>
                          <img src={Bolt} alt="Icône Bolt" className='w-[6rem]' />
                          <h2 className='text-8xl font-bold text-amber-600'>12</h2>
                          <h2 className='text-4xl font-bold text-amber-600'>kWh</h2>
                      </p>
                </Layout>
                <Layout margin="mt-6" width="w-full" heigth="h-36" headerText="Quantité d'eau dans le réservoir">
                      <p className='flex items-stretch md:items-center font-sans text-sm  py-2 px-[8rem]'>
                          <img src={waterIcon} alt="Icône Bolt" className='w-[2rem] h-[2rem]' />
                          <h2 className='text-7xl font-bold text-green-600'>5.66</h2>
                          <h2 className='text-4xl font-bold text-green-600'>L</h2>
                      </p>
                </Layout>
              </div> 
              <div className='flex mt-0.5 w-full justify-between'> 
                <Layout margin="mt-0.5" width="w-full" heigth="h-[420px]" headerText="Historique "> 
                    <div id="wrapper">
                      <div id="chart-line2">
                        <Chart options={chart.options} series={chart.series} type="line" height={230} />
                      </div>
                      <div id="chart-line">
                        <Chart options={chart.optionsLine} series={chart.seriesLine} type="area" height={130} />
                      </div>
                    </div>                 
                </Layout>
              </div>
              <div className='flex mt-0.5 w-full justify-between'> 
                <Layout margin="mt-0.5" width="w-full" heigth="h-[236px]" headerText="Terminal "> 
                                   
                </Layout>
              </div>

            </div>

        </div>
        

    </div>
              
   
  )
}
