import React, { Component } from "react";
import {FaTrash} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import Card from './Card'
import {Wrapper,Foorm,CardsBody} from './style'
let defaultError = true;

class Form extends Component {
  state = {
    name: "",
    family: "",
    phone: "",
    email: "",
    option:"",
    errorName: "",
    errorFamily: "",
    errorEmail: "",
    errorPhone: "",
    
    users:[]
    
  };
//   declaring defaultError after mounting the component
  componentDidMount() {
    defaultError = false;
  }
  // Functions
  //  handleInput function
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validate);
  };
  //  validate all inputs
  validate = () => {
    this.validateName();
    this.validateFamily();
    this.validateEmail();
    this.validatePhone();
  };
  //  validation of name input
  validateName = () => {
    const { name } = this.state;
    !name
      ? this.setState({ errorName: "!شما باید فیلد نام را پر کنید" })
      :name.length<2 ? this.setState({ errorName: "نام باید حداقل دارای دو حرف باشد" })
      : this.setState({ errorName: "" });
  };
  //  //validatino of family input
  validateFamily = () => {
    const { family } = this.state;
    !family
      ? this.setState({ errorFamily: "!شما باید فیلد نام خانوادگی را پر کنید" })
      : this.setState({ errorFamily: "" });
  };
  //  ///validation of email input
  validateEmail = () => {
    const { email } = this.state;
    !email
      ? this.setState({ errorEmail: "!شما باید فیلد ایمیل را پر کنید" })
      : email.split("").includes("@")
      ? this.setState({ errorEmail: "" })
      : this.setState({ errorEmail: "!ایمیل شما باید دارای @ باشد" });
  };
  //  validation of email input
  validatePhone = () => {
    const { phone } = this.state;
    !phone
      ? this.setState({ errorPhone: "!شما باید فیلد شماره تماس را پر کنید" })
      : phone.length < 11
      ? this.setState({ errorPhone: "شماره تماس  دریافتی باید 11 رقمی باشد" })
      : this.setState({ errorPhone: "" });
  };
    //   handleSubmit function
   handleSubmit =(e)=>{
    e.preventDefault()
    
    const {name,family,phone,email,option} =e.target.elements
    let person = {Name:name.value,Family:family.value,Email:email.value,Phone:phone.value ,Option:option.value,Trash:<FaTrash/> ,Edit:<FaEdit/>}
    this.setState({users:[...this.state.users,person]})
    this.setState({name:''})
    this.setState({family:''})
    this.setState({phone:''})
    this.setState({email:''})
    this.setState({option:''})
    
   }
    
  
  //  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // render
  render() {
    const { name, family, phone, email,errorEmail,errorFamily, errorName,errorPhone,option,users} = this.state;
    const isValid = errorName === "" && errorEmail === "" && errorFamily==="" && errorPhone==="" 
    return (
      <Wrapper>
        <h3>وب اپلیکیشن مدیریت مخاطبین</h3>
        <Foorm onSubmit={(e)=>this.handleSubmit(e)}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="...نام"
              onChange={this.handleInput}
              value={name}
            ></input>
          </div>
          <div className="error">{errorName}</div>
          <div>
            <input
              name="family"
              type="text"
              placeholder=" ...نام خانوادگی"
              onChange={this.handleInput}
              value={family}
            ></input>
          </div>
          <div className="error">{errorFamily}</div>
          <div>
            <input
              name="phone"
              type="text"
              placeholder="...شماره تماس"
              onChange={this.handleInput}
              value={phone}
            ></input>
          </div>
          <div className="error">{errorPhone}</div>

          <div>
            <select name='option' onChange={this.handleInput} value={option} >
              <option disabled selected hidden >
                نسبت
              </option>
              <option>اعضای خانواده</option>
              <option>دوست </option>
              <option>همکار</option>
              <option>فامیل</option>
            </select>
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="...ایمیل"
              onChange={this.handleInput}
              value={email}
            ></input>
            
          </div>
          <div className="error">{errorEmail}</div>
          <button disabled={!isValid || defaultError} >اضافه کردن</button>
        </Foorm>
        <CardsBody>
        {users.map(item=>
          <Card info={item} array={this.state.users}/>
         
      )}
       
        </CardsBody>
      
        
      </Wrapper>
    );
  }
}

export default Form;
