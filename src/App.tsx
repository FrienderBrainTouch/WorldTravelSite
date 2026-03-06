/**
 * 라우팅 구성.
 *
 * - `/login`에서 인증(데모용)을 수행합니다.
 * - `/countries/*` 이하 화면은 로그인 상태에서만 접근할 수 있습니다.
 */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import CountryList from './pages/CountryList';
import CountryActivityList from './pages/CountryActivityList';
import ActivityPlay from './pages/ActivityPlay';

/** 로그인 상태가 아니면 `/login`으로 리다이렉트하는 보호 라우트. */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/countries"
        element={
          <ProtectedRoute>
            <CountryList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/countries/:countryId"
        element={
          <ProtectedRoute>
            <CountryActivityList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/countries/:countryId/activity/:activityType"
        element={
          <ProtectedRoute>
            <ActivityPlay />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
