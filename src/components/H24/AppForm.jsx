/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';
import axios from './axios';

const ReduxForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState([]);

    // membuat f New yang terdapat dispatch dengan berisi type input, dan data sesuai data di isi
    const New = async (data) => {
        dispatch({ type: 'INPUT', payload: data });
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async (values) => {
        await sleep(300)
        // mengambil f New 
        New(values)
        window.alert(JSON.stringify(values, 0, 2))
        // menambil f addFrom dengan values
        addForms(values);
    }

    // membuat f add, untuk menyimpan ke json
    const addForms = async (values) => {
        console.log(values)
        // post ke json dengan axios
        let response = await axios.post('', values);
        setForm((form) => [response.data, ...form]);
    };

    return (
        <div>

            <Styles>
                <h1>React Final Form - Simple Example</h1>
                <a
                    href="https://final-form.org/react"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read Docs
                </a>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label>Employed</label>
                                <Field name="employed" component="input" type="checkbox" />
                            </div>
                            <div>
                                <label>Education</label>
                                <Field name="Education" component="select">
                                    <option />
                                    <option value="High School">High School</option>
                                    <option value="Barchelor">Barchelor</option>
                                    <option value="Master">Master</option>
                                </Field>
                            </div>
                            <div>
                                <label>Expretise</label>
                                <div>
                                    <label>
                                        <Field
                                            name="expretise"
                                            component="input"
                                            type="checkbox"
                                            value="HTML"
                                        />{' '}
                                        HTML
                                    </label>
                                    <label>
                                        <Field
                                            name="expretise"
                                            component="input"
                                            type="checkbox"
                                            value="CSS"
                                        />{' '}
                                        CSS
                                    </label>
                                    <label>
                                        <Field
                                            name="expretise"
                                            component="input"
                                            type="checkbox"
                                            value="JavaScript"
                                        />{' '}
                                        JavaScript
                                    </label>
                                    <label>
                                        <Field
                                            name="expretise"
                                            component="input"
                                            type="checkbox"
                                            value="NodeJS"
                                        />{' '}
                                        NodeJS
                                    </label>
                                    <label>
                                        <Field
                                            name="expretise"
                                            component="input"
                                            type="checkbox"
                                            value="ReactJS"
                                        />{' '}
                                        ReactJS
                                    </label>

                                </div>
                            </div>
                            <div>
                                <label>Prefered Technology</label>
                                <div>
                                    <label>
                                        <Field
                                            name="Prefered"
                                            component="input"
                                            type="checkbox"
                                            value="Frontend"
                                        />{' '}
                                        Frontend
                                    </label>
                                    <label>
                                        <Field
                                            name="Prefered"
                                            component="input"
                                            type="checkbox"
                                            value="Backend"
                                        />{' '}
                                        Backend
                                    </label>
                                    <label>
                                        <Field
                                            name="Prefered"
                                            component="input"
                                            type="checkbox"
                                            value="Fullstack"
                                        />{' '}
                                        Fullstack
                                    </label>

                                </div>
                            </div>

                            <div>
                                <label>Notes</label>
                                <Field name="notes" component="textarea" placeholder="Notes" />
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )}
                />
            </Styles>

        </div>
    )
}


export default ReduxForm