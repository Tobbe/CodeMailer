import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import UserForm from 'src/components/User/UserForm'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Code sent')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, onSuccess, onError) => {
    createUser({ variables: { input } }).then(({ data, errors }) => {
      if (errors || !data) {
        onError?.(errors)
      } else {
        onSuccess?.(data)
      }
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Please input your details below
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default HomePage
