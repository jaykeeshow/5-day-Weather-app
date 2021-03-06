import React, {Component} from "react";
import Card from "./Card";
import DegreeToggle from "./DegreeToggle";
// require("dotenv").config();
// const api_key = process.env.API_KEY;

const api_key="1749be543c64a25b1f93acde790ca5ed";


class WeekContainer extends Component {
  state = {
    days: [],
    location: "zip=51-163",
    country: "pl",
    degreeType: "metric",
  };

  componentDidMount = () => {
    
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=${api_key}`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
    
          console.log("Data List Loaded", data.list)
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({days: dailyData})
      });
  };

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index} />);
  };

  updateForecastDegree = (newDegreeType) => {
    this.setState(
      {
        degreeType: newDegreeType,
      },
      this.sendNewFetch
    );
  };

  sendNewFetch = () => {
    
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=${api_key}`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data List Loaded", data.list);
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        this.setState({ days: dailyData });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
        <DegreeToggle
          degreeType={this.state.degreeType}
          updateForecastDegree={this.updateForecastDegree}
        />
        <h5 className="display-5 text-muted">New York, US</h5>
        <div className="row justify-content-center">{this.formatCards()}</div>
      </div>
    );
  }
}

export default WeekContainer;
