import { useState } from "react";
import toast from "react-hot-toast";

import {
    getDashboardReview,
    type DashboardReview,
} from "../services/dashboardReview";

export function useDashboardReview() {
    const [loading, setLoading] =
        useState(false);

    const [dashboard, setDashboard] =
        useState<DashboardReview | null>(null);

    async function generateDashboard(
        owner: string,
        repo: string,
        branch: string
    ) {
        try {
            setLoading(true);

            const data =
                await getDashboardReview(
                    owner,
                    repo,
                    branch
                );

            setDashboard(data.review);

            toast.success(
                "Dashboard generated successfully."
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Failed to generate dashboard."
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        dashboard,
        generateDashboard,
    };
}