import React from 'react';
import "./Services.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import tablet from '../../assets/tablet3.jpg'
import ServiceCard from "../ServiceCard/ServiceCard";

const Services =()=> {
        return (
            <section id="services" className="services">
                <div className="container">
                    <SectionTitle title={"Наші послуги"}/>
                    <div className="services__inner">
                        <div className="services__inner-left">

                            <img
                                src={tablet}
                                alt="Man"
                            />


                        </div>
                        <div className="services__inner-right">
                            <ServiceCard number={"1."}
                                         title={"Landing Page"}
                                         price={"3500₴"}
                                         description={"Цільова сторінка - веб-сторінка, основним завданням якої є збір контактних даних цільової аудиторії. Використовується для посилення ефективності реклами, збільшення аудиторії. Цільова сторінка зазвичай містить інформацію про товар або послугу."}/>
                            <ServiceCard number={"2."}
                                         title={"Промо-сайт"}
                                         price={"3600₴"}
                                         description={"Промо сайт - це Інтернет-ресурс, основна мета якого полягає в тому, щоб підняти певний товар, послугу, подію або бренд і схилити покупця саме до його вибору."}/>

                            <ServiceCard number={"3."}
                                         title={"Сайт-візитка"}
                                         price={"2700₴"}
                                         description={"Сайт-візитка - невеликий сайт, як правило, складається з однієї веб-сторінок і містить основну інформацію про організацію, приватну особу, компанію, товари або послуги, прейскуранти, контактні дані. Часто сайт-візитку використовують компанії, які не хочуть витрачати значні кошти на створення окремого сайту."}/>
                            <ServiceCard number={"4."}
                                         title={"Інтернет-магазин"}
                                         price={"7900₴"}
                                         description={"Сайт, який торгує товарами за допомогою мережі Інтернет. Дозволяє користувачам онлайн, в своєму браузері або через мобільний додаток, сформувати замовлення на покупку, вибрати спосіб оплати і доставки замовлення, оплатити замовлення."}/>
                               </div>

                    </div>
                </div>

            </section>
        );
}

export default Services;