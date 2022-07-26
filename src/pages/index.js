import Login from '../components/Login';
import UserDashboard from '../components/UserDashboard';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  );
}
