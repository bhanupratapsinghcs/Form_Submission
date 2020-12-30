import { makeStyles, TextField, Button } from '@material-ui/core'
import emailjs from 'emailjs-com'
import { useState } from 'react';

const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: 500,
        marginTop: theme.spacing(1),
    },
}))

export default function Form() {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [description, setDescription] = useState(null);
    const classes = useStyle();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname && email && password && description) {
            emailjs.sendForm(process.env.REACT_APP_SEERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    console.log(result.text);
                    alert(result.text + "! Feedback Capture")
                }, (error) => {
                    console.log(error.text);
                });
            setFirstname(null)
            setLastname(null)
            setEmail(null)
            setPassword(null)
            setDescription(null)
        }
        else {
            alert("Enter All Fields")
        }

        e.target.reset();
    }


    return (
        <div className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => (handleSubmit(e))}>
                <TextField onChange={(e) => { setFirstname(e) }} id="outlined-basic" label="FirstName" variant="outlined" style={{ width: 500, margin: 10 }} name='firstname' />
                <TextField onChange={(e) => { setLastname(e) }} id="outlined-basic" label="LastName" variant="outlined" style={{ width: 500, margin: 10 }} name='lastname' />
                <TextField onChange={(e) => { setEmail(e) }} id="outlined-basic" label="Email" variant="outlined" style={{ width: 500, margin: 10 }} name='email' />
                <TextField onChange={(e) => { setPassword(e) }} id="outlined-basic" label="Password" variant="outlined" style={{ width: 500, margin: 10 }} name='password' />
                <TextField onChange={(e) => { setDescription(e) }} id="outlined-basic" label="Description" multiline variant="outlined" style={{ width: 500, margin: 10 }} name='description' />
                <Button style={{ margin: 10 }} type="submit" fullWidth variant="contained" color="primary">
                    Submit Details
                </Button>
            </form>
        </div>
    );
}
