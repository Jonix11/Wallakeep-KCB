import React from "react";
import "./ContactUsForm.css";
import { currentUser, checkIfUserHasSignIn } from "../../services/Util";

// 3. El nombre y apellidos del formulario deben inicializarse a los valores del nombre y apellidos del currentUser() [LISTO]

const initialState = () => {
    const user = currentUser();
    return {
        name: user.name,
        surname: user.surname,
        subject: '',
        message: ''
    }
};

export default class ContactUsForm extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado [LISTO]
        checkIfUserHasSignIn(this.props.history);

        this.state = initialState();

        // 3. Gestionar el formulario y verificar la información (onChange) [LISTO]
        // 3. Una vez verificada enviar a través de this.props.onSubmit [LISTO]
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit(event) {
        if (this.state.subject.trim().length === 0 || this.state.message.trim().length === 0) {
            alert("The subject and the message cannot be empty");
        } else {
            this.props.onSubmit(this.state);
        }
    }


    render() {
        return <>
            <h4 className={`ml-2 mb-4`}>Contact with the WallaKeep team</h4>

            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <h5 className={`ml-2`}><b>Name</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Surname</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="surname" value={this.state.surname} onChange={this.handleOnChange}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Subject</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="subject" value={this.state.subject} onChange={this.handleOnChange}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Message</b></h5>
                    <textarea className={`form-control d-block contact-form-input`} value={this.state.message} name="message" cols="30" rows="10" onChange={this.handleOnChange}/>
                </div>
                <div className={`ml-2`}>
                    <button type="submit" className="btn-primary btn">Save</button>
                </div>
            </form>
        </>;
    }
}
