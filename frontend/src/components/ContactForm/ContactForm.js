import React, { Component } from 'react';
import "./ContactForm.css";
import CheckBox from './CheckBox';
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle'
import RadioBox from './RadioButton';
import PriceSlider from './PriceSlider'
import CustomInputField from './CustomInputField'
import Button from '../Button/Button'
import axios from 'axios'



export default class ContactForm extends Component {
    
      constructor(props) {
        super(props);
    
        this.state = {
            min: 2200,
            max: 6000,
            disabledSpecific: "disabled",
            disabledApproximate: "",
            disabledDeadline: "",
            titleMessage:"",
            radioboxItem: "Сайт-Візитка",
            serviceTypeArray:["Розробка сайту"],
            checkedItems:{
                serviceType:"",
                siteType:"Сайт-Візитка",
                price: "Ціну не вказано",
                deadline: "Дедлайн не вказаний",
                credentials: "Не вказано",
                workExample: "Не вказано",
                siteTheme: "Не вказано",
                city: "Не вказано",
                phoneNumber: "Не вказано",
                email: "Не вказано"
            }

        };
        
      
      }
      handleSubmit(e){
        e.preventDefault();
        // this.parseServiceType();
          console.log(this.state.checkedItems.serviceType);
        axios.post('http://localhost:8080/customer/createAndSend', this.state.checkedItems,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
          if (response.data.status === 'success') {
            console.log(response.data); 
            this.resetForm();
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.");
          }
        })
      }
      onChangeSlider = (value) => {
        if (value[0] < value[1]) {
          this.setState({ min: value[0], max: value[1] });
          
        }
        this.setState(prevState=>({
            checkedItems:{
                ...prevState.checkedItems,
             price:value[0]+"-"+value[1]
            }
        }));
       
      };
    
      onChangeMin = value => {
        if (this.state.max > value) {
          this.setState({ min: value });
          
        }
        this.setState(prevState=>({
            checkedItems:{
                ...prevState.checkedItems,
             price:value+"-"+this.state.max
            }
        }));
        
        console.log(this.state.min)
        return this.state.min;
      };
      onChangeMax = value => {
        if (this.state.min < value) {
          this.setState({ max: value });
        
        }
        this.setState(prevState=>({
            checkedItems:{
                ...prevState.checkedItems,
             price:this.state.min+"-"+value
            }
        }));
     
        console.log(this.state.max)
        
      };

      setRadioButton(event,buttonName){
        this.setState(prevState => ({
            checkedItems: {
                ...prevState.checkedItems,
                [buttonName]: event.target.value
            }
        })); 
      }
      setCheckedItems(event){
        const isChecked = event.target.checked;
        let checkArray = this.state.serviceTypeArray;
        let serviceTypeString = null;
        if(isChecked){
           checkArray.push(event.target.value);
           console.log(checkArray);
        }else if(!isChecked){
            checkArray.splice(checkArray.indexOf(event.target.value),1);
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
       
      submitButtonClick = () =>{
        console.log(this.state.checkedMessage);
      }
    setDeadlineDate(event){
        if(event.target.value==="specificDeadline")
        {
            
            this.setInputValue(event,"deadline");
            this.setState({disabledDeadline:""});
           
        }
        else if(event.target.value==="Терміново"||event.target.value==="Не поспішаємо"){
            this.setRadioButton(event,"deadline")
            this.setState({disabledDeadline:"disabled"});
        }
            
      }
    setInputValue(event,inputName){
        if(event.target.name===inputName){
        this.setState(prevState=>({
            checkedItems:{
            ...prevState.checkedItems,
            [inputName]:event.target.value
        }
        }));
        } 
    }
    setTypeOfAmount(event){
        if(event.target.value==="specific")
        {
            this.setState({disabledSpecific:""});
            this.setState({disabledApproximate:"disabled"});
            
        }
        else if(event.target.value==="approximate"){
            this.setState({disabledSpecific:"disabled"});
            this.setState({disabledApproximate:""});
        }
    }
    

    render() {
       
          
        return (
           <section id="order" className="contact-section">
               <div className="container">
                   <SectionTitle title="Бриф"/>
                <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Яка послуга вас цікавить?"/>
                </div>
                
                <div className="box-section">
                    <div onChange={event=>this.setCheckedItems(event)} className="box-block checkbox">
                    <ul className="svg-checkbox">
                    <CheckBox checked={true} checkGroup="serviceType" id="1" value="Розробка сайту" text="Розробка сайту"/>
                    <CheckBox checkGroup="serviceType" id="2" value="Обслуговування сайту" text="Обслуговування сайту"/>
                    <CheckBox checkGroup="serviceType" id="3" value="Доповнення вже готового сайту" text="Доповнення вже готового сайту"/>
                    <CheckBox checkGroup="serviceType" id="4" value="Розробка мобільного додатку" text="Розробка мобільного додатку"/>
                    </ul>
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який вид сайту вас цікавить?"/>
                </div>
                
                <div className="box-section">
                    <div onChange={event=>this.setRadioButton(event,"siteType")} className="box-block radiobox">
                        <ul className="svg-radio">
                    <RadioBox checked={true} radioGroup="siteType" id="1" value="Сайт-Візитка"  text="Сайт-Візитка"/>
                    <RadioBox radioGroup="siteType" id="2" value="Landing page" text="Landing page"/>
                    <RadioBox radioGroup="siteType" id="3" value="Персональний" text="Персональний"/>
                    <RadioBox radioGroup="siteType" id="4" value="Корпоративний"  text="Корпоративний"/>
                    <RadioBox radioGroup="siteType" id="5" value="Каталог" text="Каталог"/>
                    </ul>
                    
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Яку суму ви маєте на розробку сайту?"/>
                </div>
                <div className="box-section">
                    <div onChange={event => this.setTypeOfAmount(event) } className="price-slider-block">
                        <ul className="svg-radio">
                    <RadioBox checked={true}  value="approximate" id="6"  radioGroup="price" text="Приблизно (грн)"/>
                    
                    <PriceSlider min={this.state.min} max={this.state.max} onChange={this.onChangeSlider} onChangeMin={this.onChangeMin} onChangeMax={this.onChangeMax} name="specificAmount" disable={this.state.disabledApproximate} textBeforeInput = "від" textCenterInput = "до"/>
                    
                    <RadioBox value="specific" id="7" radioGroup="price" text="Конкретна сума"/>
                    </ul>
                    <CustomInputField onChange={event=>this.setInputValue(event,"price")} name="price" disabled={this.state.disabledSpecific} placeholder="Конкретна сума (2200)" type="number"/>
                   
                    </div>
                    
                </div>
                
                </div>
                
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який бажаний термін запуску проекту?"/>
                </div>
                
                <div className="box-section">
                    <div onChange={event => this.setDeadlineDate(event) } className="box-block radiobox">
                    <ul className="svg-radio">
                    <RadioBox  value="Терміново" id="8" radioGroup="deadline" text="Терміново"/>
                    <RadioBox checked={true} value="specificDeadline" id="9" radioGroup="deadline" text="Необхідно зробити до:"/>
                    <CustomInputField onChange={event=>this.setInputValue(event,"deadline")} name="deadline" disabled={this.state.disabledDeadline} placeholder="Дата дедлайну" type="date"/>
                    <RadioBox value="Не поспішаємо" id="10" radioGroup="deadline"  text="Не поспішаємо"/>
                    </ul>
                        
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Контактна особа (П.І.Б.)"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"credentials")} name="credentials" placeholder="Маск Илон Петрович" type="text"/>
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Приклад роботи який вам подобається"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"workExample")} name="workExample" placeholder="https://www.google.com/" type="text"/>
                    </div>
                    
                </div>
                </div>
                
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Тематика майбутнього сайту"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"siteTheme")} name="siteTheme"  placeholder="Доставка смачненького" type="text"/>
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}

                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Місто"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"city")} name="city" placeholder="Львів" type="text"/>
                    </div>
                    
                </div>
                </div>
                 {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Номер телефону"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"phoneNumber")} name="phoneNumber" placeholder="38 (073) 413 12 02" type="text"/>
                    </div>
                    
                </div>
                </div>
                 {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Ваш e-mail"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField onChange={event=>this.setInputValue(event,"email")} name="email" placeholder="example@gmail.com" type="email"/>
                    </div>
                    
                </div>
                </div>

                <Button type="submit" text="Відправити"/>
                {/* <svg className="svg-icon" stroke-width="0.5" restart="whenNotActive" stroke="black" stroke-dasharray='450' stroke-dashoffset='450'  viewBox="0 0 250 250">
							<path fill="none" d="M17.125,1.375H2.875c-0.828,0-1.5,0.672-1.5,1.5v11.25c0,0.828,0.672,1.5,1.5,1.5H7.75v2.25H6.625c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375h6.75c0.207,0,0.375-0.168,0.375-0.375s-0.168-0.375-0.375-0.375H12.25v-2.25h4.875c0.828,0,1.5-0.672,1.5-1.5V2.875C18.625,2.047,17.953,1.375,17.125,1.375z M11.5,17.875h-3v-2.25h3V17.875zM17.875,14.125c0,0.414-0.336,0.75-0.75,0.75H2.875c-0.414,0-0.75-0.336-0.75-0.75v-1.5h15.75V14.125z M17.875,11.875H2.125v-9c0-0.414,0.336-0.75,0.75-0.75h14.25c0.414,0,0.75,0.336,0.75,0.75V11.875z M10,14.125c0.207,0,0.375-0.168,0.375-0.375S10.207,13.375,10,13.375s-0.375,0.168-0.375,0.375S9.793,14.125,10,14.125z"></path>
						</svg> */}
{/*                         
<InViewMonitor classNameNotInView='vis-hidden'
  classNameInView=''
  childPropsInView={{animate: true}} >
<MtSvgLines
    duration={10000}
    
    animate="hide"
  >
  <svg fill="none"  stroke-width="7" enable-background="new 0 0 250 250" height="250" stroke="black" viewBox="0 0 512 512" width="250" xmlns="http://www.w3.org/2000/svg"><g><g><path stroke="#1b262c" d="m490.5 267.5c4.143 0 7.5-3.358 7.5-7.5v-37.639c0-5.532-4.303-10.068-9.737-10.461v-60.213c0-1.926-.245-3.796-.705-5.581-2.485-9.636-11.25-16.776-21.651-16.776h-79.722v-46.969c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v46.969h-42.685v-23.33c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v56.822h-115v-125.829l21.993-21.993h93.007v56c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-60.5c0-5.79-4.71-10.5-10.5-10.5h-99.371c-2.805 0-5.441 1.092-7.425 3.076l-24.628 24.628c-1.983 1.983-3.076 4.62-3.076 7.425v94.201h-40.315v-46.969c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v46.969h-82.091c-10.401 0-19.166 7.14-21.651 16.776-.46 1.785-.705 3.655-.705 5.581v74.446l-6.659 6.659c-1.985 1.983-3.078 4.621-3.078 7.427v97.183c0 5.532 4.304 10.068 9.737 10.461v60.837c0 9.649 7.851 17.5 17.5 17.5h148.897v38.173h-39.975c-12.407 0-22.5 10.093-22.5 22.5v7.627c0 9.649 7.851 17.5 17.5 17.5h221.68c9.649 0 17.5-7.851 17.5-17.5v-7.627c0-12.407-10.094-22.5-22.5-22.5h-39.974v-38.173h148.896c9.649 0 17.5-7.851 17.5-17.5v-60.836c5.434-.393 9.737-4.929 9.737-10.461v-42.403c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v37.902h-81.641v-90.819l15.222-15.222h66.42v33.139c0 4.142 3.357 7.5 7.5 7.5zm-234.5 54.271c1.919 0 3.839-.732 5.304-2.197l17.685-17.685c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-4.881 4.881v-45.934h69v89.631h-153v-89.631h69v45.935l-4.881-4.881c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.685 17.685c1.462 1.464 3.382 2.196 5.301 2.196zm-76.5-86.541v-10.053h45.995l4.221 10.053zm-150.5 6.853 15.222-15.222h66.419v106.041h-81.641zm332.84 237.29c4.136 0 7.5 3.364 7.5 7.5v7.627c0 1.378-1.121 2.5-2.5 2.5h-221.68c-1.378 0-2.5-1.122-2.5-2.5v-7.627c0-4.136 3.364-7.5 7.5-7.5h107.84c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-52.866v-38.173h101.732v38.173h-13.866c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm111.423-70.673c0 1.378-1.121 2.5-2.5 2.5h-429.526c-1.378 0-2.5-1.122-2.5-2.5v-21.963h434.525v21.963zm0-196.839h-58.546c-2.805 0-5.441 1.092-7.425 3.076l-17.854 17.855c-1.985 1.983-3.078 4.621-3.078 7.427v97.183c0 5.79 4.71 10.5 10.5 10.5h76.403v23.834h-434.526v-23.834h76.404c5.79 0 10.5-4.71 10.5-10.5v-115.041c0-5.79-4.71-10.5-10.5-10.5h-72.783c-1.257 0-2.475.231-3.621.651v-60.825c0-4.056 3.3-7.356 7.356-7.356h82.091v33.103l-4.881-4.881c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.685 17.685c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.685-17.685c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.678-2.929-10.606 0l-4.881 4.881v-33.103h40.314v22.991c0 5.79 4.71 10.5 10.5 10.5h54.5v57.408h-2.515l-7.561-18.005c-1.798-4.281-5.959-7.047-10.603-7.047h-51.821c-6.341 0-11.5 5.159-11.5 11.5v122.684c0 5.79 4.71 10.5 10.5 10.5h162c5.79 0 10.5-4.71 10.5-10.5v-98.632c0-5.79-4.71-10.5-10.5-10.5h-73.5v-57.408h54.5c5.79 0 10.5-4.71 10.5-10.5v-22.991h42.685v33.102l-4.881-4.881c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l17.685 17.685c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l17.685-17.685c2.929-2.929 2.929-7.678 0-10.606-2.93-2.929-7.678-2.929-10.607 0l-4.881 4.881v-33.102h79.722c4.057 0 7.356 3.3 7.356 7.356v60.174z"/><path stroke="#0f4c75" d="m462.413 239.82h-40.467c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h40.467c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m462.413 261.431h-40.467c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h40.467c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m469.913 290.735c0-4.142-3.357-7.5-7.5-7.5h-40.467c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h40.467c4.143 0 7.5-3.358 7.5-7.5z"/><path stroke="#0f4c75" d="m421.946 304.943c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h18.141c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m90.054 239.82h-40.467c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.466c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.499-7.5z"/><path stroke="#0f4c75" d="m90.054 261.431h-40.467c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.466c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.499-7.5z"/><path stroke="#0f4c75" d="m90.054 283.235h-40.467c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.466c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.499-7.5z"/><path stroke="#0f4c75" d="m67.728 304.943h-18.14c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h18.14c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m294 66.452h-2v-35.452c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v35.452h-4v-22.566c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v22.566h-4v-30.298c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.298h-4v-14.835c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v14.835h-2c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h76c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m222.13 91.5h-4.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h4.13c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m222.13 113h-4.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h4.13c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m222.13 134.5h-4.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h4.13c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m294 91.5h-53.696c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h53.696c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m294 113h-53.696c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h53.696c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path stroke="#0f4c75" d="m294 134.5h-53.696c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h53.696c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/></g></g></svg>
  </MtSvgLines>
</InViewMonitor> */}
                </form>
               </div>
            </section>
        )
    }
}