import Todoheading from './Todo-heading'
import Addtodo from './Addtodo'
import Todoitem1 from './Todoitem1'
import Todoitem2 from './Toditem2'
import './index.css'
function App() {
 return ( 
 <div className='Todo-container'>
   <Todoheading></Todoheading>
   <Addtodo></Addtodo> 
   <div className='Items-container'> 
  <Todoitem1></Todoitem1>
  <Todoitem2></Todoitem2>
   </div>
  </div>
 )
}

export default App;
