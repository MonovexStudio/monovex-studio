import React, {Component} from 'react';
import './Preference.css'
import PreferenceItem from "./PreferenceItem";
import stage1icon from '../../assets/stage1icon.jpg'
import stage2icon from '../../assets/stage2icon.jpg'
import stage3icon from '../../assets/stage3icon.jpg'
import stage4icon from '../../assets/stage4icon.jpg'
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
class Preference extends Component {
    render() {
        return (
            <section id="reviews" className="preference">
            <div className="container">
                <h3 className="preference-form-title">Наші Переваги</h3>
                <div className="preference-form__inner">
                    <PreferenceItem icon={stage1icon} title="Обговорення з клієнтом" text="На цьому етапі ми обговорюємо з вами бажання що до розробки сайту, обираємо тип сайту який підійде для реклами вашого продукту, аналізуємо ринок на наявність схожого продукту та пропонуємо варіанти унікального дизайну."/>
                    <PreferenceItem icon={stage2icon} title="Планування та дизайн" text="Красивий веб-сайт може говорити про ваш бренд миттєво, але привабливість може бути втрачена, якщо веб-сайт просто не працює належним чином. Ми ставимо досвід клієнтів в основу вашого дизайну."/>
                    <PreferenceItem icon={stage3icon} title="Розробка та тестування" text="Так само, як цегла та розчин, добре написаний код робить різницю у функціональності та зручності користування веб-сайтом. Ми маємо знання та досвід для створення доступного та добре задокументованого коду, навіть якщо це означає створення з нуля."/>
                    <PreferenceItem icon={stage4icon} title="Готовий продукт" text="Що ж, ми зробили все, що вам потрібно, вчасно і якісно. Тепер час святкувати :)"/>
                </div>
            </div>
            </section>
        );
    }
}

export default Preference;
