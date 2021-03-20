import React, {Component} from 'react';
import './Preference.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import PreferenceItem from "./PreferenceItem";
import { withTranslation } from 'react-i18next';
import Stage from "../DevelopmentStage/Stage";
class Preference extends Component {

    render() {

        return (
            <section className="preference-section">
                <div className="container">
                    <SectionTitle title={this.props.t('section-titles.4')}/>
                     <div className="preference__inner">
                        <PreferenceItem number="1" title={this.props.t('preference-title.1')} text="На цьому етапі ми обговорюємо з вами бажання що до розробки сайту, обираємо тип сайту який підійде для реклами вашого продукту, аналізуємо ринок на наявність схожого продукту та пропонуємо варіанти унікального дизайну."/>
                        <PreferenceItem number="2" title={this.props.t('preference-title.2')} text="Красивий веб-сайт може говорити про ваш бренд миттєво, але привабливість може бути втрачена, якщо веб-сайт просто не працює належним чином. Ми ставимо досвід клієнтів в основу вашого дизайну."/>
                        <PreferenceItem number="3" title={this.props.t('preference-title.3')} text="Так само, як цегла та розчин, добре написаний код робить різницю у функціональності та зручності користування веб-сайтом. Ми маємо знання та досвід для створення доступного та добре задокументованого коду, навіть якщо це означає створення з нуля."/>
                        <PreferenceItem number="4" title={this.props.t('preference-title.4')} text="Комплекс операцій, що включає в себе адміністрування, інформаційний супровід, переробку і вдосконалення модулів, резервне копіювання даних, налаштування шаблонів і розширень, а також при необхідності зміну або оновлення доменного імені – словом, все те, що потрібно для постійної роботи вашого сайту."/>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Preference);