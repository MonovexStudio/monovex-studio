import React, {Component} from 'react';
import './Preference.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import PreferenceItem from "./PreferenceItem";
class Preference extends Component {
    render() {
        return (
            <section className="preference-section">
                <div className="container">
                    <SectionTitle title={"Наші переваги"}/>
                    {/*<p>Щодня ми наполегливо працюємо, щоб зробити життя наших клієнтів та їх бізнес кращим</p>*/}
                    <div className="preference__inner">
                        <PreferenceItem number="1" title="Lorem Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem deleniti excepturi illo quidem ratione. A eum libero numquam. Accusantium eius enim explicabo ipsam laboriosam quas quis recusandae suscipit temporibus!"/>
                        <PreferenceItem number="2" title="Lorem Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem deleniti excepturi illo quidem ratione. A eum libero numquam. Accusantium eius enim explicabo ipsam laboriosam quas quis recusandae suscipit temporibus!"/>
                        <PreferenceItem number="3" title="Lorem Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem deleniti excepturi illo quidem ratione. A eum libero numquam. Accusantium eius enim explicabo ipsam laboriosam quas quis recusandae suscipit temporibus!"/>
                        <PreferenceItem number="4" title="Lorem Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem deleniti excepturi illo quidem ratione. A eum libero numquam. Accusantium eius enim explicabo ipsam laboriosam quas quis recusandae suscipit temporibus!"/>

                    </div>
                </div>
            </section>
        );
    }
}

export default Preference;