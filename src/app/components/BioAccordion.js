import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MarkdownComponent } from '@/utils';

export default function AccordionUsage({bio}) {
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            padding:{xs: 0, lg: '0 1em'},
            color: '#4282dd !important',
            fontWeight: 500,
          }}
        >
          Read Bio
        </AccordionSummary>
        <AccordionDetails>
            {bio && <MarkdownComponent>{bio}</MarkdownComponent>}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}