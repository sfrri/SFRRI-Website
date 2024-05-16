import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>404 - Could not find requested resource</p>
            <Link href="/" prefetch={false}>Return Home</Link>
        </div>
    )
}