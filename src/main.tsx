import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './QueryClient'

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    document.getElementById('root')
)
