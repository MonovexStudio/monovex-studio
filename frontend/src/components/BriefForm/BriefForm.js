import React, {Component} from 'react';
import "./BriefForm.css";
import CheckBox from './CheckBox';
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle'
import RadioBox from './RadioButton';
import PriceSlider from './PriceSlider'
import CustomInputField from './CustomInputField'
import Button from '../Button/Button'
import axios from 'axios'
import {Notification, NotificationGroup} from "@progress/kendo-react-notification";
import {Slide} from "@progress/kendo-react-animation";


export default class BriefForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            error: false,
            loading: false,
            min: 2200,
            max: 6000,
            disabledSpecific: "disabled",
            disabledApproximate: "",
            disabledDeadline: "",
            titleMessage: "",
            radioBoxItem: "Сайт-Візитка",
            serviceTypeArray: ["Розробка сайту"],
            checkedItems: {
                serviceType: "",
                siteType: "Сайт-Візитка",
                price: "Ціну не вказано",
                deadline: "Дедлайн не вказаний",
                credentials: "Не вказано",
                workExample: "Не вказано",
                siteTheme: "Не вказано",
                city: "Не вказано",
                phoneNumber: "Не вказано",
                email: "Не вказано"
            }
        }
        this.selectChange = this.selectChange.bind(this);
    }
    onToggle = (flag) => this.setState({ [flag]: !this.state[flag] });
    handleSubmit(e) {
        e.preventDefault();
        // this.parseServiceType();
        this.setState({loading:true});
        console.log(this.state.checkedItems.serviceType);
        axios.post('https://monovex-production.herokuapp.com/customer/createAndSend', this.state.checkedItems,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(()=> {
                this.onToggle("success");
            }).catch(()=>{
            this.onToggle("error");
                this.setState({loading:false});
            }).catch(()=>{
            this.onToggle("error");
            this.setState({loading:false});
        })
    }

    onChangeSlider = (value) => {
        if (value[0] < value[1]) {
            this.setState({min: value[0], max: value[1]});

        }
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                price: value[0] + "-" + value[1]
            }
        }));

    };

    onChangeMin = value => {
        if (this.state.max > value) {
            this.setState({min: value});

        }
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                price: value + "-" + this.state.max
            }
        }));

        console.log(this.state.min)
        return this.state.min;
    };
    onChangeMax = value => {
        if (this.state.min < value) {
            this.setState({max: value});

        }
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                price: this.state.min + "-" + value
            }
        }));

        console.log(this.state.max)

    };

    setRadioButton(event, buttonName) {
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                [buttonName]: event.target.value
            }
        }));
    }

    setCheckedItems(event) {
        const isChecked = event.target.checked;
        let checkArray = this.state.serviceTypeArray;
        let serviceTypeString = null;
        if (isChecked) {
            checkArray.push(event.target.value);
            console.log(checkArray);
        } else if (!isChecked) {
            checkArray.splice(checkArray.indexOf(event.target.value), 1);
            console.log(checkArray);
        }
        serviceTypeString = checkArray.toString();
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                serviceType: serviceTypeString
            }
        }));
    }

    submitButtonClick = () => {
        console.log(this.state.checkedMessage);
    }

    setDeadlineDate(event) {
        if (event.target.value === "specificDeadline") {

            this.setInputValue(event, "deadline");
            this.setState({disabledDeadline: ""});

        } else if (event.target.value === "Терміново" || event.target.value === "Не поспішаємо") {
            this.setRadioButton(event, "deadline")
            this.setState({disabledDeadline: "disabled"});
        }

    }

    setInputValue(event, inputName) {
        if (event.target.name === inputName) {
            this.setState(prevState => ({
                checkedItems: {
                    ...prevState.checkedItems,
                    [inputName]: event.target.value
                }
            }));
        }
    }

    setTypeOfAmount(event) {
        if (event.target.value === "specific") {
            this.setState({disabledSpecific: ""});
            this.setState({disabledApproximate: "disabled"});

        } else if (event.target.value === "approximate") {
            this.setState({disabledSpecific: "disabled"});
            this.setState({disabledApproximate: ""});
        }
    }

    selectChange(e) {
        this.setState({ radioBoxItem: e.target.value });
    }


    render() {
        const { success, error, loading} = this.state;
        const {radioBoxItem} = this.state;
        return (
            <section id="order" className="brief-section">
                <div className="container">
                    <SectionTitle title="Бриф"/>
                    <SectionTitle style={{color:'white'}} title="Бриф"/>
                    <form className="brief-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="brief-row">
                            <div className="brief-col">
                                <SectionSubtitle title="Контактна особа (П.І.Б.)"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "credentials")}
                                                  name="credentials" placeholder="Шевченко Тарас Григорович" type="text"/>
                                <SectionSubtitle title="Приклад роботи який вам подобається"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "workExample")}
                                                  name="workExample" placeholder="https://www.google.com/" type="text"/>
                                <SectionSubtitle title="Тематика майбутнього сайту"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "siteTheme")}
                                                  name="siteTheme" placeholder="Доставка їжі" type="text"/>
                                <SectionSubtitle title="Місто"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "city")} name="city"
                                                  placeholder="Рівне" type="text"/>
                                <SectionSubtitle title="Номер телефону"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "phoneNumber")}
                                                  name="phoneNumber" placeholder="+380 хх ххх-хх-хх" type="text"/>
                                <SectionSubtitle title="Ваш e-mail"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "email")} name="email"
                                                  placeholder="example@gmail.com" type="email"/>
                            </div>
                            <div className="brief-col">
                                <SectionSubtitle title="Яка послуга вас цікавить?"/>
                                <div onChange={event => this.setCheckedItems(event)} className="box-block checkbox">
                                    <ul className="svg-checkbox">
                                        <CheckBox checked={true} checkGroup="serviceType" id="1" value="Розробка сайту"
                                                  text="Розробка сайту"/>
                                        <CheckBox checkGroup="serviceType" id="2" value="Обслуговування сайту"
                                                  text="Обслуговування сайту"/>
                                        <CheckBox checkGroup="serviceType" id="3" value="Доповнення вже готового сайту"
                                                  text="Доповнення вже готового сайту"/>
                                        <CheckBox checkGroup="serviceType" id="4" value="Розробка мобільного додатку"
                                                  text="Розробка мобільного додатку"/>
                                    </ul>
                                </div>
                                <SectionSubtitle title="Який вид сайту вас цікавить?"/>
                                <div onChange={event => this.setRadioButton(event, "siteType")}
                                     className="box-block radiobox">
                                    <ul className="svg-radio">
                                        {/* <select value={radioBoxItem} onChange={this.selectChange} name="sites">
                                            <option id="1" value="Сайт-візитка">Сайт-візитка</option>
                                            <option id="2" value="Landing page">Landing page</option>
                                            <option id="3" value="Персональний">Персональний</option>
                                            <option id="4" value="Корпоративний">Корпоративний</option>
                                            <option id="5" value="Каталог">Каталог</option>
                                        </select>*/}
                                        <RadioBox checked={true} radioGroup="siteType" id="1" value="Сайт-Візитка"
                                                  text="Сайт-Візитка"/>
                                        <RadioBox radioGroup="siteType" id="2" value="Landing page"
                                                  text="Landing page"/>
                                        <RadioBox radioGroup="siteType" id="3" value="Персональний"
                                                  text="Персональний"/>
                                        <RadioBox radioGroup="siteType" id="4" value="Корпоративний"
                                                  text="Корпоративний"/>
                                        <RadioBox radioGroup="siteType" id="5" value="Каталог" text="Каталог"/>
                                    </ul>
                                </div>
                            </div>

                            <div className="brief-col">
                            <SectionSubtitle title="Яку суму ви маєте на розробку сайту?"/>
                                <div onChange={event => this.setTypeOfAmount(event)} className="price-slider-block">
                                    <ul className="svg-radio">
                                        <RadioBox checked={true} value="approximate" id="6" radioGroup="price"
                                                  text="Приблизно (грн)"/>

                                        <PriceSlider min={this.state.min} max={this.state.max}
                                                     onChange={this.onChangeSlider} onChangeMin={this.onChangeMin}
                                                     onChangeMax={this.onChangeMax} name="specificAmount"
                                                     disable={this.state.disabledApproximate} textBeforeInput="від"
                                                     textCenterInput="до"/>

                                        <RadioBox value="specific" id="7" radioGroup="price" text="Конкретна сума"/>
                                    </ul>
                                    <CustomInputField onChange={event => this.setInputValue(event, "price")}
                                                      name="price"
                                                      disabled={this.state.disabledSpecific}
                                                      placeholder="Конкретна сума (2200)" type="number"/>
                                </div>

                                <SectionSubtitle title="Який бажаний термін запуску проекту?"/>
                                <div onChange={event => this.setDeadlineDate(event)} className="box-block radiobox">
                                    <ul className="svg-radio">
                                        <RadioBox value="Терміново" id="8" radioGroup="deadline" text="Терміново"/>
                                        <RadioBox checked={true} value="specificDeadline" id="9"
                                                  radioGroup="deadline" text="Необхідно зробити до:"/>
                                        <CustomInputField onChange={event => this.setInputValue(event, "deadline")}
                                                          name="deadline" disabled={this.state.disabledDeadline}
                                                          placeholder="Дата дедлайну" type="date"/>
                                        <RadioBox value="Не поспішаємо" id="10" radioGroup="deadline"
                                                  text="Не поспішаємо"/>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" text="Відправити"/>
                        <Button disabled={this.state.loading} type="submit" text="Відправити"/>
                    </form>
                </div>
                <NotificationGroup
                    style={{
                        right: 20,
                        bottom: 20,
                        alignItems: "flex-start",
                        flexWrap: "wrap-reverse",
                    }}
                >
                    <Slide direction={success ? "up" : "down"}>
                        {success && (
                            <Notification
                                type={{ style: "success", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ success: false })}
                            >
                                <span className="success-message">Вашу заявку надіслано</span>
                            </Notification>
                        )}
                    </Slide>
                    <Slide direction={error ? "up" : "down"}>
                        {error && (
                            <Notification
                                type={{ style: "error", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ error: false })}
                            >
                                <span>Помилка! Повторіть спробу через декілька хвилин</span>
                            </Notification>
                        )}
                    </Slide>
                    <Slide direction={loading ? "up" : "down"}>
                        {loading && (
                            <Notification
                                type={{ style: "info", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ loading: false })}
                            >
                                <span>Надсилання інформації</span>
                            </Notification>
                        )}
                    </Slide>
                </NotificationGroup>
            </section>
        )
    }
}
