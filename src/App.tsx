import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
import { Index } from './index/Index'
import { Home } from './components/Home/Home'
import { YoutubeIndex } from './components/Youtube.txs/YoutubeIndex'
import { Editing } from './components/Editing/editing'
import { SocialBranding } from './components/Social/Social'
import { CopyWrite } from './components/Copywrite/copywrite'
import { Tech } from './components/Tech/tech'
import { Contact } from './components/Contact/contact.'



function App() {

  
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index/>} >
      <Route index element={<Home/>}/>
      <Route path='youtube' element={<YoutubeIndex/>} />
      <Route path='editing' element={<Editing/>} />
      <Route path='social-branding' element={<SocialBranding/>} />
      <Route path='copy-writing' element={<CopyWrite/>} />
      <Route path='tech' element={<Tech/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )

)


  return (
  
    <div className='main-wrapper'>
      <RouterProvider router={router}/> 
    </div>
   
  )
}

export default App
