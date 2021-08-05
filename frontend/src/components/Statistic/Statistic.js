import React from 'react';
import './Statistic.css';
import SectionTitle from "../SectionTitle/SectionTitle";

const Statistic = props => (
    <section className="statistic">
        <div className="container">
            <SectionTitle title="Головне про нас в цифрах"/>
            <div className="statistic__inner">
                <div className="statistic-row">
                    <div className="stat stat-projects">
                        <span>5</span>
                        <h5>Виконаних проектів</h5>
                    </div>
                    <div className="stat stat-years">
                        <span>2+</span>
                        <h5>Роки роботи на ринку</h5>
                    </div></div>
                <div className="statistic-row">
                    <div className="stat stat-some">
                        <span>5000+</span>
                        <h5>Користувачів в день, на сайті одного з наших клієнтів</h5>
                    </div>
                    <div className="stat stat-clients">
                        <span>100%</span>
                        <h5>Задоволених клієнтів</h5>
                    </div></div>
            </div>
        </div>
    </section>
)

export default Statistic;