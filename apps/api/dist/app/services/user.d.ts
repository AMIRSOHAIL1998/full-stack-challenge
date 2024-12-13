export declare const readUsersAnalyticsData: () => Promise<{
    total: any;
    admin: any;
    user: number;
}>;
export declare const readAllUsers: (req: any, res: any) => Promise<any>;
export declare const readUserById: (id: string) => Promise<any>;
export declare const updateUserData: (id: string, updatedData: {
    name: string;
    email: string;
    type: string;
}) => Promise<any>;
export declare const deleteUserData: (id: string) => Promise<any>;
