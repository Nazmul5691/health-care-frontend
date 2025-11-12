import { getCookie } from "@/services/auth/tokenHandlers";


const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";


const serverFetchHelper = async (endPoint: string, options: RequestInit): Promise<Response> => {

    const { headers, ...restOptions } = options;

    const accessToken = await getCookie("accessToken");

    const response = await fetch(`${BACKEND_API_URL}${endPoint}`, {
        headers: {
            ...headers,
            // ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {}),
            // ...(accessToken ? { "Authorization": accessToken } : {})
            Cookie: accessToken ? `accessToken=${accessToken}` : "",
        },
        ...restOptions
    })

    return response;

}


export const serverFetch = {
    get: async (endPoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endPoint, { ...options, method: 'GET' }),

    post: async (endPoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endPoint, { ...options, method: 'POST' }),

    put: async (endPoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endPoint, { ...options, method: 'PUT' }),

    delete: async (endPoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endPoint, { ...options, method: 'DELETE' }),

    patch: async (endPoint: string, options: RequestInit = {}): Promise<Response> => serverFetchHelper(endPoint, { ...options, method: 'PATCH' }),
}