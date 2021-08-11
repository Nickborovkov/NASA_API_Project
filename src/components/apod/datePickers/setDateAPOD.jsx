import React from "react";
import s from '../../../helpers/formHelpers/formsStyles.module.css'
import {Formik} from "formik";
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {setCurrentDate} from "../../../reducers/apod";
import {formButtonHelper, formInputHelper} from "../../../helpers/formHelpers/formHelpers";
import {dateToday} from "../../../helpers/dateToday";

const SetDateAPOD = () => {

    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        currentDate: yup
            .string()
            .required(`Date required`)
    })

    return (
        <div>
            <Formik
                initialValues={{
                    currentDate: ``
                }}
                validateOnBlur
                onSubmit={ (values, {resetForm}) => {
                    dispatch(setCurrentDate(values.currentDate))
                    resetForm({values: ``})
                } }
                validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty})=>(
                    <form className={s.form}>
                        <h3 className={s.title}>Set exact date</h3>
                        <div className={s.inputsHolder}>
                            {formInputHelper(s.formSubtitle, `Date`, touched.currentDate,
                                errors.currentDate, s.input, `date`, `currentDate`, dateToday, handleChange,
                                handleBlur, values.currentDate)}
                        </div>
                        {formButtonHelper(s.formButton, isValid, dirty, handleSubmit, `Show`)}

                    </form>
                )}
            </Formik>
        </div>
    )
}

export default SetDateAPOD