'use client'

import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'Bonjour ! Je suis Oscar, votre assistant IA. Comment puis-je vous aider aujourd\'hui ?' }
  ])

  const handleSend = async () => {
    if (!message.trim()) return
    
    setChatHistory(prev => [...prev, { role: 'user', content: message }])
    setMessage('')
    
    // Simulation de réponse (à connecter au backend plus tard)
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: 'Je suis en cours de configuration. Contactez Gilles pour plus d\'informations.' 
      }])
    }, 1000)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src="/oscar-avatar.jpg" 
            alt="Oscar"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Oscar</h1>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Assistant IA • Coach Digital Paris</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ 
            padding: '8px 16px', 
            background: 'rgba(76, 175, 80, 0.2)', 
            borderRadius: '20px',
            fontSize: '14px',
            border: '1px solid rgba(76, 175, 80, 0.5)'
          }}>
            🟢 En ligne
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        padding: '20px'
      }}>
        {/* Chat Area */}
        <div style={{ 
          flex: 1, 
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          paddingBottom: '20px'
        }}>
          {chatHistory.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}>
              <div style={{
                maxWidth: '70%',
                padding: '15px 20px',
                borderRadius: msg.role === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                background: msg.role === 'user' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div style={{
          display: 'flex',
          gap: '10px',
          padding: '20px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '25px',
          backdropFilter: 'blur(10px)'
        }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Écrivez votre message..."
            style={{
              flex: 1,
              padding: '15px 20px',
              borderRadius: '20px',
              border: 'none',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: '15px 30px',
              borderRadius: '20px',
              border: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Envoyer
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '15px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontSize: '12px',
        opacity: 0.6
      }}>
        Oscar Platform © 2026 Coach Digital Paris • 
        <a href="https://coachdigitalparis.com" style={{ color: '#667eea', marginLeft: '5px' }}>
          coachdigitalparis.com
        </a>
      </footer>
    </div>
  )
}
