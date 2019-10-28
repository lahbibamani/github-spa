import { Repository } from "./repository.model";

export interface User {
    id?: number;
    name?: string;
    login?: string;
    email?: string;
    avatar_url?: string;
    // repos?: Array<Repository>;
}