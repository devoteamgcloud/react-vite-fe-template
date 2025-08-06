import { axiosClient } from "."


const createArneAIEndpoints = (getAuthHeaders: () => Promise<{ Authorization: string }>) => ({
    chatbot: {
        postChatMessage: async (data: { message: string }) => {
            try {
                const authHeader = await getAuthHeaders()
                
                return axiosClient.post('https://example/endpoint', data, {
                    headers: authHeader
                })
            } catch (error) {
                console.error('Failed to send chat message:', error)
                throw error
            }
        },
    },
    history: {
        deleteAllHistory: async (id: string) => {
            try {
                const authHeader = await getAuthHeaders()
                
                return axiosClient.delete('/example', {
                    data: { id },
                    headers: authHeader
                })
            } catch (error) {
                console.error('Failed to delete chat history:', error)
                throw error
            }
        },
    },
})

export { createArneAIEndpoints }