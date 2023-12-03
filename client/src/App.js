
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { SnackbarProvider } from 'notistack'
import Layout from './components/Layout';
import UserListPage from './page/UsersPage';
import TeamsPage from './page/TeamsPage';
import Team from './page/Team/[id]';



function App() {
  return (
    <BrowserRouter>
    <Layout>
      <SnackbarProvider>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/team/:id" element={<Team />} />
      </Routes>
      </SnackbarProvider>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
