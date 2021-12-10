import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="fullName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full name
        </Label>
        <TextField
          name="fullName"
          defaultValue={props.user?.fullName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fullName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="heardAbout"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          How did you hear about CodeMailer?
        </Label>
        <TextAreaField
          name="heardAbout"
          defaultValue={props.user?.heardAbout}
          className="rw-text-area"
          errorClassName="rw-text-area rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="heardAbout" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {props.loading ? 'Sending...' : 'Send me a code'}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
