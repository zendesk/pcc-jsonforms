import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import './App.css';
import schema from './schema.json';
import rawData from './rawData.json';
import jsltData from './jsltData.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  '&$disabled': {
    color: 'black !important',
  },

  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
});

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
];

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(jsltData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const clearData = () => {
    setData({});
  };

  return (
    <Fragment>
      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        className={classes.container}
      >
        <div className={classes.demoform}>
          <JsonForms
            schema={schema}
            data={data}
            renderers={renderers}
            cells={materialCells}
            onChange={({ errors, data }) => setData(data)}
            readonly
            validationMode='NoValidation'
          />
        </div>
      </Grid>
    </Fragment>
  );
};

export default App;
