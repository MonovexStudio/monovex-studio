import React, {Component} from 'react';
import './PortfolioStat.css';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

class PortfolioStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            odometerValue: 0
        };
    }

    componentDidMount() {
        this.setState({odometerValue: this.props.value});
    }

    render() {
        const {odometerValue} = this.state;
        return (
            <div className="portfolio-stat">
                <img
                    src={this.props.image}
                    className="portfolio-stat__img"
                    alt={"portfolio"}
                />
                <div className="portfolio-stat__inner">
                    <Odometer
                        format="d"
                        duration={2500}
                        value={odometerValue}
                    />
                    <span>{this.props.span}</span>
                    <h3>{this.props.text}</h3>
                </div>
            </div>
        )
    }
}

export default PortfolioStat;