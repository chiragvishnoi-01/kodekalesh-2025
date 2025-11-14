import { useState, useEffect } from 'react';
import axios from 'axios';

interface SystemStatus {
    mongodb: {
        connected: boolean;
        collections: string[];
        status: string;
    };
    gemini: {
        connected: boolean;
        status: string;
    };
}

export const SystemCheck = () => {
    const [status, setStatus] = useState<SystemStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkSystem = async () => {
            try {
                setLoading(true);
                const apiUrl = import.meta.env.VITE_API_URL;
                if (!apiUrl) {
                    throw new Error('API URL not configured');
                }
                const response = await axios.get(`${apiUrl}/test/system-check`);
                setStatus(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        checkSystem();
    }, []);

    if (loading) return <div>Checking system status...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>System Status</h2>
            {status && (
                <div>
                    <h3>MongoDB Status</h3>
                    <p>Connection: {status.mongodb.status}</p>
                    <p>Available Collections:</p>
                    <ul>
                        {status.mongodb.collections.map((collection: string) => (
                            <li key={collection}>{collection}</li>
                        ))}
                    </ul>

                    <h3>Gemini API Status</h3>
                    <p>Status: {status.gemini.status}</p>
                </div>
            )}
        </div>
    );
};