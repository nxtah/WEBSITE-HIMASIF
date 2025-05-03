import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert, ListGroup } from 'react-bootstrap'
import './App.css'
import { userService } from './services/api'
import BootstrapDemo from './components/BootstrapDemo'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showDemo, setShowDemo] = useState(true)

  useEffect(() => {
    // Function to fetch users from the Laravel backend
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await userService.getUsers()
        setUsers(response.data)
        console.log('Users from Laravel API:', response.data)
      } catch (err) {
        setError('Failed to fetch users')
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    }

    // Call the function
    fetchUsers()
  }, []) // Empty dependency array means this effect runs once on mount

  // Toggle between demo and API data
  const toggleView = () => {
    setShowDemo(!showDemo)
  }

  return (
    <Container fluid className="p-0">
      {showDemo ? (
        // Show Bootstrap Demo
        <>
          <BootstrapDemo />
          <Container className="text-center my-4">
            <button
              className="btn btn-secondary"
              onClick={toggleView}
            >
              Show API Data
            </button>
          </Container>
        </>
      ) : (
        // Show API Data with Bootstrap styling
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Laravel API Integration</h1>

              <Alert variant="info">
                This page demonstrates fetching data from a Laravel backend API
              </Alert>

              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h2 className="h5 mb-0">Users from Laravel API</h2>
                </div>
                <div className="card-body">
                  {loading && (
                    <div className="text-center p-4">
                      <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                      <p className="mt-2">Loading users...</p>
                    </div>
                  )}

                  {error && (
                    <Alert variant="danger">
                      {error}
                    </Alert>
                  )}

                  {!loading && !error && users.length === 0 && (
                    <Alert variant="warning">
                      No users found. Make sure your Laravel API is running.
                    </Alert>
                  )}

                  {users.length > 0 && (
                    <ListGroup>
                      {users.map(user => (
                        <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
                          <div>
                            <strong>{user.name}</strong>
                            <div className="text-muted small">{user.email}</div>
                          </div>
                          <span className="badge bg-primary rounded-pill">ID: {user.id}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  onClick={toggleView}
                >
                  Show Bootstrap Demo
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default App
