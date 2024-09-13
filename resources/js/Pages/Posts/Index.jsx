import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ posts}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Posts</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {posts.data.map((post) => {
                            return (
                                <div key={post.id}>
                                    <div className="p-6 bg-white border-gray-200">
                                        <p><strong>{post.user.name}</strong></p>
                                    </div>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="p-6 text-gray-900">Posts Index!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
