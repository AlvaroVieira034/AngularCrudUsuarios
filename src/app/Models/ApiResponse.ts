export interface ApiResponse<T> {
    dados : T;
    mensagem : string;
    status: boolean
}