function App() {
  return (
    <div>
      <h1>Testing Tailwind</h1>
      <div className="w-64 h-64 bg-red-500">
        RED BOX - If you see this text but no red background, Tailwind isn't working
      </div>
      <div style={{width: '200px', height: '200px', backgroundColor: 'blue'}}>
        BLUE BOX - This uses inline styles and should always work
      </div>
    </div>
  )
}

export default App