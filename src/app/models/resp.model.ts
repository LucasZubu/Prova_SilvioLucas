import { User } from "./user.model";

export class Resp{
    page: number | undefined;
    per_page: number | undefined;
    total: number | undefined;
    data!: User[];
}
