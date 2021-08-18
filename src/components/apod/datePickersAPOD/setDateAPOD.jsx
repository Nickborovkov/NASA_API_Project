import React from "react";
import s from '../../../helpers/formHelpers/formsStyles.module.css'
import m from '../../../helpers/formHelpers/formsStylesMedia.module.css'
import cn from 'classnames'
import {Formik} from "formik";
import * as yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentDate} from "../../../reducers/apod";
import {formButtonHelper, formInputHelper} from "../../../helpers/formHelpers/formHelpers";
import {dateToday} from "../../../helpers/dateHelper/dateToday";
import {setNewError} from "../../../reducers/errors";

const SetDateAPOD = () => {

    const dispatch = useDispatch()
    const error = useSelector(state => state.errors.error)

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
                onSubmit={ (values) => {
                    dispatch(setCurrentDate(values.currentDate))
                    dispatch(setNewError(null))
                } }
                validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty})=>(
                    <form className={cn(s.form, m.form)}>
                        <h3 className={s.title}>Set exact date</h3>
                        <div className={s.inputsHolder}>
                            {formInputHelper(s.formSubtitle, `Date`, touched.currentDate,
                                errors.currentDate, s.input, `date`, `currentDate`, `1995-01-07`, dateToday, handleChange,
                                handleBlur, values.currentDate)}
                        </div>
                        {formButtonHelper(s.formButton, isValid, dirty, handleSubmit, `Show`)}
                        {error && <h3 className={s.errorCase}>Not available, please change date</h3>}
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default SetDateAPOD