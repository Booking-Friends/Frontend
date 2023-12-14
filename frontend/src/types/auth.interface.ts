export type RoleType = "Friend" | "Customer"
export interface RegisterInput {
    name: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: RoleType
    birthDate: Date;
}

export interface LoginInput {
    email: string;
    password: string;
}