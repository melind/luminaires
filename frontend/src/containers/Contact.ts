import { connect } from 'react-redux';
import Contact from '../components/Contact';
import {send}  from '../store/reducer/contact-reducer';

const mapStateToProps = (state) => ({
    name: state.send.name,
    mail: state.send.mail,
    subject: state.send.subject,
    message: state.send.message,
    error: state.send.error
});
const r= "e";
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formState) => {
        dispatch(send(formState)); 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);