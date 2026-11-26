
const supportedTopics = ['javascript', 'react'];

export function analyzeProblem(problem, topic) {
    if (supportedTopics.includes(topic)) {
    return topic;
    }

    if (/react|component|usestate|jsx/i.test(problem)) {
    return 'react';
    }

    if (/javascript|fetch|\bjs\b|\bapi\b|async/i.test(problem)) {
    return 'javascript';
    }

    return null;
}
