import { useState } from 'react'
import './App.css'
import {VirtualizedList} from "./components/VirtualizedList";

function App() {
  const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

  return (
    <VirtualizedList items={items} itemHeight={50} windowHeight={400} />
  )
}

export default App
