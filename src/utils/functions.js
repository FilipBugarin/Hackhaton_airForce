export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function formatDate(param) {
    const date = new Date(param)
    const longOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const shortOptions = { month: 'long', day: 'numeric' };
    const hourOptions = {hour: '2-digit', minute:'2-digit'};

    return {
        date: date.toLocaleDateString("en-US", longOptions),
        shortDate: date.toLocaleDateString("en-US", shortOptions),
        time: date.toLocaleTimeString([], hourOptions)
    }
}