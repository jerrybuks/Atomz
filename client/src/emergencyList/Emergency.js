import React, { Component } from 'react'
import phone from "./asset/icons8-phone-24.png"
import './Emergency.css'

export default class Emergency extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: {},
            loading: true,
            text: ""
        }
    }
    componentDidMount() {
        fetch("./db.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { data: { stations } } = data
                console.log(stations);
                this.setState({ states: stations, loading: false })
            });
    }
    handleChange = (e) => {
        
        this.setState({ text : e.target.value })
        const foundState = [];
            fetch("./db.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { data: { stations } } = data
                stations.forEach(station => {
                    const curName = station.name.toLowerCase()
                    console.log(curName.includes(this.state.text))
                    if(curName.includes(this.state.text.toLowerCase())) {
                        foundState.push(station)
                    }
                })
                this.setState({ states: foundState })
            });
    }
    render() {
        const { states, loading } = this.state
        console.log(this.state)
        if (loading) return <div>Loading....</div>
        return (
            <div>
                <div className="search-parent">
                    <input type="text" className="textbox" placeholder="Search.."name="search" value={this.state.text}
                    onChange={this.handleChange} />
                    <input title="Search" value="" type="submit" className="button-search" />
                </div>
                <div className="emergency-container">
                {states.map(({name, phones}) => (
                    <div className="emergency-card">
                        <div>{name}</div>
                        <ul>{phones.map(contact => (<div className="util-flex contact">
                            <li>{contact}</li><a href={`tel:${contact}`}><img src={phone} alt="phone" className="phone-img" /></a>
                            </div>))}</ul>
                    </div>
                 ) )}
            </div>
            </div>
           
        )
    }
}
