import React, {Component} from 'react';
import './Preference.css'
import PreferenceItem from "./PreferenceItem";
import stage1icon from '../../assets/stage1icon.jpg'
import stage2icon from '../../assets/stage2icon.jpg'
import stage3icon from '../../assets/stage3icon.jpg'
import stage4icon from '../../assets/stage4icon.jpg'
import { withTranslation } from 'react-i18next';

class Preference extends Component {
    render() {
        return (
            <section id="reviews" className="preference">
            <div className="container">
                <h3 className="preference-form-title">Наші Переваги</h3>
                <div className="preference-form__inner">
                    <PreferenceItem icon={stage1icon} title={this.props.t('preference-titles.1')} text={this.props.t('preference-description.1')}/>
                    <PreferenceItem icon={stage2icon} title={this.props.t('preference-titles.2')} text={this.props.t('preference-description.2')}/>
                    <PreferenceItem icon={stage3icon} title={this.props.t('preference-titles.3')} text={this.props.t('preference-description.3')}/>
                    <PreferenceItem icon={stage4icon} title={this.props.t('preference-titles.4')} text={this.props.t('preference-description.4')}/>
                </div>
            </div>
            </section>
        );
    }
}

export default withTranslation()(Preference);
