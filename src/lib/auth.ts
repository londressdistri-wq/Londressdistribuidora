import { cookies } from 'next/headers';

const envUser = process.env.ADMIN_USERNAME;
const envPass = process.env.ADMIN_PASSWORD;

export const ADMIN_USERNAME = (envUser && envUser !== 'distribuidoralondres') ? envUser : 'Chumbitaa2026';
export const ADMIN_PASSWORD = (envPass && envPass !== 'londres1234') ? envPass : 'Londress1234_';
export const AUTH_COOKIE_NAME = 'londres_admin_session';
export const AUTH_TOKEN_VALUE = 'londres_auth_token_active_session';

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);
  return session?.value === AUTH_TOKEN_VALUE;
}

