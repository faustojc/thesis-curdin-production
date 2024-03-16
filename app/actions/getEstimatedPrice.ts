import { Feature, ModelType } from "../types";

export default async function getEstimatedPrice(model: ModelType, features: Feature | Feature[]) {
    try {
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: model, features: features }),
        };

        const estimated = fetch('/api/estimate', options)
            .then((response) => response.json())
            .then((data) => data.estimated)
            .catch((error) => console.log(error));

        return estimated;
    }
    catch (error: any) {
        throw new Error(error);
    }
}
