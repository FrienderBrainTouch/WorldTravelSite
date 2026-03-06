/**
 * 앱 전역에서 사용하는 “간단한 로그인 상태” 컨텍스트.
 *
 * - 비밀번호는 클라이언트에 하드코딩된 값(`MOCK_PASSWORD`)과 비교합니다.
 * - 상태는 메모리에만 존재하며 새로고침 시 초기화됩니다(영속 저장 없음).
 * - 목적: 학습/시연 환경에서 페이지 접근을 가볍게 제한하기 위함.
 */
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { MOCK_PASSWORD } from '../config';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback((password: string) => {
    if (password === MOCK_PASSWORD) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
