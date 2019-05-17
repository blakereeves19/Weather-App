import * as React from 'react';

import Cloudy from '../images/Cloudy';
import Clear from '../images/Clear';
import Rain from '../images/Rain';
import Snow from '../images/Snow';

interface IWeatherProps { }

interface IWeatherState {
    name: string;
    maxTemp: number;
    minTemp: number;
    zipcode: number;
    date: string;
    weather: string;
}

const API_KEY = process.env.WEATHER_API;
// console.log(config.weather.api_key);

export default class Form extends React.Component<IWeatherProps, IWeatherState> {

    constructor(props: IWeatherProps) {
        super(props);
        this.state = {
            name: null,
            maxTemp: null,
            minTemp: null,
            zipcode: null,
            date: null,
            weather: null
        };
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {

            const api_call = await fetch(`api/weather/${this.state.zipcode}`);
            const data = await api_call.json();
            console.log(data);
            this.setState({
                name: data.city.name,
                maxTemp: data.list[0].main.temp_max = Math.floor(9 / 5 * (data.list[0].main.temp_max - 273) + 32),
                minTemp: data.list[0].main.temp_min = Math.floor(9 / 5 * (data.list[0].main.temp_min - 273) + 32),
                date: data.list[0].dt_txt,
                weather: data.list[0].weather[0].main
            });
        } catch (e) {
            throw e;
        }
    }

    render() {
        return (
            <>
                <div className="col-sm-12">
                    <form
                        className="form-group mt-3 border border-info rounded p-3 bg-dark"
                        onSubmit={this.handleSubmit}
                    >
                        <label className="text-white">Zipcode</label>
                        <input
                            type="number"
                            value={undefined}
                            name="zipcode"
                            placeholder="Zipcode..."
                            className="input-group my-1 p-1 border border-info bg-light"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ zipcode: e.target.valueAsNumber })}
                        />
                        <button className="btn btn-info mt-3">Get Weather</button>
                    </form>
                    <div className="card m-2 border border-info bg-dark">
                        <div className="card-body">
                            <div className="card-title text-white font-weight-bold border border-info border-top-0 border-left-0 border-right-0">{this.state.name} Weather</div>
                            <div className="text text-white">Max Temperature: {this.state.maxTemp}&#8457;</div>
                            <div className="text text-white">Min Temperature: {this.state.minTemp}&#8457;</div>
                            <div className="text text-white">Date: {this.state.date}</div>
                            <div className="text text-white">Weather: {this.state.weather}</div>
                            <Cloudy />
                            <Clear />
                            <Rain />
                            <Snow />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}