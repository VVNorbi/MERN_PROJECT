import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Stack, Typography, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../component/LoadingBox';
import { editJobAction, jobLoadSingleAction } from '../../redux/actions/jobAction';
import Footer from '../../component/Footer';

const EditableJobDetails = ({ job, onEdit }) => {
  const [editedJob, setEditedJob] = useState({ ...job });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleEdit = () => {
    onEdit(editedJob);
  };

  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
          Edit job
      </Typography>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={editedJob.title}
        onChange={handleInputChange}
      />
      <TextField
          fullWidth
          label="Description"
          name="description"
          value={editedJob.description}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Salary"
          name="salary"
          value={editedJob.salary}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={editedJob.location}
          onChange={handleInputChange}
        />
      {/* Dodaj pozostałe pola formularza edycji */}
      <Button variant="contained" onClick={handleEdit}>
        Save Changes
      </Button>
    </Box>
  );
};

const DashEditJob = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [dispatch, id]);

  const handleEditJob = (editedJob) => {
    dispatch(editJobAction(id, editedJob));
  };

  return (
    <>
      <Box>
        <Box sx={{ height: 'calc(100vh - 140px)', marginTop: '120px' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ flex: 4, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : (
                <Card>
                  <CardContent>
                    <EditableJobDetails job={singleJob} onEdit={handleEditJob} />
                  </CardContent>
                </Card>
              )}
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              {/* Pozostała część Twojego komponentu */}
            </Box>
          </Stack>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default DashEditJob;