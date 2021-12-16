import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik'
import './App.css';


export default class Forma extends Component {
    render() {
        return (
            <Formik
            initialValues={{
                name: '',
                city: '',
                email: '',
                tel: '',
                dateIn: '',
                dateOut: '',
                adults: '',
                children: '',
                room: '',
                smoke: 'nonsmoking',
                prepayment: false,
            }}
              onSubmit={(formValues) => alert(JSON.stringify(formValues))}
              >

                <Form>
                  <legend>Contacty</legend>
                  <div>
                    <label>Name</label>
                    <Field name='name'/>
                  </div>
                  <div>
                    <label>Where are you from?</label>
                    <Field name='city'/>
                  </div>
                  <div>
                    <label>Email</label>
                    <Field name='email'/>
                  </div>
                  <div>
                    <label>Tel</label>
                    <Field name='tel'/>
                  </div>
                  <fieldset>
                    <legend>Date</legend>
                    <span>
                      <label>Check-in</label>
                      <Field name='dateIn'type='date'></Field>
                    </span>
                    <span>
                      <label>Check-out</label>
                      <Field name='dateOut' type='date'></Field>
                    </span>
                  </fieldset>
                  <div>
                    <label>Adults</label>
                    <Field as='select' name='adults'>
                      <option value='1'>one</option>
                      <option value='2'>two</option>
                      <option value='3'>three</option>
                      <option value='4'>four</option>
                      <option value='5 and more'>five and more</option>
                    </Field>
                  </div>
                  <div>
                    <label>Children</label>
                    <Field as='select' name='children'>
                      <option value='0'>zero</option>
                      <option value='1'>one</option>
                      <option value='2'>two</option>
                      <option value='3'>three</option>
                      <option value='4'>four</option>
                      <option value='5 and more'>five and more</option>
                    </Field>
                  </div>
                  <div>
                    <label>Room</label>
                    <Field name='room' type='number'></Field>
                  </div>
                  <div>
                    <label>Smoking room</label>
                    <Field type='radio' name='smoke' value='smoking'/> 
                  </div>
                  <div>
                    <label>Non-moking room</label>
                    <Field type='radio' name='smoke' value='non-smoking'/> 
                  </div>
                  <div>
                    <label>I guarantee prepayment</label>
                    <Field type="checkbox" name="prepayment" />
                  </div>
                  <button type="submit">Submit</button>
                </Form>
            </Formik>
          );
      }
    }

