
import { analyzeProblem } from '../services/learning.service.js';

export function analyzeLearning(req, res) {
    const { problem, topic = 'auto' } = req.body ?? {};

    if (
    typeof problem !== 'string' ||
    problem.trim().length < 10 ||
    problem.length > 600
    ) {
    return res.status(400).json({
        success: false,
        message: 'Problem must contain 10 to 600 characters.',
    });
    }

    if (!['auto', 'javascript', 'react'].includes(topic)) {
    return res.status(400).json({
        success: false,
        message: 'Invalid learning topic.',
    });
    }

    const key = analyzeProblem(problem.trim(), topic);

    if (!key) {
    return res.status(422).json({
        success: false,
        message: 'Please choose JavaScript or React.',
    });
    }

    return res.status(200).json({
    success: true,
    data: {
        key,
    },
    });
}
