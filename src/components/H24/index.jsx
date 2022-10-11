/* eslint-disable jsx-a11y/accessible-emoji */
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const ReduxForm = () => (
    <Styles>
        <h1>Employee Form</h1>
        <Form
            onSubmit={onSubmit}
            initialValues={{ Preferred: 'Front End', employed: false }}
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
                            <option value="HighSchool">HighSchool</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                        </Field>
                    </div>
                    <div>
                        <label>Expertise</label>
                        <div>
                            <label>
                                <Field
                                    name="Expertise"
                                    component="input"
                                    type="checkbox"
                                    value="HTML"
                                />{' '}
                                HTML
                            </label>
                            <label>
                                <Field
                                    name="Expertise"
                                    component="input"
                                    type="checkbox"
                                    value="CSS"
                                />{' '}
                                CSS
                            </label>
                            <label>
                                <Field
                                    name="Expertise"
                                    component="input"
                                    type="checkbox"
                                    value="Javascript"
                                />{' '}
                                Javascript
                            </label>
                            <label>
                                <Field
                                    name="Expertise"
                                    component="input"
                                    type="checkbox"
                                    value="Node.Js"
                                />{' '}
                                Node.Js
                            </label>
                            <label>
                                <Field
                                    name="Expertise"
                                    component="input"
                                    type="checkbox"
                                    value="React.Js"
                                />{' '}
                                React.Js
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Preferred Tecnology</label>
                        <div>
                            <label>
                                <Field
                                    name="Preferred"
                                    component="input"
                                    type="radio"
                                    value="Front End"
                                />{' '}
                                Front End
                            </label>
                            <label>
                                <Field
                                    name="Preferred"
                                    component="input"
                                    type="radio"
                                    value="Back End"
                                />{' '}
                                Back End
                            </label>
                            <label>
                                <Field
                                    name="Preferred"
                                    component="input"
                                    type="radio"
                                    value="Full Stack "
                                />{' '}
                                Full Stack
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
)

export default ReduxForm
