import * as React from 'react';
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default function BasicPage({ title, dataArray }) {
    return (
        <React.Fragment>
            <Typography variant="h2" style={{ marginBottom: '1em', }}>{title}</Typography>
            {dataArray && <MarkdownComponent>{dataArray}</MarkdownComponent>}
        </React.Fragment>
    );
}