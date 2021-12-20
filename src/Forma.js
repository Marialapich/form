import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik'
import './App.css';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormCheckbox from './FormCheckbox';

export default class Forma extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          userName: '',
          city: '',
          email: '',
          tel: '',
          dateIn: '',
          dateOut: '',
          adults: 0,
          children: 0,
          room: 0,
          smoke: 'nonsmoking',
          termsAndConditions: false,
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
        validationSchema={Yup.object().shape({
          userName: Yup.string()
          .required('Name is required')
          .max(20, 'Name should be less than 20 characters'),
          city: Yup.string()
          .required('Name is city'),
          email: Yup.string()
          .email('Email should be in correct format')
          .required('Email is required'),
          tel: Yup.number()
          .min(5)
          .required('Phone number is required'),
          dateIn: Yup.date()
          .required('arrival of date'),
          dateOut: Yup.date()
          .required('departure of date'),
          adults: Yup.number()
          .min(1)
          .max(20)
          .required('Specify the number of adults'),
          children: Yup.number()
          .min(0)
          .max(10)
          .required('Specify the number of children'),
          room: Yup.number()
          .min(1)
          .max(10)
          .required('Specify the number of rooms'),
          termsAndConditions: Yup.boolean().isTrue(
            'You should accept our terms and conditions'
          ),
        })}
      >

      <Form>
            <Field name="userName" component={FormInput} label="Name"/>
            <Field name="city" component={FormInput} label="City" />
            <Field name="email" component={FormInput} label="Email" />
            <Field name="tel" component={FormInput} label="Telefon"/>
            <fieldset>
              <legend>Data</legend>
              <Field name="dateIn" component={FormInput}  type='date' label="Check-in"/>
              <Field name="dateOut" component={FormInput} type='date' label="Check-out"/>
            </fieldset>
            <Field name="adults" component={FormInput} type='number' label="Adults"/>
            <Field name="children" component={FormInput} type='number' label="Children"/>
            <Field name="room" component={FormInput} type='number' label="Room"/>
            <fieldset>
              <legend>Non-smoking/smoking rooms</legend>
              <Field name="smoke" component={FormRadio} value='non-smoking' id="non-smoking" label="Non-smoking room"/>
              <Field name="smoke" component={FormRadio} value='smoking' id="smoking" label="Smoking room"/>
            </fieldset>
            <Field name="termsAndConditions" component={FormCheckbox} label="I Agree with Terms and Conditions"/>
            <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
}