import * as React from 'react';
import { json } from '../utils/api';

interface IWeatherProps { }

interface IWeatherState {
    temperature: number;
    humidity: number;
    wind: number;
    name: string;
    description: string;
    zipcode: number;
}

const API_KEY = process.env.WEATHER_API;
// console.log(config.weather.api_key);

export default class Form extends React.Component<IWeatherProps, IWeatherState> {

    constructor(props: IWeatherProps) {
        super(props);
        this.state = {
            temperature: undefined,
            humidity: undefined,
            wind: undefined,
            name: undefined,
            description: undefined,
            zipcode: undefined
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
                zipcode: null
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
                        </div>
                    </div>
                </div>
            </>
        );
    }
}