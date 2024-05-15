'use client';
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { News } from "./News";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";

const NewsConditional = ({ children }) => {
    const pathname = usePathname();

    return (
        <Container maxWidth="lg" sx={{ position: 'relative', marginTop: '10px', }}>
            {pathname === '/' ?
                <>{children}</>
                :
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8.5} lg={9}>
                        <main>
                            <Paper variant="padded" elevation={3}>
                                <Suspense fallback={<Skeleton />}>
                                    {children}
                                </Suspense>
                            </Paper>
                        </main>
                    </Grid>
                    <Grid item xs={12} md={3.5} lg={3}>
                        <Paper variant="padded" elevation={3}>
                            <Suspense fallback={<Skeleton />}>
                                <Typography variant="h2">News</Typography>
                                <News />
                            </Suspense>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </Container >
    )
}

export default NewsConditional