import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({bio}) {
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            paddingLeft: '18px',
            color: '#4282dd !important',
            fontWeight: 500,
          }}
        >
          Read Bio
        </AccordionSummary>
        {bio &&<AccordionDetails dangerouslySetInnerHTML={{ __html: bio }} />}
          {/* {bio && bio}
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}