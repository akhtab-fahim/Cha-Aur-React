# React Router Dom 

### Link

Its like anchor tag 
```js
<Link
                            to="#"
                            className="text-gray-800">
                            Log in
                        </Link>
```

"to" is like href 
### NavLink

```isActive``` is like boolean which is linked to that url/target 

```className``` is written in side a call back which has a parameter ```isActive```
```js
<NavLink to="/" className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                        ${isActive?"text-orange-500":"text-gray-700"} `}
                                >
                                    Home
                                </NavLink>
```

# Router
```js
<RouterProvider router={router}/>

``` 


# we have to make a router method 
also we can write childern url inside a ```<Route>``` Element 

inside ```loader``` we can write methods to imporve performance / optimize  
```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='github' loader={githubInfoLoader} element={<Github/>}/>
    </Route>
  )
)
```

## Alternative way of writing router method 

```js
const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {path : "",
        element: <Home/>
      },
      {path : "about",
        element: <About/>
      },
      {path : "contact",
        element: <Contact/>
      },
      {path : "user/:userid",
        element: <User/>
      },
      {path : "github",
        element: <Github/>
      },
    ]}
])

```

## WE have to make a Layout.jsx for The Outlet 
here outlet is the dynamic part header and footer would be still and the outlet section will be changed we have to imoport from react router dom package 

```js
import { Outlet } from 'react-router-dom'
```

```js
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

```

## useLoaderData

```useLoaderData``` -> to use data from ```loader```