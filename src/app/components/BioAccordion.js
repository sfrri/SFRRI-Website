'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MarkdownComponent } from '@/utils';

export default function AccordionUsage({bio}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion elevation={0} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            padding:{xs: 0, lg: '0 1em'},
            color: '#1976d2 !important',
            fontWeight: 500,
          }}
        >
          {!expanded ? 'Read Bio' : 'Close Bio'}
        </AccordionSummary>
        <AccordionDetails>
            {bio && <MarkdownComponent>{bio}</MarkdownComponent>}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}