import { useState, useEffect } from 'react'
import axios from 'axios'
import { Server, Globe, RefreshCw, CheckCircle2 } from 'lucide-react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('http://localhost:8000/api/hello/')
      setMessage(response.data.message)
    } catch (err) {
      console.error(err)
      setError('Failed to connect to the backend. Please ensure the Django server is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <Server className="icon-main" size={48} />
        <h1>DevOps Assessment</h1>
        <p className="subtitle">Full-stack Hello World Application</p>
      </header>

      <main className="main-card">
        <div className="status-badge">
          {loading ? (
            <span className="badge loading">
              <RefreshCw className="spin" size={16} /> Connecting...
            </span>
          ) : error ? (
            <span className="badge error">Connection Failed</span>
          ) : (
            <span className="badge success">
              <CheckCircle2 size={16} /> Backend Online
            </span>
          )}
        </div>

        <div className="content">
          <Globe className="icon-globe" size={64} />
          {loading ? (
            <div className="skeleton-loader">
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <h2 className="message-text">{message}</h2>
          )}
        </div>

        <button onClick={fetchData} disabled={loading} className="refresh-button">
          {loading ? 'Fetching...' : 'Refresh Data'}
        </button>
      </main>

      <footer className="footer">
        <p>Built with Django & React (Vite)</p>
      </footer>
    </div>
  )
}

export default App
