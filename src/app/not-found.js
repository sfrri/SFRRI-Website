import Link from 'next/link'
import Paper from '@mui/material/Paper'

export default function NotFound() {
    return (
        <Paper variant="padded" elevation={3}>
            <div>
                <h2>Not Found</h2>
                <p>404 - Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </Paper>
    )
}