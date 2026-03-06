/**
 * 앱 엔트리포인트.
 *
 * - 라우팅은 `BrowserRouter`에서 처리합니다.
 * - 인증 상태는 `AuthProvider`(메모리 기반, 데모용)로 제공합니다.
 * - 전역 스타일/디자인 토큰은 `index.css`에 정의합니다.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
