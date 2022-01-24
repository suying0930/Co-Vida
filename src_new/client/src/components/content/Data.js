import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Data = () => {
  const [chartData, setChartData] = useState({});
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [total_confirmed, setTotal_confirmed] = useState(null);
  const [total_deaths, setTotal_deaths] = useState(null);
  const [total_recovered, setTotal_recovered] = useState(null);
  const [last_date, setLast_date] = useState(null);

  const chart = () => {
    // the chart related
    // data set
    let dates = [];
    let confirmed = [];
    let deaths = [];
    let recovered = [];
    let last_confirmed = 0;
    let last_deaths = 0;
    let last_recovered = 0;

    // API url
    axios
      .get("https://covidapi.info/api/v1/country/USA")
      .then((res) => {
        let length = 0;
        console.log(res);
        for (const [key, value] of Object.entries(res.data.result)) {
          // daily increase confirmed data
          let today_confirmed = value.confirmed;
          // daily increased deaths data
          let today_deaths = value.deaths;
          // daily increased recovered data
          let today_recovered = value.recovered;

          if (key == "2020-11-22") {
            //wrong data do nothing
          } else {
            //get date
            // get month 
            let month = key.substring(5, 7)
            let day = key.substring(8, 10)
            
            switch(month){
              case '01':
                month = 'Jan';
                break
              case '02':
                month = 'Feb';
                break
              case '03':
                month = 'Mar';
                break
              case '04':
                month = 'Apr';
                break
              case '05':
                month = 'May';
                break
              case '06':
                month = 'Jun';
                break
              case '07':
                month = 'Jul';
                break
              case '08':
              month = 'Aug';
              break
              case '09':
                month = 'Sep';
                break
              case '10':
                month = 'Oct';
                break
              case '11':
                month = 'Nov';
                break
              case '12':
                month = 'Dec';
                break
            }
            dates.push(month + "-" + day);
            confirmed.push(today_confirmed - last_confirmed);
            deaths.push(today_deaths - last_deaths);
            recovered.push(today_recovered - last_recovered);
          }

          last_confirmed = today_confirmed;
          last_deaths = today_deaths;
          last_recovered = today_recovered;

          // count increase 1
          length = length + 1;
        }

        dates = dates.splice(length - 50, length);
        confirmed = confirmed.splice(length - 50, length);
        deaths = deaths.splice(length - 50, length);
        recovered = recovered.splice(length - 50, length);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "New Confimed Cases",
              data: confirmed,
              backgroundColor: "#f0ad4e",
              minBarLength: 100,
            },
            {
              label: "New Deaths Cases",
              data: deaths,
              backgroundColor: "#d9534f",
              minBarLength: 100,
            },
            {
              label: "New Recovered Cases",
              data: recovered,
              backgroundColor: "#5cb85c",
              minBarLength: 100,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    async function fetchData() {
      // api for summary data
      const response = await fetch(
        "https://covidapi.info/api/v1/country/USA/latest"
      );
      const res = await response.json();
      // const [data] = res.data.result

      const data = res.result;
      // // the summary data
      let firstKey = Object.keys(data)[0];
      //2020-11-22
      let month = firstKey.substring(5, 7)
      let day = firstKey.substring(8, 10)
      // get month 
      switch(month){
        case '01':
          month = 'Jan';
          break
        case '02':
          month = 'Feb';
          break
        case '03':
          month = 'Mar';
          break
        case '04':
          month = 'Apr';
          break
        case '05':
          month = 'May';
          break
        case '06':
          month = 'Jun';
          break
        case '07':
          month = 'Jul';
          break
        case '08':
        month = 'Aug';
        break
        case '09':
          month = 'Sep';
          break
        case '10':
          month = 'Oct';
          break
        case '11':
          month = 'Nov';
          break
        case '12':
          month = 'Dec';
          break
      }
      setLast_date(month + "-" + day);
      // get confirmed data
      let total_confirmed = data[firstKey].confirmed;
      setTotal_confirmed(total_confirmed);
      // // get death data
      let total_deaths = data[firstKey].deaths;
      setTotal_deaths(total_deaths);
      // // get recovered data
      let total_recovered = data[firstKey].recovered;
      setTotal_recovered(total_recovered);
    }

    fetchData();
    chart();
  }, []);

  return (
    <div>
      <div className="container-fluid p-5 bg-light text-center my-3">
        <h3>USA Covid Cases</h3>
        <small className="text-muted">
          Last Updated:
          <span className="badge badge-dark" id="date">
            {last_date}
          </span>
        </small>
      </div>

      <div className="container my-5">
        <div className="row text-center">
          <div className="col-4 text-warning">
            <h5>Confirmed</h5>
            <p>{total_confirmed}</p>
          </div>
          <div className="col-4 text-danger">
            <h5>Deaths</h5>
            <p>{total_deaths}</p>
          </div>
          <div className="col-4 text-success">
            <h5>Recovered</h5>
            <p>{total_recovered}</p>
          </div>
        </div>
      </div>

      <div>
        <Line data={chartData} />
      </div>
      <br />
      <div className="row mb-4 data-foot">
        <div className="col-sm">
          <small className="text-secondary text-nowrap mr-3">
            <i className="fas fa-table"></i> Data source: <a href="https://github.com/CSSEGISandData/COVID-19" class="text-dark">COVID-19 Data Repository by JHU CSSE</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Data;
