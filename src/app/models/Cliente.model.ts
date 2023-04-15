import { Users } from "./Users.model";

export class Cliente{
    page?: number;
    per_page: number | undefined;
    total: number | undefined;
    data : Users[]| string | undefined;
}
