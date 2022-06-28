import React from 'react';

import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Login from './components/Login';


const Layout = () => {
  console.log("<Layout />")
  return (
    <main className="App">
      <h1>navbar</h1>
        <Outlet />
      <h1>footer</h1>
    </main>
)
}

const Home = () => { console.log('<Home />'); return <h1>Home</h1>}
const Missing = () => { return <h1>Missing</h1>}
const Admin = () => { console.log('<Admin />'); return <h1>Admin</h1>}
const Landing = () => { console.log('<Landing />'); return <h1>Landing</h1>}

function App() {
  console.log("<App />")

  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Landing />} />

        <Route path="login" element={<Login />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth  />}>
          <Route path="home" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[1984]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>

  );
}

export default App;
