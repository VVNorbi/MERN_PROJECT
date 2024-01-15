import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Box, Container, Pagination, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction'
import { useParams } from 'react-router-dom'
import CardElement from '../component/CardElement'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'
import SearchInputEl from '../component/SearchInputEl'



const Home = () => {
    const { jobs, pages, loading } = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const { keyword, location } = useParams();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, location));
    }, [page, keyword, location]);

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

   

    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

                <Navbar />
                <SearchInputEl/>
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        
                        <Box sx={{ flex: 5, p: 2 }}>
                            {
                                loading ?
                                    <LoadingBox /> :
                                    jobs && jobs.length === 0 ?
                                        <>
                                            <Box
                                                sx={{
                                                    minHeight: '350px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>

                                                <h2>No result found!</h2>
                                            </Box>
                                        </> :


                                        jobs && jobs.map((job, i) => (
                                            <CardElement
                                                key={i}
                                                id={job._id}
                                                jobTitle={job.title}
                                                description={job.description}
                                                category={job.jobType ? job.jobType.jobTypeName : "No category"}
                                                location={job.location}
                                            />
                                        ))
                            }
                            <Stack spacing={2} >
                                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Footer />

        </>
    )
}

export default Home