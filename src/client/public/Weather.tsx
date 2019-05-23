import * as React from 'react';
import moment from 'moment';

import Cloudy from '../images/Cloudy';
import Clear from '../images/Clear';
import Rain from '../images/Rain';
import Snow from '../images/Snow';
import { error } from 'util';

interface IWeatherProps { }

interface IWeatherState {
    name: string;
    maxTemp1: any;
    maxTemp2: number;
    maxTemp3: number;
    maxTemp4: number;
    maxTemp5: number;
    minTemp1: number;
    minTemp2: number;
    minTemp3: number;
    minTemp4: number;
    minTemp5: number;
    zipcode: number;
    date1: string;
    date2: string;
    date3: string;
    date4: string;
    date5: string;
    weather1: string;
    weather2: string;
    weather3: string;
    weather4: string;
    weather5: string;
    city: string;
    isLoading: boolean;
    error: boolean;
}

const API_KEY = process.env.WEATHER_API;
// console.log(config.weather.api_key);

export default class Form extends React.Component<IWeatherProps, IWeatherState> {
    constructor(props: IWeatherProps) {
        super(props);
        this.state = {
            name: null,
            maxTemp1: null,
            maxTemp2: null,
            maxTemp3: null,
            maxTemp4: null,
            maxTemp5: null,
            minTemp1: null,
            minTemp2: null,
            minTemp3: null,
            minTemp4: null,
            minTemp5: null,
            zipcode: null,
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            weather1: null,
            weather2: null,
            weather3: null,
            weather4: null,
            weather5: null,
            city: null,
            isLoading: false,
            error: false
        };
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {
            let i = 0;

            const getMaxTemp1 = () => {
                let maxTemp = 0;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date1).format("YYYY-MM-DD")) {
                        if (item.main.temp_max > maxTemp) {
                            maxTemp = item.main.temp_max;
                        }
                    }
                }
                return maxTemp = Math.floor(9 / 5 * (maxTemp - 273) + 32);
            }

            const getMaxTemp2 = () => {
                let maxTemp = 0;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date2).format("YYYY-MM-DD")) {
                        if (item.main.temp_max > maxTemp) {
                            maxTemp = item.main.temp_max;
                        }
                    }
                }
                return maxTemp = Math.floor(9 / 5 * (maxTemp - 273) + 32);
            }

            const getMaxTemp3 = () => {
                let maxTemp = 0;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date3).format("YYYY-MM-DD")) {
                        if (item.main.temp_max > maxTemp) {
                            maxTemp = item.main.temp_max;
                        }
                    }
                }
                return maxTemp = Math.floor(9 / 5 * (maxTemp - 273) + 32);
            }

            const getMaxTemp4 = () => {
                let maxTemp = 0;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date4).format("YYYY-MM-DD")) {
                        if (item.main.temp_max > maxTemp) {
                            maxTemp = item.main.temp_max;
                        }
                    }
                }
                return maxTemp = Math.floor(9 / 5 * (maxTemp - 273) + 32);
            }

            const getMaxTemp5 = () => {
                let maxTemp = 0;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date5).format("YYYY-MM-DD")) {
                        if (item.main.temp_max > maxTemp) {
                            maxTemp = item.main.temp_max;
                        }
                    }
                }
                return maxTemp = Math.floor(9 / 5 * (maxTemp - 273) + 32);
            }

            const getMinTemp1 = () => {
                let minTemp = Infinity;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date1).format("YYYY-MM-DD")) {
                        if (item.main.temp_min < minTemp) {
                            minTemp = item.main.temp_min;
                        }
                    }
                }
                return minTemp = Math.floor(9 / 5 * (minTemp - 273) + 32);
            }

            const getMinTemp2 = () => {
                let minTemp = Infinity;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date2).format("YYYY-MM-DD")) {
                        if (item.main.temp_min < minTemp) {
                            minTemp = item.main.temp_min;
                        }
                    }
                }
                return minTemp = Math.floor(9 / 5 * (minTemp - 273) + 32);
            }

            const getMinTemp3 = () => {
                let minTemp = Infinity;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date3).format("YYYY-MM-DD")) {
                        if (item.main.temp_min < minTemp) {
                            minTemp = item.main.temp_min;
                        }
                    }
                }
                return minTemp = Math.floor(9 / 5 * (minTemp - 273) + 32);
            }

            const getMinTemp4 = () => {
                let minTemp = Infinity;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date4).format("YYYY-MM-DD")) {
                        if (item.main.temp_min < minTemp) {
                            minTemp = item.main.temp_min;
                        }
                    }
                }
                return minTemp = Math.floor(9 / 5 * (minTemp - 273) + 32);
            }

            const getMinTemp5 = () => {
                let minTemp = Infinity;

                for (let item of data.list) {
                    if (moment(item.dt_txt).format("YYYY-MM-DD") == moment(this.state.date5).format("YYYY-MM-DD")) {
                        if (item.main.temp_min < minTemp) {
                            minTemp = item.main.temp_min;
                        }
                    }
                }
                return minTemp = Math.floor(9 / 5 * (minTemp - 273) + 32);
            }

            const api_call = await fetch(`api/weather/${this.state.zipcode}`);
            const data = await api_call.json();
            //console.log(data);
            this.setState({
                date1: data.list[i].dt_txt,
                date2: data.list[i + 8].dt_txt,
                date3: data.list[i + 16].dt_txt,
                date4: data.list[i + 24].dt_txt,
                date5: data.list[i + 32].dt_txt,
            });
            this.setState({
                name: data.city.name,
                maxTemp1: getMaxTemp1(),
                maxTemp2: getMaxTemp2(),
                maxTemp3: getMaxTemp3(),
                maxTemp4: getMaxTemp4(),
                maxTemp5: getMaxTemp5(),
                minTemp1: getMinTemp1(),
                minTemp2: getMinTemp2(),
                minTemp3: getMinTemp3(),
                minTemp4: getMinTemp4(),
                minTemp5: getMinTemp5(),
                weather1: data.list[i].weather[0].main,
                weather2: data.list[i + 8].weather[0].main,
                weather3: data.list[i + 16].weather[0].main,
                weather4: data.list[i + 24].weather[0].main,
                weather5: data.list[i + 32].weather[0].main,
                city: data.city.name,
                isLoading: true,
                error: false
            });
        } catch (e) {
            this.setState({ error: true });
            this.setState({ error: false });
            throw e;
        }
    }

    getDayOneName = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day1 = new Date(this.state.date1).getDay();

        return days[day1];
    }

    getDayTwoName = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day2 = new Date(this.state.date2).getDay();

        return days[day2];
    }

    getDayThreeName = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day3 = new Date(this.state.date3).getDay();

        return days[day3];
    }

    getDayFourName = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day4 = new Date(this.state.date4).getDay();

        return days[day4];
    }

    getDayFiveName = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day5 = new Date(this.state.date5).getDay();

        return days[day5];
    }

    getWeatherOne = () => {
        if (this.state.weather1 == 'Clear') {
            return <Clear />;
        } else if (this.state.weather1 == 'Clouds') {
            return <Cloudy />;
        } else if (this.state.weather1 == 'Rain') {
            return <Rain />;
        } else if (this.state.weather1 == 'Snow') {
            return <Snow />;
        } else {
            return 'Error';
        }
    }

    getWeatherTwo = () => {
        if (this.state.weather2 == 'Clear') {
            return <Clear />;
        } else if (this.state.weather2 == 'Clouds') {
            return <Cloudy />;
        } else if (this.state.weather2 == 'Rain') {
            return <Rain />;
        } else if (this.state.weather2 == 'Snow') {
            return <Snow />;
        } else {
            return 'Error';
        }
    }

    getWeatherThree = () => {
        if (this.state.weather3 == 'Clear') {
            return <Clear />;
        } else if (this.state.weather3 == 'Clouds') {
            return <Cloudy />;
        } else if (this.state.weather3 == 'Rain') {
            return <Rain />;
        } else if (this.state.weather3 == 'Snow') {
            return <Snow />;
        } else {
            return 'Error';
        }
    }

    getWeatherFour = () => {
        if (this.state.weather4 == 'Clear') {
            return <Clear />;
        } else if (this.state.weather4 == 'Clouds') {
            return <Cloudy />;
        } else if (this.state.weather4 == 'Rain') {
            return <Rain />;
        } else if (this.state.weather4 == 'Snow') {
            return <Snow />;
        } else {
            return 'Error';
        }
    }

    getWeatherFive = () => {
        if (this.state.weather5 == 'Clear') {
            return <Clear />;
        } else if (this.state.weather5 == 'Clouds') {
            return <Cloudy />;
        } else if (this.state.weather5 == 'Rain') {
            return <Rain />;
        } else if (this.state.weather5 == 'Snow') {
            return <Snow />;
        } else {
            return 'Error';
        }
    }

    render() {
        return (
            <>
                <div className="col-sm-12">
                    <form
                        className="form-group mt-3"
                        onSubmit={this.handleSubmit}
                    >
                    {this.state.error ? alert('Invalid Zipcode') :
                        null
                    }
                        <div className="input-group input-group-lg mb-3">
                            <input
                                type="number"
                                value={undefined}
                                name="zipcode"
                                placeholder="Zipcode..."
                                className="form-control my-1 p-1 ml-5 bg-light col-sm-6"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ zipcode: e.target.valueAsNumber })}
                            />
                            <div className="input-group-append ml-5">
                                <button className="btn btn-secondary" type="submit">Get Weather</button>
                            </div>
                        </div>
                    </form>
                    {this.state.isLoading ?
                        <>
                            <div className="row d-flex justify-content-center">
                                <h4 className="col-sm-12 d-flex justify-content-center">{this.state.city} Weather Forecast</h4>
                                <div className="col-1 mr-2">
                                    <div className="card" style={{ width: "100px" }}>
                                        <div className="card-title d-flex justify-content-center mb-0">{this.getDayOneName()}</div>
                                        <div className="card-body">
                                            {this.getWeatherOne()}
                                        </div>
                                        <div className="card-subtitle d-flex justify-content-center mt-0">
                                            {this.state.maxTemp1}&#176;
                                            <span className="light-gray"> {this.state.minTemp1}&#176;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 mr-2">
                                    <div className="card" style={{ width: "100px" }}>
                                        <div className="card-title d-flex justify-content-center mb-0">{this.getDayTwoName()}</div>
                                        <div className="card-body">
                                            {this.getWeatherTwo()}
                                        </div>
                                        <div className="card-subtitle d-flex justify-content-center mt-0">
                                            {this.state.maxTemp2}&#176;
                                            <span className="light-gray"> {this.state.minTemp2}&#176;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 mr-2">
                                    <div className="card" style={{ width: "100px" }}>
                                        <div className="card-title d-flex justify-content-center mb-0">{this.getDayThreeName()}</div>
                                        <div className="card-body">
                                            {this.getWeatherThree()}
                                        </div>
                                        <div className="card-subtitle d-flex justify-content-center mt-0">
                                            {this.state.maxTemp3}&#176;
                                            <span className="light-gray"> {this.state.minTemp3}&#176;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 mr-2">
                                    <div className="card" style={{ width: "100px" }}>
                                        <div className="card-title d-flex justify-content-center mb-0">{this.getDayFourName()}</div>
                                        <div className="card-body">
                                            {this.getWeatherFour()}
                                        </div>
                                        <div className="card-subtitle d-flex justify-content-center mt-0">
                                            {this.state.maxTemp4}&#176;
                                            <span className="light-gray"> {this.state.minTemp4}&#176;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 mr-2">
                                    <div className="card" style={{ width: "100px" }}>
                                        <div className="card-title d-flex justify-content-center mb-0">{this.getDayFiveName()}</div>
                                        <div className="card-body">
                                            {this.getWeatherFive()}
                                        </div>
                                        <div className="card-subtitle d-flex justify-content-center mt-0">
                                            {this.state.maxTemp5}&#176;
                                            <span className="light-gray"> {this.state.minTemp5}&#176;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                    }
                </div>
            </>
        );
    }
}