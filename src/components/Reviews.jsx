import { useState, useEffect } from 'react';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Варіант 1: posts/1/comments
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Помилка завантаження відгуків:', err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 my-6 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Відгуки роботодавців</h2>

            {loading ? (
                <p className="text-gray-500 text-sm">Завантаження відгуків...</p>
            ) : (
                <div className="space-y-3">
                    {reviews.map((item) => (
                        <article
                            key={item.id}
                            className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded border-l-4 border-blue-600 dark:border-blue-500"
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{item.name}</h3>
                            <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">{item.email}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{item.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;