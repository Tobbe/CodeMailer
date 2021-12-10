import { Toaster } from '@redwoodjs/web/toast'

const UsersLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">CodeMailer</h1>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UsersLayout
