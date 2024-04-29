import dynamic from 'next/dynamic';

const ClientSideOnlyMap = dynamic(
    () => import('./Map'),
    { ssr: false }
)

export default ClientSideOnlyMap