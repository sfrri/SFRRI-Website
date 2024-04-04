'use client';
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { News } from "./News";
import Paper from "@mui/material/Paper";

const NewsConditional = ({children}) => {
    const pathname = usePathname();
    
    console.log(pathname)
    return (
        <Container maxWidth="lg" sx={{ position: 'relative', marginTop: '10px', }}>
            {pathname === '/' ?
                <>{children}</>
                :
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        {children}
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper variant="padded" elevation={3}>
                            <News />
                        </Paper>
                    </Grid>
                </Grid>
            }
        </Container>
    )
}

export default NewsConditional