import * as React from 'react';
import Grid from '@mui/material/Grid';
import BioAccordion from './BioAccordion';
import { kebabize } from '@/utils';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import ImageLoading from './ImageLoading';
import Typography from '@mui/material/Typography';

const SFRRIExecutiveItem = ({ title, name, bio, address, contact_details, }) => {

    const src = `/static/images/SFRRIExecutive/${kebabize(name)}.jpg`

    return (
        <Grid container spacing={0} sx={{ marginTop: '2em', }}>
            <Grid item xs={12} lg={2} sx={{ marginTop: '2em', }}>
                {name && <ImageLoading imgSrc={src} name={name} />}
            </Grid>
            <Grid item xs={12} lg={10} sx={{ padding: { lg: '0 1em' }, }}>
                <Grid container spacing={0}>
                    {title &&
                        <Grid item xs={12} sx={{ padding: { lg: '0 1em' }, }}>
                            <Typography variant="h4">{title}</Typography>
                        </Grid>
                    }
                    {name &&
                        <Grid item xs={12} sx={{ padding: { lg: '0 1em' }, }}>
                            <p className='bold'>{name}</p>
                        </Grid>
                    }
                    <BioAccordion bio={bio} />
                    {address &&
                        <Grid item xs={12} lg={6} className='pNoMarginBottom' sx={{ padding: { lg: '0 1em' }, }}>
                            <Markdown>{address}</Markdown>
                        </Grid>
                    }
                    <Grid item xs={12} lg={6} className='pNoMarginBottom' sx={{ padding: { lg: '0 1em' }, }}>
                        {contact_details &&
                            <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}>
                                {contact_details}
                            </Markdown>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <hr />
        </Grid>
    )
}

export default SFRRIExecutiveItem
