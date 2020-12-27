import React from 'react';

import theme from '@lib/theme';
import {
    Button, Card, CardActions, CardContent, CardHeader, createStyles, makeStyles, TextField
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '10px',
    },
  })
);

const ContactForm: React.FC = () => {
  const classes = useStyles();

  type FormDataType = {
    name: {
      error: boolean;
      value: string;
    };
    email: {
      error: boolean;
      value: string;
    };
    message: {
      error: boolean;
      value: string;
    };
  };

  const [formData, setFormData] = React.useState({} as FormDataType);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: {
        error: false,
        value: event.target.value,
      },
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {};

  return (
    <Card className={classes.root}>
      <CardHeader title="Contact" />
      <CardContent>
        <form onSubmit={handleSubmit} action="https://formsubmit.io/send/9f7db489-7c19-4d3b-86f5-96d7d7b41b77">
          <TextField
            name="name"
            error={formData.name?.error}
            label="Name"
            variant="outlined"
            value={formData.name?.value}
            onChange={handleChange}
            defaultValue=""
            className=""
            margin="dense"
          />
          <TextField
            name="email"
            error={formData.email?.error}
            label="Email"
            variant="outlined"
            value={formData.email?.value}
            onChange={handleChange}
            defaultValue=""
            margin="dense"
          />
          <TextField
            name="message"
            error={formData.message?.error}
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message?.value}
            onChange={handleChange}
            defaultValue=""
            margin="dense"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
