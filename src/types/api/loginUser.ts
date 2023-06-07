import { User } from "./user";

// 新しいログインユーザーの型定義
// isAdminを追加
export type LoginUser = User & { isAdmin: boolean };
