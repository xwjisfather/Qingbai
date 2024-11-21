// src/lib/auth.ts
import { getSession } from 'next-auth/react';
import { NextApiRequest } from 'next';
import { prisma } from './prisma';

export async function validateSession(req: NextApiRequest) {
  const session = await getSession({ req });
  if (!session?.user?.email) return null;
  
  // 通过邮箱获取用户ID
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true }
  });

  if (!user) return null;

  return {
    ...session,
    userId: user.id // 添加 userId 到 session
  };
}

// 添加类型声明
declare module 'next-auth' {
  interface Session {
    userId?: string;
    user?: {
      email?: string | null;
      name?: string | null;
    };
  }
}