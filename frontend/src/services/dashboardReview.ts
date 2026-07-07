import api from "./api";

export interface DashboardReview {
    healthScore: number;
    codeQuality: number;
    security: number;
    performance: number;
    architecture: number;
    summary: string;
    recommendations: string[];
}

export async function getDashboardReview(
    owner: string,
    repo: string,
    branch: string
) {
    const response = await api.post(
        "/api/ai/dashboard-review",
        {
            owner,
            repo,
            branch,
        }
    );

    return response.data;
}