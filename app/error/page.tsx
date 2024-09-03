import Link from 'next/link';

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-gray-700 mb-6">Something went wrong. Please try again.</p>
                <Link href="/">
                    <a className="text-white bg-teal-600 hover:bg-teal-700 font-bold py-2 px-4 rounded-md">
                        Go Back Home
                    </a>
                </Link>
            </div>
        </div>
    );
}
